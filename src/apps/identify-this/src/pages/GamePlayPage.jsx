
import logoPic from "../assets/images/benz_logo.jpg";
import AnswerGrid from "../components/AnswerGrid";
import ImagePanel from "../components/ImagePanel";
import ScoreProgress from "../components/ScoreProgress";
import TimerMeter from "../components/TimerMeter";


export default function GamePlayPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">Who is this?</h1>
            {/* Main Image Section */}
            <div className="relative flex flex-col items-center">
                <ImagePanel loadedImage={logoPic} />
                {/* Pagination dots */}
            <ScoreProgress />
            </div>
            {/* Answer Grid */}
            <AnswerGrid />            
            {/* Right Sidebar (thumbnails) */}
            <TimerMeter />
        </div>
    );
}
