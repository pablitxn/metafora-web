import { FunctionComponent, useState, useEffect } from 'react';
import OrquestandoFuturosLayout from 'layouts/orquestando-futuros';
import OrquestandoFuturosMobile from 'layouts/orquestando-futuros/mobile';

const OrquestandoFuturos: FunctionComponent = () => {
  const [state, setState] = useState({
    isMobile: false,
  });
  const { isMobile } = state;

  useEffect(() => {
    if (window.innerWidth < 480) setState({ isMobile: true });
    if (window.innerWidth > 480) setState({ isMobile: false });
  }, [window.innerWidth]);

  return (
    <>
      {isMobile && <OrquestandoFuturosMobile />}
      {!isMobile && <OrquestandoFuturosLayout />}
    </>
  );
};

export default OrquestandoFuturos;
