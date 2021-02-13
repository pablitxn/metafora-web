import { FC, useState, useEffect } from "react";
import Head from "next/head";
import HomeLayout from "layouts/home";

const Home: FC = () => {
	const [state, setState] = useState({
		blogData: []
	});

	useEffect(() => {
		const getMockData = async () => {
			const response = await fetch("http://localhost:3000/api/blog");
			const { homeArticles: blogData } = await response.json();
			blogData && setState({ blogData });
		};
		getMockData();
	}, []);

	return (
		<>
			<Head>
				<title>Fundacion Metáfora</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<HomeLayout blogData={state.blogData} />
		</>
	);
};

export default Home;
