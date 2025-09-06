import { useState, useEffect } from 'react';

const useMediaquery = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType('mobile');
      } else if (width >= 768 && width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return {
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
  };
};

export default useMediaquery;
