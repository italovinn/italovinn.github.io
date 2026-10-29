
import { chromium } from "playwright";
import { readFile, mkdir, rename, rm } from "node:fs/promises";
import path from "node:path";

const projetos = JSON.parse(
  await readFile("public/projects.json", "utf-8")
);

const pastaDestino = path.resolve("public/previews");

await mkdir(pastaDestino, { recursive: true });

const browser = await chromium.launch({
  headless: true,
});

try {
  for (const projeto of projetos) {
    const url = projeto.homepage?.trim();

    if (!url || !/^https?:\/\//i.test(url)) {
      continue;
    }

    const nome = `${projeto.name.toLowerCase()}.png`;
    const destino = path.join(pastaDestino, nome);
    const temporario = `${destino}.tmp.png`;

    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });

    try {
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      if (url.includes("streamlit.app")) {
        await page.waitForTimeout(10000);
      } else {
        await page.waitForTimeout(2000);
      }

      await page.screenshot({
        path: temporario,
        fullPage: false,
        animations: "disabled",
      });

      await rm(destino, { force: true });
      await rename(temporario, destino);

    } catch (erro) {
      await rm(temporario, { force: true });
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
