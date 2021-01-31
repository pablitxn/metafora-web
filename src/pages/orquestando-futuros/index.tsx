import { FC } from "react";
import "./styles.less";

const OrquestandoFuturos: FC = () => {
	return (
		<div className="orq-futuros">
			<div className="orq-futuros__content">
				<article className="orq-futuros__article">
					<h1>Orquestando futuros</h1>
					<p>
						El Justicialismo necesita apóstoles y para ser apóstol hay que estar
						dispuesto a ser héroe, y solamente los fanáticos de amor por una
						causa son capaces de morir por un ideal Para conducir a un pueblo la
						primera condición es que uno haya salido del pueblo, que sienta y
						piense como el pueblo.
					</p>
				</article>
				<img src="/images/orq-futuros.jpg" />
			</div>
		</div>
	);
};

export default OrquestandoFuturos;
