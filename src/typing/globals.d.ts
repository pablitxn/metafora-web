interface IHomeNavigationHook {
  handleNavigation: (pageId: Page) => void;
  currentPage: Page;
}

type Page = '01' | '02' | '03';
