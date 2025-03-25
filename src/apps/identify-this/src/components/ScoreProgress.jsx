export default function ScoreProgress() {
    return <>
        <div className="flex gap-2 mt-4">
            {Array(10).fill(0).map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-white" />
            ))}
        </div>
    </>

}