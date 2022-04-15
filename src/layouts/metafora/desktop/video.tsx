import { FC } from "react";
import { Button } from "antd";
import "./styles.less";

const Video: FC = () => {
	return (
		<div className="video">
			<div className="video__mock-image" />
			<article className="video__description">
				<h2>Visión</h2>
				<p>
					Metáfora trabaja por la construcción de un mundo sustentable para
					todas las sociedades y personas. generando modelos participativos.
					Aportando respuestas éticas y fortaleciendo las capacidades de los
					intervinientes
				</p>
				<Button className="video__button">Info</Button>
			</article>
		</div>
	);
};

export default Video;
