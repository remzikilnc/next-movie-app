import React from 'react';

const CardLoading = () => {
    return (
        <div className="text-xl text-white">
            <div className="border border-white/10 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="bg-slate-900 h-96 w-full"></div>
                </div>
            </div>
        </div>
    );
};

const CardsLoadingGrid = () => {
    return (
        <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 60 }, (_, index) => (
                <CardLoading key={index} />
            ))}
        </div>
    );
};

export default CardsLoadingGrid;
