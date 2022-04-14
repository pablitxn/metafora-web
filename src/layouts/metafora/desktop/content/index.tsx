import { FC } from 'react';
import Whatsapp from 'components/whatsapp-icon';
import About01 from './about-01';
import About02 from './about-02';
import About03 from './about-03';
import { HomeContentContainer } from './styles';

const HomeContent: FC<IHomeContentProps> = ({ selected }) => {
  return (
    <HomeContentContainer>
      {selected === '01' && <About01 />}
      {selected === '02' && <About02 />}
      {selected === '03' && <About03 />}
      <Whatsapp className="whatsapp-icon" />
    </HomeContentContainer>
  );
};

export default HomeContent;
