'use client'
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                

            </div>
        </div>
    );
};

export default loading;