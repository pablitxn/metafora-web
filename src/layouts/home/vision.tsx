import { FC } from "react";
import "./styles.less";

const Vision: FC = () => {
	return (
		<div className="vision">
			<article className="vision__article">
				<h2 className="vision__title">Visión</h2>
				<p>
					Trabajamos hace más de doce años en forma directa con diversas
					comunidades en diferentes contextos, implementando proyectos
					educativos en el campo de la educación formal y no formal, para la
					integración de familias en situación de vulnerabilidad. Enfocados en
					el trabajo en redes, desarrollamos modelos asociativos con otras
					organizaciones locales, promoviendo la participación y asegurando la
					sustentabilidad de los proyectos.
				</p>
			</article>
			<div className="vision__video">
				<video
					loop
					autoPlay
					muted
					style={{
						position: "relative",
						width: "100%",
						left: 0,
						top: 0
					}}
				>
					<source src="/videos/que-es-metafora.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
};

export default Vision;
