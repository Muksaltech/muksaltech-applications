export default function TimerMeter() {
    return <>
        <div className="absolute right-4 top-20 flex flex-col items-end gap-3">
            <div className="w-24 h-24 bg-white/10 rounded-md hover:bg-white/20 transition self-end" />
            <div className="w-20 h-24 bg-white/10 rounded-md hover:bg-white/20 transition self-end" />
            <div className="w-16 h-24 bg-white/10 rounded-md hover:bg-white/20 transition self-end" />
            <div className="w-12 h-24 bg-white/10 rounded-md hover:bg-white/20 transition self-end" />
            <div className="w-8 h-24 bg-white/10 rounded-md hover:bg-white/20 transition self-end" />
        </div>
    </>

}