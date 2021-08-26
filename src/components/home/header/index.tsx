import React, { FunctionComponent } from "react";
import Image from "next/image";
import Navigation from "components/_shared/navigation";
import { Instagram, Facebook, Mail } from "react-feather";
import "./style.less";

const Header: FunctionComponent = () => {
	return (
		<header className="header">
			<Image
				src="/logos/transparent_color-full-size.png"
				alt="Picture of the author"
				width={200}
				height={100}
			/>
			<div className="header__navigation">
				<Navigation href="/">Orquestando Futuros</Navigation>
				<div className="divider" />
				<div className="header__social-media">
					<Instagram />
					<Facebook />
					<Mail />
				</div>
			</div>
		</header>
	);
};

export default Header;
