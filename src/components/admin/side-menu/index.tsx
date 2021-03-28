import { FC, useState } from "react";
import { Menu } from "antd";
import {
	FileSearchOutlined,
	DatabaseOutlined,
	FileAddOutlined,
	SaveOutlined,
	TeamOutlined,
	CommentOutlined,
	BarChartOutlined,
	MailOutlined,
	CalendarOutlined
} from "@ant-design/icons";
import "./styles.less";
import { useRouter } from "next/router";
import Navigation from "components/_shared/navigation";

const { SubMenu } = Menu;

interface ISideMenu {
	handleOption: (op: string) => void;
}

const SideMenu: FC<ISideMenu> = ({ handleOption }) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const [state, setState] = useState({
		collapsed: false,
		defaultKey: [router.asPath]
	});

	return (
		<div className="side-menu">
			<img
				src="/logos/transparent_color-full-size.png"
				alt="logo"
				className="side-menu__logo"
			/>
			<Menu
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				mode="inline"
				theme="light"
				inlineCollapsed={isOpen}
				className="side-menu__container"
			>
				<Menu.Item key="1" icon={<DatabaseOutlined />}>
					<Navigation href="/admin">Lista de posteos </Navigation>
				</Menu.Item>
				<Menu.Item key="2" icon={<FileAddOutlined />}>
					<Navigation href="/admin/nuevo">Crear uno nuevo</Navigation>
				</Menu.Item>
				<Menu.Item key="3" icon={<SaveOutlined />}>
					<Navigation href="/admin/borradores">Ver guardados</Navigation>
				</Menu.Item>
				<SubMenu key="sub1" icon={<TeamOutlined />} title="Metafora">
					<Menu.Item key="11" icon={<CalendarOutlined />}>
						Calendario de posteos
					</Menu.Item>
					<SubMenu
						key="sub2"
						icon={<FileSearchOutlined />}
						title="Reportes y métricas"
					>
						<Menu.Item key="21" icon={<BarChartOutlined />}>
							Visitas web
						</Menu.Item>
						<Menu.Item key="25" icon={<BarChartOutlined />}>
							Visitas blog
						</Menu.Item>
						<Menu.Item key="23" icon={<CommentOutlined />}>
							Comentarios
						</Menu.Item>
					</SubMenu>
				</SubMenu>
				<Menu.Item key="22" icon={<MailOutlined />}>
					Mensajes de contacto
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default SideMenu;
