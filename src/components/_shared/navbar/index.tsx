import { FC, useEffect, useState } from "react";
import { Menu } from "antd";
import { useRouter } from "next/router";
import Navigation from "components/_shared/navigation";
import "./styles.less";

interface INavbar {
	className: string;
}

const Navbar: FC<INavbar> = ({ className }) => {
	const router = useRouter();
	const [state, setState] = useState({
		collapsed: false,
		defaultKey: [router.asPath],
		selectedKey: [router.asPath]
	});

	const handleMenu = ({ key }) =>
		setState((prev) => ({ ...prev, selectedKey: [key] }));

	useEffect(() => {
		setState((prev) => ({ ...prev, selectedKey: [router.asPath] }));
	}, [router.asPath]);

	return (
		<div className={className}>
			<Menu
				className="navbar"
				defaultSelectedKeys={state.defaultKey}
				selectedKeys={state.selectedKey}
				mode="horizontal"
				onClick={handleMenu}
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
				<Menu.Item key="/dona">
					<Navigation href="/dona">Doná</Navigation>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
