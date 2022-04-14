import { FC, useState, useEffect } from 'react';
import DesktopLayout from 'layouts/metafora/desktop';
import MobileLayout from 'layouts/metafora/mobile';

const Metafora: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);
    if (window.innerWidth > 768) setIsMobile(false);
  }, []);
  return (
    <>
      {isMobile && <MobileLayout />}
      {!isMobile && <DesktopLayout />}
    </>
  );
};

export default Metafora;
