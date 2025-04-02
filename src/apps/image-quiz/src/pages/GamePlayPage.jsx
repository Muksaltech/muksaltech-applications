
import { useState} from "react";
//import logoPic from "../assets/images/benz_logo.jpg";
import AnswerGrid from "../components/AnswerGrid";
import ImagePanel from "../components/ImagePanel";
import ScoreProgress from "../components/ScoreProgress";
//import TimerMeter from "../components/TimerMeter";


export default function GamePlayPage({ filteredQuizData, sendEndGameData }) {
    const [{ gameplayTitle }] = filteredQuizData;
    const [{ quizDetails }] = filteredQuizData;
    const [ansSetIdex, setAnsSetIdex] = useState(0); // state to control the siblings of answergrid
    const [ansStatus, setAnsStatus] = useState(null); // state to control the siblings of answergrid
    //const [endGamedata, setEndGamedata] = useState([{}]); // state to control the siblings of answergrid
    const [scoreProgressIndex, setScoreProgressIndex] = useState(0); 
    
    let exnGame = [{}]
    const getEndGameData = (endGameData) => {
        // setEndGamedata(endGameData)
        exnGame = endGameData;
    }

    const getCurrentAnswerIndexData = (currentAnswerIndexData) => {
        //before incrementing currentAnswerIndexData, asign the unincremented to scoreprogress
        setScoreProgressIndex(currentAnswerIndexData) // for scoreprogress

        //now increment if it is within index else load endgame componenent
       setTimeout(() => {
           currentAnswerIndexData < quizDetails.length - 1 ? setAnsSetIdex(currentAnswerIndexData + 1) : sendEndGameData(exnGame)
       }, 1000); 
    }
 
    const getAnswerStatus = (answerStatus) => {
        setAnsStatus(answerStatus);
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6">{gameplayTitle}</h1>
            {/* Main Image Section */}
            <div className="relative flex flex-col items-center">
                <ImagePanel loadedFallBackImage={quizDetails[ansSetIdex]?.currentFallbackImage}
                    loadedImage={quizDetails[ansSetIdex]?.currentImage}
                />
           
                {/* Pagination dots */}
                <ScoreProgress
                    responseStatus={ansStatus} 
                    currentScoreIndex={scoreProgressIndex}
                    numberOfScoreBubbles={quizDetails.length}
                />
            </div>
            {/* Answer Grid */}
            <AnswerGrid quizDetails={quizDetails}
                currentAnswerSetIndex={ansSetIdex}
                sendCurrentAnswerIndexData={getCurrentAnswerIndexData}
                sendEndGameData={getEndGameData}
                sendAnswerStatus = {getAnswerStatus}
            />            
            {/* Right Sidebar (thumbnails) <TimerMeter />*/}
            
        </div>
    );
}
