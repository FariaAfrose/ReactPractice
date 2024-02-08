import { useEffect, useState } from 'react';

const useWindowWidth = (screenSize) => {
const [onSmallScreen, setonSmallScreen] = useState(false);

useEffect(() => {
    const checkScreenSize = () => {
        setonSmallScreen(window.innerWidth < screenSize);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
}, [screenSize]);
return onSmallScreen;
};
export default useWindowWidth;
