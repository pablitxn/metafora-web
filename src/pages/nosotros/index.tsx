import { FC } from "react";
import Image from "next/image";
import "./styles.less";

const Nosotros: FC = () => {
	return (
		<div className="metafora">
			<article className="metafora__description">
				<div className="metafora__header">
					<Image
						src="/logos/transparent_color-full-size.png"
						alt="logo"
						width={420}
						height={200}
					/>
				</div>
				<p>
					Sed iaculis egestas bibendum potenti pulvinar metus pharetra
					ultricies, facilisis consequat ornare commodo sollicitudin integer
					mauris neque nisl, fusce posuere tempor maecenas magna sodales eget.
					Dis viverra cum leo metus montes aptent, potenti nibh risus arcu
					sociosqu hendrerit aliquam, vivamus porttitor lacinia ad maecenas.
					Inceptos rutrum magnis pellentesque cum aliquam per posuere aliquet
					in, elementum nunc sodales mi diam interdum nibh vitae porttitor
					phasellus, malesuada tincidunt molestie metus luctus quisque a sed.
				</p>
			</article>
			<img src="/images/mock-image2.png" />
		</div>
	);
};

export default Nosotros;
