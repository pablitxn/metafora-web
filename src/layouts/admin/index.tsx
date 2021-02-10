import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideMenu from "components/admin/side-menu";
import "./styles.less";

interface IAdminLayout {
	children: React.ReactNode;
}

const AdminLayout: FC<IAdminLayout> = ({ children }) => {
	const [option, setOption] = useState("create post");
	const handleOption = (op: string) => setOption(op);

	const router = useRouter();

	useEffect(() => {
		console.log(router);
	}, [router]);

	return (
		<div className="admin-layout">
			<SideMenu handleOption={handleOption} />
			<div className="admin-layout__content">{children}</div>
		</div>
	);
};

export default AdminLayout;
