export default function AnimatedBackGround(){
    return(
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

            <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

            <div className="absolute left-[40%] top-[20%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.9))]" />
        </div>
    );
}