import { FC, useState, useEffect, useCallback } from "react";
import { Table } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import usePostTable from "hooks/usePostTable";
import AdminLayout from "layouts/admin";
import { useUser } from "@auth0/nextjs-auth0";
import "./styles.less";

const Admin: FC = () => {
	const { user, error, isLoading } = useUser();
	const router = useRouter();
	const [posts, setPosts] = useState([]);

	const onEdit = (id: string) => {
		router.push(`/admin/post/${id}`);
	};

	// const fetchItems = useCallback(async () => {
	// 	const response = await fetch("http://localhost:3030/api/blog/post");
	// 	const { data } = await response.json();
	// 	setPosts(data);
	// }, []);

	const onDelete = async (id: string) => {
		// try {
		// 	const response = await fetch(
		// 		`http://localhost:3030/api/blog/post/${id}`,
		// 		{ method: "DELETE" }
		// 	);
		// 	response && fetchItems();
		// } catch (err) {
		// 	console.log(err);
		// }
	};

	const columns = usePostTable({ onEdit, onDelete, type: "published" });

	// useEffect(() => {
	// 	// posts.length === 0 && fetchItems();
	// 	console.log(user);
	// }, [user]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<AdminLayout>
				<div className="admin-list">
					<h2>Articulos del blog</h2>
					<Table
						className="admin-list__table"
						columns={columns}
						dataSource={posts}
					/>
				</div>
			</AdminLayout>
		);
	}

	return (
		<div className="sign-in">
			<Image
				src="/logos/transparent_color-full-size.png"
				alt="ilustration"
				width={450}
				height={250}
			/>
			<a href="/api/auth/login">Login</a>
		</div>
	);
};

export default Admin;
