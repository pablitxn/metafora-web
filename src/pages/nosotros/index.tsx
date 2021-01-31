import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Nosotros: FC = () => {
	return (
		<div className="metafora">
			<article className="metafora__description">
				<div className="metafora__header">
					<Image
						src="/logos/transparent_color.png"
						alt="logo"
						width={220}
						height={200}
					/>
				</div>
				<p>
					El Justicialismo necesita apóstoles y para ser apóstol hay que estar
					dispuesto a ser héroe, y solamente los fanáticos de amor por una causa
					son capaces de morir por un ideal Para conducir a un pueblo la primera
					condición es que uno haya salido del pueblo, que sienta y piense como
					el pueblo. Quien se dedica a la conducción debe ser profundamente
					humanista: el conductor siempre trabaja para los demás, jámas para
					élQuien se dedica a la conducción debe ser profundamente humanista: el
					conductor siempre trabaja para los demás, jámas para él Yo llevo en
					mis oídos la más maravillosa música, que, para mí, es la palabra del
					pueblo argentino y solamente los fanáticos de amor por una causa son
					capaces de morir por un ideal La única verdad es la realidad El
					Justicialismo ha dejado de ser la causa de un hombre para ser la causa
					del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida
				</p>
			</article>
			<img src="/images/mock-image2.png" />
		</div>
	);
};

export default Nosotros;
