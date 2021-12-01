import { FunctionComponent, useState, useEffect } from 'react';
import HomeLayout from 'layouts/home/desktop';
import HomeMobile from 'layouts/home/mobile';

const Home: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1024) setIsMobile(true);
  }, []);
  return (
    <>
      {isMobile && <HomeMobile />}
      {!isMobile && <HomeLayout />}
    </>
  );
};

export default Home;
