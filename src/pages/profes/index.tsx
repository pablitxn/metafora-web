import { FC } from "react";
import DownloadContent from "components/_shared/download-content";
import "./styles.less";

const Profes: FC = () => {
	const content = [
		{
			level: "Inicial",
			id: 2312,
			content: [
				{
					title: "Historia",
					material: [
						{ id: 32131, type: "pdf", name: "Residuos" },
						{ id: 23213, type: "pdf", name: "Árboles" }
					]
				}
			]
		},
		{
			level: "Secundario",
			id: 1213123,
			content: [
				{
					title: "Ciencias Sociales",
					material: [
						{ id: 12312, type: "pdf", name: "Árboles" },
						{ id: 23123, type: "pdf", name: "Residuos" }
					]
				}
			]
		},
		{
			level: "Otro",
			id: 123121,
			content: [
				{
					title: "Biologia",
					material: [
						{ id: 1, type: "pdf", name: "Árboles" },
						{ id: 2, type: "pdf", name: "Residuos" }
					]
				}
			]
		}
	];

	return (
		<div className="profes">
			<h1 className="profes__title">Recursos Educativos ONLINE</h1>
			<h2 className="profes__subtitle">#Compartiendo #Aprendizajes </h2>

			<img
				alt="logo metafora"
				src="/logos/background-white.jpg"
				className="profes__logo"
			/>

			<article className="profes__description">
				<p>
					Nuestro planeta Tierra es un sistema complejo en el que existen
					millones de interacciones entre todos los elementos de la naturaleza.
					Es tan complejo y amplio que es imposible estudiarlo como un solo
					conjunto. Debemos conocer en profundidad cada uno de sus componentes e
					interrelaciones y, en consecuencia, cuidar, conservar y regenerar la
					vida y el conocimiento sobre ella.
				</p>

				<p>
					El <span>Programa Escuelas Sustentables de Mar Chiquita</span>,
					propone actividades para todas las áreas y niveles educativos, que
					permitan abordar las temáticas de Educación Ambiental de manera
					sistémica en concordancia con cada uno de los subsistemas de la
					Tierra. A la vez, cada actividad está enmarcada en el sistema
					curricular oficial de la Provincia de Buenos Aires, ordenándose de
					acuerdo al Nivel, el Área y la Temática. Dentro de cada documento
					encontrarán además, el bloque y los conceptos a los que corresponde
					cada actividad.
					<br /> <br /> Compartimos actividades para que puedas trabajar desde
					tu casa o en el aula cuando volvamos a ella. Cualquier comentario o
					sugerencia escribinos a educacionsustentable@amartya.org ¡Esperamos
					que lo disfrutes!
				</p>
			</article>

			<div className="divider" />

			<div className="profes__offer">
				<h3>
					Si sos docente, antes de comenzar te invitamos a trabajar esta
					herramienta de Pensamiento Sistémico que te guiará para trabajar con
					el material presentado.
				</h3>

				<a>Material de introduccion</a>
			</div>

			<div className="divider" />

			<div className="profes__content">
				{content.map((el: any) => (
					<DownloadContent key={el.id} level={el.level} content={el.content} />
				))}
			</div>
		</div>
	);
};

export default Profes;
