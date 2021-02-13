import { FC, useState } from "react";
import { Menu } from "antd";
import { useRouter } from "next/router";
import Navigation from "components/_shared/navigation";
import "./styles.less";

const Navbar: FC = () => {
	const router = useRouter();
	const [state, setState] = useState({
		collapsed: false,
		defaultKey: [router.asPath]
	});

	return (
		<div className="navbar">
			<Menu
				className="navbar"
				defaultSelectedKeys={state.defaultKey}
				mode="horizontal"
			>
				<Menu.Item key="/">
					<Navigation href="/">Home </Navigation>
				</Menu.Item>
				<Menu.Item key="/nosotros">
					<Navigation href="/nosotros">Metáfora</Navigation>
				</Menu.Item>
				<Menu.Item key="/orquestando-futuros">
					<Navigation href="/orquestando-futuros">
						Orquestando Futuros
					</Navigation>
				</Menu.Item>
				<Menu.Item key="/profes">
					<Navigation href="/profes">Contenido para profes</Navigation>
				</Menu.Item>
				<Menu.Item key="/blog">
					<Navigation href="/blog">Blog</Navigation>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
