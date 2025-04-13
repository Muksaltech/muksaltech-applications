import React, { useState } from 'react';

function AppModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-6">
            <button
                onClick={openModal}
                className="bg-blue-600 text-white px-4 py-2 rounded">
                Open Modal
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-xl">
                        <h2 className="text-xl font-bold mb-4">This is a modal!</h2>
                        <p className="mb-4">Put your content here.</p>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white px-4 py-2 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AppModal;
