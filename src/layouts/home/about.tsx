import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const About: FC = () => {
	return (
		<div className="about">
			<h2>Nuestra misión</h2>
			<div className="about__hero">
				<h3>
					Promover <br />
					<strong>la cultura de la sustentabilidad</strong>
					<br />
					a través
					<br />
					de <strong>proyectos educativos innovadores</strong>
				</h3>
				<Image
					src="/images/mar-chiquita.jpg"
					alt="logo"
					width={620}
					height={500}
				/>
			</div>
		</div>
	);
};

export default About;
