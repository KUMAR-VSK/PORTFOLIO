import { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
            <div className="text-center">
                {/* Logo/Name */}
                <div className="mb-8">
                    <h1 className="text-6xl font-bold gradient-text mb-4 animate-pulse">
                        KVS
                    </h1>
                    <p className="text-cyan-400 text-lg">Full Stack Developer</p>
                </div>

                {/* Loading Bar */}
                <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage */}
                <p className="text-gray-400 mt-4 text-sm">{progress}%</p>

                {/* Animated Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
