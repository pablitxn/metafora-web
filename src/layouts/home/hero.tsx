import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Hero: FC = () => {
	return (
		<div className="hero">
			<div className="hero__logo">
				<Image
					src="/logos/transparent_color-full-size.png"
					alt="Picture of the author"
					width={700}
					height={350}
				/>
			</div>
			<div className="hero__image">
				<Image
					src="/images/hero-background.jpg"
					alt="Picture of the author"
					width={750}
					height={500}
				/>
			</div>
		</div>
	);
};

export default Hero;
