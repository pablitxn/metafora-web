import { FC, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import ArticleForm from "components/admin/article-form";
import AdminLayout from "layouts/admin";

const EditArticle: FC = () => {
	const router = useRouter();
	const [state, setState] = useState({
		id: "",
		data: null
	});
	const { query } = useRouter();

	const fetchItem = useCallback(async (id: string) => {
		const response = await fetch(`http://localhost:3030/api/blog/post/${id}`);
		const { data } = await response.json();
		setState((prev) => ({ ...prev, data }));
	}, []);

	const onSubmit = async (formData: any) => {
		console.log("me ejectu");
		delete formData.id;
		try {
			const response = await fetch(
				`http://localhost:3030/api/blog/post/${state.id}`,
				{
					method: "PUT",
					body: JSON.stringify(formData),
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
			response && router.push("/admin");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (query.editar && !state.data) {
			const postId = query.editar[1];
			setState((prev) => ({
				...prev,
				id: postId
			}));
			fetchItem(postId);
		}
	}, [query]);

	return (
		<div className="admin-create">
			<AdminLayout>
				<h1>Editar</h1>
				{state.data ? <></> : null}
				<div className="admin-create__content">
					<ArticleForm data={state.data} onSubmit={onSubmit} />
				</div>
			</AdminLayout>
		</div>
	);
};

export default EditArticle;
