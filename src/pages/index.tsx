import { FC } from "react";
import Head from "next/head";
// import HomeLayout from "layouts/home";
import NewHomeLayout from "layouts/new-home";

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Fundacion Metáfora</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<NewHomeLayout />
		</>
	);
};

export default Home;
