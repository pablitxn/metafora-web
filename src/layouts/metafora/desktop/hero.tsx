import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Hero: FC = () => {
	return (
		<div className="hero">
			<div className="hero__logo">
				<Image
					src="/logos/transparent_color.png"
					alt="Picture of the author"
					width={400}
					height={400}
				/>
			</div>
		</div>
	);
};

export default Hero;
