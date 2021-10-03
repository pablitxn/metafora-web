import { FunctionComponent, useState, useEffect } from 'react';
import OrquestandoFuturosDesktop from 'layouts/orq-futuros/desktop';
import OrquestandoFuturosMobile from 'layouts/orq-futuros/mobile';

const OrquestandoFuturos: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) setIsMobile(true);
    if (window.innerWidth > 500) setIsMobile(false);
  }, []);

  return (
    <>
      {isMobile && <OrquestandoFuturosMobile />}
      {!isMobile && <OrquestandoFuturosDesktop />}
    </>
  );
};

export default OrquestandoFuturos;
