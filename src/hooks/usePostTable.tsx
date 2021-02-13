import Navigation from "components/_shared/navigation";
import { Tag, Space, Button } from "antd";

interface IUsePostTable {
	onEdit?: (id: string) => void;
	onDelete: (id: string) => void;
	type: "published" | "draft";
	onPublish?: (id: string) => void;
}

const PUBLISHED = "published";
const DRAFT = "draft";

const usePostTable = ({
	onEdit,
	onDelete,
	type,
	onPublish
}: IUsePostTable): Array<any> => {
	const postColumns = [
		{
			title: "Título",
			dataIndex: "title",
			key: "title",
			render: (text: string) => <span style={{ color: "green" }}>{text}</span>
		},
		{
			title: "Autor",
			dataIndex: "author",
			key: "author"
		},
		{
			title: "Publicado",
			dataIndex: "created_at",
			key: "created_at",
			render: (date: any) => <span>Hoy</span>
		},
		{
			title: "Action",
			key: "action",
			render: (_text: string, { id }) => (
				<Space>
					<Button onClick={() => {}}>Ver detalles</Button>
					<Button onClick={() => onEdit(id)}>Editar </Button>
					<Button onClick={() => onDelete(id)}>Borrar</Button>
				</Space>
			)
		}
	];

	const draftColumns = [
		{
			title: "Título",
			dataIndex: "title",
			key: "title",
			render: (text: string, { id }) => (
				<Navigation href={`/admin/editar/${id}`}>{text}</Navigation>
			)
		},
		{
			title: "Autor",
			dataIndex: "author",
			key: "author"
		},
		{
			title: "Ultima actualización",
			dataIndex: "created_at",
			key: "created_at",
			render: (text: string) => <span>{text}</span>
		},
		{
			title: "Tags",
			key: "tags",
			dataIndex: "tags",
			render: (tags) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? "geekblue" : "green";
						if (tag === "loser") {
							color = "volcano";
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: "Action",
			key: "action",
			render: (text, { id }) => (
				<Space size="middle">
					<Button onClick={() => onPublish(id)}>Publicar</Button>
					<Button onClick={() => onPublish(id)}>Editar</Button>
					<Button onClick={() => onDelete(id)}>Borrar</Button>
				</Space>
			)
		}
	];

	switch (type) {
		case PUBLISHED:
			return postColumns;
		case DRAFT:
			return draftColumns;
		default:
			return [];
	}
};

export default usePostTable;
