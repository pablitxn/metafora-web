import { FunctionComponent } from 'react';
import { HeaderContent, Logo, Links } from './styles';

const Header: FunctionComponent = () => {
  return (
    <HeaderContent>
      <Logo src="/images/logo-orquestando-1.png" alt="logo" />
      <Links />
    </HeaderContent>
  );
};

export default Header;
