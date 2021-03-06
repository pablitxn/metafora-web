import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const About: FC = () => {
	return (
		<section className="about">
			<h2 className="about__title">Nuestra misión</h2>
			<article className="about__article">
				<p>
					Promover <br />
					<strong>la cultura de la sustentabilidad</strong>
					<br />
					a través
					<br />
					de <strong>proyectos educativos innovadores</strong>
				</p>
				<Image
					src="/images/mar-chiquita.jpg"
					alt="logo"
					width={620}
					height={300}
				/>
			</article>
		</section>
	);
};

export default About;
