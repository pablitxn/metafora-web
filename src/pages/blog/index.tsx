import { FC, useEffect, useState } from "react";
import BlogLayout from "layouts/blog";

const Profes: FC = () => {
	const [state, setState] = useState({
		heroArticles: [],
		homeArticles: []
	});

	useEffect(() => {
		const getMockData = async () => {
			const response = await fetch("http://localhost:3000/api/blog");
			const { heroArticles, homeArticles } = await response.json();
			setState({ heroArticles, homeArticles });
		};
		getMockData();
	}, []);

	return (
		<div>
			{state.heroArticles.length ? (
				<BlogLayout
					heroArticles={state.heroArticles}
					homeArticles={state.homeArticles}
				/>
			) : (
				<span>loading...</span>
			)}
		</div>
	);
};

export default Profes;
