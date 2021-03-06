import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Nosotros: FC = () => {
	return (
		<section className="nosotros">
			<article className="nosotros__article">
				<header>
					<Image
						src="/logos/transparent_color-full-size.png"
						alt="logo"
						width={400}
						height={200}
					/>
				</header>
				<p>
					La Metáfora alude a un recurso literario que permite sustituir una
					palabra por otra, amplificando el sentido de lo que se quiere
					expresar. Es muy valiosa cuando queremos describir diferentes
					realidades, porque permite apoyarse en el simbolismo del lenguaje para
					ampliar el sentido de lo que expresamos, y así lograr una mayor
					comprensión. Toda Metáfora encierra una acción, ya que la sustitución
					de un término por otro sin alterar el significado de la expresión,
					implica que el ser hablante debe realizar actividades concretas para
					apropiarse del sentido. Por ejemplo, en el poema de Alfonsina Storni
					(poeta argentina 1892- 1938) “Tu me quieres blanca: Tu me quieres
					alba, me quieres de espuma, me quieres de nácar” etc. Los múltiples
					aspectos de la pureza se ven reflejados ampliamente en los atributos
					descriptos, asociados al concepto de mujer y de amor. Por este motivo,
					Fundación Metáfora enfoca sus Proyectos en ampliar el acceso de todos
					los participantes, promoviendo el desarrollo de las capacidades de las
					contrapartes intervinientes ( organizaciones de la sociedad civil,
					universidades, empresas, organismos nacionales e internacionales,
					etc.) para que las intervenciones permitan activar las respuestas
					justas que ayuden a construir un mundo más sustentable y solidario.
				</p>
			</article>
			<div className="nosotros__ilustration">
				<Image
					src="/images/mock-image2.png"
					alt="ilustration"
					width={1450}
					height={860}
				/>
				<div>
					<span>¿querés saber más sobre nosotros?</span>
					<a>acá nuestro manifiesto</a>
				</div>
			</div>
		</section>
	);
};

export default Nosotros;
