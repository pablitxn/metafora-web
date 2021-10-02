import { FunctionComponent, useState, useEffect } from 'react';
import OrquestandoFuturosLayout from 'layouts/orq-futuros/desktop';
import OrquestandoFuturosMobile from 'layouts/orq-futuros/mobile';

const OrquestandoFuturos: FunctionComponent = () => {
  const [state, setState] = useState({
    isMobile: false,
  });
  const { isMobile } = state;

  useEffect(() => {
    if (window.innerWidth < 480) setState({ isMobile: true });
    if (window.innerWidth > 480) setState({ isMobile: false });
  }, []);

  return (
    <>
      {isMobile && <OrquestandoFuturosMobile />}
      {!isMobile && <OrquestandoFuturosLayout />}
    </>
  );
};

export default OrquestandoFuturos;
