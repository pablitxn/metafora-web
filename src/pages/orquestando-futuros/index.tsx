import { FC } from "react";
import "./styles.less";
import Image from "next/image";

const OrquestandoFuturos: FC = () => {
	return (
		<div className="orq-futuros">
			<div className="orq-futuros__content">
				<article className="orq-futuros__article">
					<h1>Orquestando futuros</h1>
					<p>
						Phasellus egestas primis nascetur leo semper ante ligula scelerisque
						pulvinar, inceptos rutrum a in accumsan eu penatibus senectus. Nisi
						himenaeos nascetur ut ante parturient curabitur quis natoque class,
						eu morbi venenatis mi facilisis magnis pulvinar accumsan nunc in,
						dui montes feugiat lectus suscipit litora massa leo. Vivamus
						hendrerit sociosqu luctus per nisl tristique tincidunt tempus cum,
						dictumst egestas placerat torquent in ultricies est volutpat nullam
						mollis, mi primis malesuada augue morbi metus cubilia velit.
					</p>
				</article>
				<div className="orq-futuros__image">
					<Image
						className="orq-futuros__image"
						src="/images/orq-futuros.jpg"
						alt="logo"
						width={400}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
};

export default OrquestandoFuturos;
