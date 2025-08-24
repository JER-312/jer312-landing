import React, {useEffect, useState} from 'react';

interface DeviceCheckWrapperProps {
    largeScreenComponent: React.ReactNode;
    smallScreenComponent: React.ReactNode;
    threshold?: number; // Optional threshold for screen width
}

const DeviceCheckWrapper: React.FC<DeviceCheckWrapperProps> = ({
                                                                   largeScreenComponent,
                                                                   smallScreenComponent,
                                                                   threshold = 1024, // Default threshold
                                                               }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= threshold);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= threshold);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [threshold]);

    return isLargeScreen ? <>{largeScreenComponent}</> : <>{smallScreenComponent}</>;
};

export default DeviceCheckWrapper;