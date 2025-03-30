import { useState } from "react";
import { toast } from "react-toastify";

export default function AnswerGrid({ sendAnswerStatus, sendEndGameData, quizDetails, currentAnswerSetIndex, sendCurrentAnswerIndexData }) {
    const [missedAnswersData, setMissedAnswersData] = useState([]);
    const displayNextImageAndAnswerChoices = (selectedAnswer) => {
        if (currentAnswerSetIndex < quizDetails.length) {
            let correctAnswer = String(quizDetails[currentAnswerSetIndex].imageAnswer)
            let correctAnswerImage = quizDetails[currentAnswerSetIndex].currentImage
            let questionNumber = currentAnswerSetIndex + 1
            let totalQuestions = quizDetails.length
                
            if (selectedAnswer === correctAnswer) {
                sendAnswerStatus("correct");
                toast.success("Correct Answer");
              //  setUpdatedAnswerContainer(prev => [...prev, "Correct"]);
            } else {
                sendAnswerStatus("wrong");
                toast.error("Wrong Answer");
                setMissedAnswersData(prev => [...prev, {
                    correctAnswerImage,
                    questionNumber,
                    correctAnswer
                    
                }]);
            }

            if (currentAnswerSetIndex !== quizDetails.length - 1) {
                sendCurrentAnswerIndexData(currentAnswerSetIndex + 1);
            } else {
                //console.log(missedAnswersData); // You may need to move this to a `useEffect` for latest state
                sendEndGameData({ totalQuestions, missedAnswersData });
            }
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-8 w-full max-w-xl">
            {quizDetails[currentAnswerSetIndex].multipleChoices.map((choice, idx) => (
                <button
                    key={idx}
                    className="bg-gray-800 hover:bg-gray-700 py-2 sm:py-4 px-6  rounded-lg"
                    onClick={() => displayNextImageAndAnswerChoices(choice)}
                >
                    {choice}
                </button>
            ))}
        </div>
    );
}
