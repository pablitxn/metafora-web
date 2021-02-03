import { FC } from "react";
import Image from "next/image";
import "./styles.less";
import Footer from "components/_shared/footer";

const Home: FC = () => {
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

export default Home;
