import { FC, ReactNode } from "react";
import Navbar from "components/_shared/navbar";
import BurgerMenu from "components/_shared/burger-menu";
import Head from "next/head";
import Footer from "components/_shared/footer";
import { useRouter } from "next/router";
import "./styles.less";

interface IAppLayout {
	children: ReactNode;
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Fundación Metáfora</title>
				<link rel="icon" href="/logos/transparent_color.png" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className="app">
				{router.pathname !== "/pronto" && <Navbar className="app__navbar" />}
				{router.pathname !== "/pronto" && (
					<BurgerMenu className="app__burger-menu" />
				)}
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default AppLayout;
