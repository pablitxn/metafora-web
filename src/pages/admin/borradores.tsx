import { FC, useState } from "react";
import AdminLayout from "layouts/admin";
import usePostTable from "hooks/usePostTable";
import { Table } from "antd";
import "./styles.less";

const data = [
	{
		key: "1",
		id: "1",
		title: "Los negocios detrás del modelo extractivista",
		author: "Fundación Metáfora",
		created_at: "9/9/2020",
		tags: ["actualidad", "medioambiente"]
	},
	{
		key: "2",
		id: "2",
		title: "Cuidado medioambiental",
		author: "Maria Florencia Alcaraz",
		created_at: "03/01/2021",
		tags: ["medioambiente", "sustentabilidad"]
	}
];

const Draft: FC = () => {
	const [state, setState] = useState({ isLogged: false });
	const onPublish = (id: string) => {};
	const onDelete = (id: string) => {};

	const columns = usePostTable({ onPublish, onDelete, type: "draft" });
	return (
		<AdminLayout>
			<div className="admin-draft">
				<h2>Guardados</h2>
				<Table
					className="admin-draft__table"
					columns={columns}
					dataSource={data}
				/>
			</div>
		</AdminLayout>
	);
};

export default Draft;
