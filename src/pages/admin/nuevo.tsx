import { FC } from "react";
import { useRouter } from "next/router";
import ArticleForm from "components/admin/article-form";
import AdminLayout from "layouts/admin";
import "./styles.less";

const CreateArticle: FC = () => {
	const router = useRouter();

	const onSubmit = async (formData: any) => {
		try {
			const response = await fetch("http://localhost:3030/api/blog/post", {
				method: "POST",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json"
				}
			});
			response && router.push("/admin");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="admin-create">
			<AdminLayout>
				<h1>Crear nuevo posteo en el blog</h1>
				<div className="admin-create__content">
					<ArticleForm onSubmit={onSubmit} />
				</div>
			</AdminLayout>
		</div>
	);
};

export default CreateArticle;
