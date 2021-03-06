import { FC } from "react";
import "./styles.less";
import Image from "next/image";

const OrquestandoFuturos: FC = () => {
	return (
		<section className="orq-futuros">
			<article className="orq-futuros__article">
				<h1>Orquestando futuros</h1>
				<p>
					El proyecto propone potenciar toda la educación recibida en el área
					musical de los y las jóvenes que se encuentren próximos a finalizar
					los estudios secundarios de la Ciudad Autónoma de Buenos Aires
					mediante el acercamiento a la vida de los músicos, sus formaciones
					académicas y de inserción laboral, tendiendo un puente entre el egreso
					de la escuela media y los estudios superiores. El Programa promoverá
					el acceso a la educación, la construcción de ciudadanía y de cultura,
					así como incentivará y fortalecerá la relación que los jóvenes tienen
					con la educación media y superior. El proyecto realizará aportes
					concretos al Objetivo de Desarrollo Sostenible N°4, 8 y 17 al promover
					la inclusión y permanencia de jóvenes de grupos vulnerables en el
					sistema educativo formal y en el mundo del trabajo, fortaleciendo sus
					competencias para el autoaprendizaje, la iniciativa, la integración
					grupal y la construcción de un proyecto de vida.
				</p>
			</article>
			<div className="orq-futuros__image">
				<Image
					className="orq-futuros__image"
					src="/images/orq-futuros.jpg"
					alt="logo"
					width={400}
					height={400}
				/>
				<div>
					<span>¿querés saber más sobre orquestando futuros?</span>
					<span>
						<a>acá la información completa</a> o <a>incribite</a>
					</span>
				</div>
			</div>
		</section>
	);
};

export default OrquestandoFuturos;
