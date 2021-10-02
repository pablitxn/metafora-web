import { FunctionComponent, useState, useEffect } from 'react';
import HomeLayout from 'layouts/home';
import HomeMobile from 'layouts/home/mobile';

const Home: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 480) setIsMobile(true);
    if (window.innerWidth > 480) setIsMobile(false);
  }, []);
  return (
    <>
      {isMobile && <HomeMobile />}
      {!isMobile && <HomeLayout />}
    </>
  );
};

export default Home;
