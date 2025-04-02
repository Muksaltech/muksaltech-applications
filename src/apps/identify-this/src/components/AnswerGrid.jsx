import { useState } from "react";
import { toast } from "react-toastify";

export default function AnswerGrid({ sendAnswerStatus, sendEndGameData, quizDetails, currentAnswerSetIndex, sendCurrentAnswerIndexData }) {
    const [missedAnswersData, setMissedAnswersData] = useState([]);
    const displayNextImageAndAnswerChoices = (selectedAnswer) => {
        let totalQuestions = quizDetails.length
        let correctAnswer = String(quizDetails[currentAnswerSetIndex].imageAnswer)
        let correctAnswerImage = quizDetails[currentAnswerSetIndex].currentImage
        let questionNumber = currentAnswerSetIndex + 1

        if (currentAnswerSetIndex < quizDetails.length) { // this will allow the last item to run
            sendCurrentAnswerIndexData(currentAnswerSetIndex);

            if (selectedAnswer === correctAnswer) {
                sendAnswerStatus("correct"); // scoreProgress flag
                toast.success("Correct Answer");
            } else {
                sendAnswerStatus("wrong"); // scoreProgress flag
                toast.error("Wrong Answer");
                setMissedAnswersData(prev => [...prev, {
                    correctAnswerImage,
                    questionNumber,
                    correctAnswer
                }]);               
            }

//ToDO
            if (currentAnswerSetIndex === quizDetails.length - 1) {
                if (selectedAnswer != correctAnswer) {
                    //prompt loading of the final page
                    sendEndGameData({
                        totalQuestions,
                        missedAnswersData: [
                            ...missedAnswersData,
                            { correctAnswerImage, questionNumber, correctAnswer }
                        ]
                    });
                } else {
                    //prompt loading of the final page
                    sendEndGameData({
                        totalQuestions, missedAnswersData,  // last question being wrong
                    });
                    
                }
       
            }
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-8 w-full max-w-xl">
            {quizDetails[currentAnswerSetIndex]?.multipleChoices.map((choice, idx) => (
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
