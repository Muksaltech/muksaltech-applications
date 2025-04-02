import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";


export default function ScoreProgress({ responseStatus, currentScoreIndex, numberOfScoreBubbles }) {
    const [statusHistory, setStatusHistory] = useState(Array(numberOfScoreBubbles).fill(null));
    useEffect(() => {
        if (responseStatus && currentScoreIndex < statusHistory.length) {
          //  alert(currentScoreIndex)
            setStatusHistory(prev => {
                const updated = [...prev]; //push
                //alert(updated)
                updated[currentScoreIndex] = responseStatus; // scorecard index should always lag by 1
                return updated;
            });
        }
    }, [responseStatus, currentScoreIndex]);

    return (
        <div className="flex gap-2 mt-4">
            {statusHistory.map((status, i) => {
                let icon = <FaQuestion className="w-3 h-3 text-gray-400 transition-all duration-300" />;

                if (status === "correct") {
                    icon = <TiTick className="w-5 h-5 text-green-600 transition-all duration-300" />;
                } else if (status === "wrong") {
                    icon = <ImCross className="w-5 h-5 text-red-600 transition-all duration-300" />;
                }

                return (
                    <div key={i}>
                        {icon}
                    </div>
                );
            })}
        </div>
    );
}
