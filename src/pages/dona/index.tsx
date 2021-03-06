import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Dona: FC = () => {
	return (
		<section className="dona">
			<article className="dona__article">
				<header>
					<Image
						src="/logos/transparent_color-full-size.png"
						alt="logo"
						layout="intrinsic"
						width={400}
						height={200}
					/>
				</header>
				<p>
					Estamos muy agradecidos de que quieras colaborar con nosotros!! <br />
					Podés hacerlo a través de:
				</p>
				<div>
					<Image
						src="/logos/mercadop.png"
						alt="mercado pago logo"
						width={250}
						height={200}
					/>
				</div>
			</article>
			<div className="dona__ilustration">
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

export default Dona;
