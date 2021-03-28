import { FC } from "react";
import { Avatar } from "antd";
import AdminLayout from "layouts/admin";
import { useUser } from "@auth0/nextjs-auth0";
import "./styles.less";

const Configs: FC<any> = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<AdminLayout>
			<div className="admin-configs">
				<h2>Perfil y configuraciones</h2>
				<div className="admin-configs__profile">
					<Avatar
						size={120}
						icon={<img src={user.picture} alt="avatar image" />}
					/>
					<ul>
						<li>
							<h3>Nombre</h3>
							<span>{user.name}</span>
						</li>
						<li>
							<h3>Email</h3>
							<span>{user.email}</span>
						</li>
						<li>
							<h3>Nickname</h3>
							<span>{user.nickname}</span>
						</li>
						<li>
							<h3>Rol</h3>
							<span>admin</span>
						</li>
					</ul>
				</div>
			</div>
		</AdminLayout>
	);
};

export default Configs;
