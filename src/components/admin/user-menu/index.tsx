import { FC, useState } from "react";
import { Avatar, List } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import "./styles.less";

const ADMIN = "Admin";
const CONFIGS = "Configuraciones";
const LOGOUT = "Salir";

const UserMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, error, isLoading } = useUser();
	const router = useRouter();
	const handleMenu = () => setIsOpen((prev) => !prev);
	const options = ["Admin", "Configuraciones", "Salir"];

	const handleNavigation = (item: string) => {
		switch (item) {
			case CONFIGS:
				router.push("/admin/configs");
				break;
			case ADMIN:
				router.push("/admin");
				break;
			case LOGOUT:
				router.push("/api/auth/logout");
				break;
			default:
				break;
		}
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<div className="user-menu">
			<div className="user-menu__avatar">
				<Avatar
					size={40}
					icon={<img src={user?.picture} alt="avatar image" />}
				/>
				<CaretDownOutlined
					className="user-menu__toggle-action"
					onClick={handleMenu}
				/>
			</div>
			{isOpen ? (
				<div className="user-menu__options">
					<List
						bordered
						dataSource={options}
						renderItem={(item) => (
							<List.Item onClick={() => handleNavigation(item)}>
								{item}
							</List.Item>
						)}
					/>
				</div>
			) : null}
		</div>
	);
};

export default UserMenu;
