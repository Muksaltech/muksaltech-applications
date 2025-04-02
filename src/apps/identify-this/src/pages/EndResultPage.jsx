
export default function EndResultPage({ data }) {
    const missedQuestions = data.missedAnswersData || [{}]; // Just in case `data` is undefined
    const totalPage = data.totalQuestions;
    const allCorrect = missedQuestions.length === 0;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">Result</h1>

            {/* Summary Message */}
            <p className="text-lg mb-4 flex text-center">
                {
                    allCorrect ? (
                        "🎉 Well done! You got all the questions right!"
                    ) : (
                        `You got ${totalPage - missedQuestions.length} out of ${totalPage} right. Review the correct answer for your missed question(s) below.`
                    )
                }
            </p>

            {/* Conditional Table */}
            {!allCorrect && (
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full bg-gray-800 text-left rounded-lg overflow-hidden">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-2 px-4">Question Number</th>
                                <th className="py-2 px-4">Image of Missed Question</th>
                                <th className="py-2 px-4">Correct Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {missedQuestions.map((item, index) => (
                                <tr key={index} className="border-t border-gray-600">
                                    <td className="py-2 px-4">{item.questionNumber}</td>
                                    <td className="py-2 px-4">
                                        <img
                                            src={item.correctAnswerImage}
                                            alt={`Question ${item.questionNumber}`}
                                            className="w-32 h-auto rounded"
                                        />
                                    </td>
                                    <td className="py-2 px-4">{item.correctAnswer}</td>
                                </tr>
                            ))}
                        </tbody>
            
                    </table>
                </div>
            )}
        </div>
    );
}
