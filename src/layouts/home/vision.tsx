import { FC } from "react";
import { Button } from "antd";
import "./styles.less";

const Vision: FC = () => {
	return (
		<div className="vision">
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
			<article className="vision__article">
				<h2>Visión</h2>
				<p>
					Metáfora trabaja por la construcción de un mundo sustentable para
					todas las sociedades y personas. generando modelos participativos.
					Aportando respuestas éticas y fortaleciendo las capacidades de los
					intervinientes
				</p>
				<Button className="vision__button">Info</Button>
			</article>
		</div>
	);
};

export default Vision;
