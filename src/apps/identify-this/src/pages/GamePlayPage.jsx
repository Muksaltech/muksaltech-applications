
import { useState, useEffect } from "react";
//import logoPic from "../assets/images/benz_logo.jpg";
import AnswerGrid from "../components/AnswerGrid";
import ImagePanel from "../components/ImagePanel";
import ScoreProgress from "../components/ScoreProgress";
import TimerMeter from "../components/TimerMeter";


export default function GamePlayPage({ filteredQuizData, sendEndGameData }) {
    const [{ gameplayTitle }] = filteredQuizData;
    const [{ quizDetails }] = filteredQuizData;

    const [ansSetIdex, setAnsSetIdex] = useState(0); // state to control the siblings of answergrid
    const [ansStatus, setAnsStatus] = useState(null); // state to control the siblings of answergrid


    useEffect(() => {
       /* [
            {
                "id": 3,
                "gameplayTitle": "Name this American president",
                "quizDetails": [
                    {
                        "currentImage": "url(link/to/AbrahamLincoln)",
                        "imageAnswer": "Abraham Lincoln",
                        "multipleChoices": [
                            "Ulysses S. Grant",
                            "Abraham Lincoln",
                            "Andrew Jackson",
                            "James Monroe"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/BarackObama)",
                        "imageAnswer": "Barack Obama",
                        "multipleChoices": [
                            "Barack Obama",
                            "Joe Biden",
                            "Bill Clinton",
                            "George W. Bush"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/BillClinton)",
                        "imageAnswer": "Bill Clinton",
                        "multipleChoices": [
                            "Bill Clinton",
                            "Joe Biden",
                            "Barack Obama",
                            "George W. Bush"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/DonaldTrump)",
                        "imageAnswer": "Donald Trump",
                        "multipleChoices": [
                            "Ronald Reagan",
                            "Donald Trump",
                            "George H. W. Bush",
                            "Joe Biden"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/FranklinRoosevelt)",
                        "imageAnswer": "Franklin D. Roosevelt",
                        "multipleChoices": [
                            "Franklin D. Roosevelt",
                            "Theodore Roosevelt",
                            "Harry S. Truman",
                            "Woodrow Wilson"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/GeorgeWashington)",
                        "imageAnswer": "George Washington",
                        "multipleChoices": [
                            "George Washington",
                            "John Adams",
                            "Thomas Jefferson",
                            "James Madison"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/JoeBiden)",
                        "imageAnswer": "Joe Biden",
                        "multipleChoices": [
                            "Bill Clinton",
                            "Donald Trump",
                            "Joe Biden",
                            "George W. Bush"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/JohnFKennedy)",
                        "imageAnswer": "John F. Kennedy",
                        "multipleChoices": [
                            "John F. Kennedy",
                            "Ronald Reagan",
                            "Richard Nixon",
                            "Lyndon B. Johnson"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/RonaldReagan)",
                        "imageAnswer": "Ronald Reagan",
                        "multipleChoices": [
                            "Ronald Reagan",
                            "George H. W. Bush",
                            "Gerald Ford",
                            "Richard Nixon"
                        ]
                    },
                    {
                        "currentImage": "url(link/to/TheodoreRoosevelt)",
                        "imageAnswer": "Theodore Roosevelt",
                        "multipleChoices": [
                            "Theodore Roosevelt",
                            "Franklin D. Roosevelt",
                            "William McKinley",
                            "Woodrow Wilson"
                        ]
                    }
                ]
            }
        ]*/
}, [])

    
    const getCurrentAnswerIndexData = (currentAnswerIndexData) => {
        setAnsSetIdex(currentAnswerIndexData); 
    }
    const getEndGameData = (endGameData) => {
        sendEndGameData(endGameData);
    }
    const getAnswerStatus = (answerStatus) => {
        setAnsStatus(answerStatus);
    }

    
    
    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">{gameplayTitle}</h1>
            {/* Main Image Section */}
            <div className="relative flex flex-col items-center">
                <ImagePanel loadedImage={quizDetails[ansSetIdex].currentImage} />
           
                {/* Pagination dots */}
                <ScoreProgress
                    responseStatus={ansStatus} 
                    currentScoreIndex={ansSetIdex}
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
            {/* Right Sidebar (thumbnails) */}
            <TimerMeter />
        </div>
    );
}
