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
		<AdminLayout>
			<div className="admin-create">
				<h2>Crear nuevo posteo en el blog</h2>
				<div className="admin-create__content">
					<ArticleForm onSubmit={onSubmit} />
				</div>
			</div>
		</AdminLayout>
	);
};

export default CreateArticle;
