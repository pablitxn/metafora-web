interface IHomeNavigationHook {
  handleNavigation: (pageId: Page) => void;
  currentPage: Page;
}

type Page = '01' | '02' | '03';

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
