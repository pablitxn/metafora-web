import { useState } from 'react';

const useHomeNavigation = (): IHomeNavigationHook => {
  const [state, setState] = useState({
    currentPage: '01' as Page,
  });
  const { currentPage } = state;

  const handleNavigation = (pageId: Page) => {
    setState({ currentPage: pageId });
  };

  return { handleNavigation, currentPage };
};

export default useHomeNavigation;
