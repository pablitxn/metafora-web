import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HOME_PATH, ORQ_FUTUROS_PATH } from './constants';

const useHeaderMobile = (): IHeaderHook => {
  const { pathname } = useRouter();
  const [pageActive, setPageActive] = useState({
    home: pathname === HOME_PATH,
    orqFuturos: pathname === ORQ_FUTUROS_PATH,
  });

  useEffect(() => {
    if (pathname === HOME_PATH) setPageActive({ orqFuturos: false, home: true });
    if (pathname === ORQ_FUTUROS_PATH) setPageActive({ orqFuturos: true, home: false });
  }, [pathname]);

  return { pageActive };
};

export default useHeaderMobile;
