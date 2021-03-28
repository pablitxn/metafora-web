import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideMenu from "components/admin/side-menu";
import UserMenu from "components/admin/user-menu";
import { useUser } from "@auth0/nextjs-auth0";
import "./styles.less";

interface IAdminLayout {
	children: React.ReactNode;
}

const AdminLayout: FC<IAdminLayout> = ({ children }) => {
	const [option, setOption] = useState("create post");
	const handleOption = (op: string) => setOption(op);
	const { user } = useUser();

	return (
		<div className="admin-layout">
			<SideMenu handleOption={handleOption} />
			<header className="admin-layout__header">
				<UserMenu />
			</header>
			<div className="admin-layout__content">{children}</div>
		</div>
	);
};

export default AdminLayout;
