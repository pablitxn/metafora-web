interface INavigationProps {
	onPageChange: (pageId: Page) => void;
	pageSelected: Page;
}

type Page = "01" | "02" | "03";
