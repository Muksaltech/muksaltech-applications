//import {useState } from "react"

export default function AnswerGrid({ sendAnswerStatus, sendEndGameData, quizDetails, currentAnswerSetIndex, sendCurrentAnswerIndexData}) {
    const displayNextImageAndAnswerChoices = (selectedAnswer) => {     
        //generate a sound as a button progresses
        if (currentAnswerSetIndex < quizDetails.length) {
            if (selectedAnswer === quizDetails[currentAnswerSetIndex].imageAnswer ) {
                // send answer status to Score progress
                sendAnswerStatus("correct")
                alert("Correct Answer")
            } else {
                sendAnswerStatus("wrong")
                alert("Wrong Answer")                 
                // use state to send correct
            }
           
            if (currentAnswerSetIndex !== quizDetails.length - 1) { // prevent increment 
                currentAnswerSetIndex++;
                sendCurrentAnswerIndexData(currentAnswerSetIndex); // send the state to parent to feed his siblings

            } else {
                //Load End Result page
                sendEndGameData("ended"); // TODO - add the actual data later
            }

            //also load the next picture
            //reset the visited answered button visited background
        } 
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-xl">
            {quizDetails[currentAnswerSetIndex].multipleChoices.map((choice, idx) => (
                <button
                    key={idx}
                    className="bg-gray-800 hover:bg-gray-700 py-4 px-6 rounded-lg"
                    onClick={() => displayNextImageAndAnswerChoices(choice)}
                >
                    {choice}
                </button>
            ))}
        </div>
    )

}