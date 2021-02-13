import { FC } from "react";
import Image from "next/image";
import "./styles.less";
import { Button } from "antd";

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
			<ul className="about__metrics">
				<li>
					<Image
						src="/images/orq-futuros.jpg"
						alt="logo"
						width={200}
						layout="fixed"
						height={200}
					/>
					<h4>Orquestando futuros</h4>
					<article>
						Lorem ipsum dolor sit amet consectetur, adipiscing elit lacus quis
						nisi, ad per rutrum facilisi. Suscipit nisl inceptos malesuada
						litora ante pretium purus magna rhoncus fames, interdum feugiat erat
						sagittis pellentesque parturient cum sem libero vel
					</article>
					<Button>Leer más</Button>
				</li>
				<li>
					<Image src="/images/school.jpg" alt="logo" width={220} height={200} />
					<h4>Profesores</h4>
					<article>
						Lorem ipsum dolor sit amet consectetur, adipiscing elit lacus quis
						nisi, ad per rutrum facilisi. Suscipit nisl inceptos malesuada
						litora ante pretium purus magna rhoncus fames, interdum feugiat erat
						sagittis pellentesque parturient cum sem libero vel
					</article>
					<Button>Leer más</Button>
				</li>
				<li>
					<Image
						src="/images/mar-chiquita.jpg"
						alt="logo"
						width={220}
						height={200}
					/>
					<h4>Mar chiquita sustentable</h4>
					<article>
						Lorem ipsum dolor sit amet consectetur, adipiscing elit lacus quis
						nisi, ad per rutrum facilisi. Suscipit nisl inceptos malesuada
						litora ante pretium purus magna rhoncus fames, interdum feugiat erat
						sagittis pellentesque parturient cum sem libero vel
					</article>
					<Button>Leer más</Button>
				</li>
			</ul>
		</div>
	);
};

export default About;
