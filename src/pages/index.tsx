import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Home: FC = () => {
	return (
		<div className="web">
			<img
				src="/logos/transparent_color.png"
				alt="Picture of the author"
				className="web__img"
			/>
			<article className="web__article">
				<h1>Prepárense ... Algo realmente genial está llegando pronto</h1>
				<p>
					Estamos trabajando en nuestra Web. ¡Los esperamos en febrero! Nos
					podes contactar a info@metafora.org.ar o en nuestras redes sociales
				</p>
			</article>
		</div>
	);
};

export default Home;
