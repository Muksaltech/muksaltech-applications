import { useEffect, useState } from "react";

export default function ScoreProgress({ responseStatus, currentScoreIndex, numberOfScoreBubbles }) {
    const [statusHistory, setStatusHistory] = useState(Array(numberOfScoreBubbles).fill(null));
    useEffect(() => {
       // alert(`${responseStatus}, ${currentScoreIndex}`);
        if (responseStatus && currentScoreIndex < statusHistory.length) {
            setStatusHistory(prev => {
                const updated = [...prev]; //push
                updated[currentScoreIndex] = responseStatus;
                return updated;
            });
        }
       // console.log(statusHistory)
    }, [responseStatus, currentScoreIndex, statusHistory]);

    return (
        <div className="flex gap-2 mt-4">
            {statusHistory.map((status, i) => {
                let bgColor = "bg-gray-400"; // default for unanswered

                if (status === "correct") bgColor = "bg-green-600";
                else if (status === "wrong") bgColor = "bg-red-600";

                return (
                    <div
                        key={i}
                        className={`w-5 h-5 rounded-full ${bgColor} transition-all duration-300`}
                    />
                );
            })}
        </div>
    );
}
