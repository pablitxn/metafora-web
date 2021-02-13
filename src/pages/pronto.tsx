import { FC, useEffect } from "react";
// import Image from "next/image";
import Footer from "components/_shared/footer";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
import "./styles.less";

const Pronto: FC = () => {
	const router = useRouter();

	useEffect(() => {
		console.log(route);
	}, [router]);

	return (
		<div className="home">
			<div className="home__content">
				<img
					alt="Picture of the author"
					src="/logos/transparent_color-full-size.png"
					className="home__img"
				/>
				<article className="home__article">
					<h1>Prepárense ... Algo realmente genial está llegando pronto</h1>
					<p>
						Estamos trabajando en nuestra Web. ¡Los esperamos en febrero! Nos
						podes contactar a info@metafora.org.ar o en nuestras redes sociales
					</p>
				</article>
			</div>
			<Footer />
		</div>
	);
};

export default Pronto;
