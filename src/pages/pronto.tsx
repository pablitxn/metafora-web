import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Pronto: FC = () => {
	return (
		<div className="pronto">
			<div className="pronto__content">
				<Image
					alt="Picture of the author"
					src="/logos/transparent_color-full-size.png"
					width={600}
					height={400}
					className="pronto__img"
				/>
				<article className="pronto__article">
					<h1>Prepárense ... Algo realmente genial está llegando pronto</h1>
					<p>
						Estamos trabajando en nuestra Web. ¡Los esperamos en febrero! Nos
						podes contactar a info@metafora.org.ar o en nuestras redes sociales
					</p>
				</article>
			</div>
		</div>
	);
};

export default Pronto;
