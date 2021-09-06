import { useState, useEffect } from "react";

const useHomeNavigation = () => {
	const [state, setState] = useState({
		currentPage: "01" as Page
	});
	const { currentPage } = state;

	const handleNavigation = (newPage: Page) => {
		setState({ currentPage: newPage });
	};

	return { handleNavigation, currentPage };
};

export default useHomeNavigation;
