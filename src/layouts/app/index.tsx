import { FC, ReactNode } from "react";
import Navbar from "components/_shared/navbar";
import Head from "next/head";
import Footer from "components/_shared/footer";

interface IAppLayout {
	children: ReactNode;
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Fundación Metáfora</title>
				<link rel="icon" href="/logos/transparent_color.png" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				{/* TODO: quitar las fuentes que no se utilizarán */}
				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default AppLayout;
