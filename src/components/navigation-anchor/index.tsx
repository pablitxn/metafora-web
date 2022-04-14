import { FC } from 'react';
import Link from 'next/link';

const Navigation: FC<INavigationAnchorProps> = ({ className, href, children }) => {
  return (
    <Link href={href}>
      <a href={href} className={className}>
        {children}
      </a>
    </Link>
  );
};

export default Navigation;
