import { FC, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Navigation from "components/_shared/navigation";
import "./styles.less";

interface IBurgerMenu {
	className: string;
}

const BurgerMenu: FC<IBurgerMenu> = ({ className }) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen((prev) => !prev);

	return (
		<div className={`burger-menu ${className}`}>
			<button onClick={handleClick} className="burger-menu__action">
				<MenuOutlined />
			</button>

			{open ? (
				<nav className="burger-menu__nav">
					<ul>
						<li onClick={handleClick}>
							<Navigation href="/">Home </Navigation>
						</li>
						<li onClick={handleClick}>
							<Navigation href="/nosotros">Metáfora</Navigation>
						</li>
						<li onClick={handleClick}>
							<Navigation href="/orquestando-futuros">
								Orquestando Futuros
							</Navigation>
						</li>
						<li onClick={handleClick}>
							<Navigation href="/dona">Doná</Navigation>
						</li>
					</ul>
				</nav>
			) : null}
		</div>
	);
};

export default BurgerMenu;
