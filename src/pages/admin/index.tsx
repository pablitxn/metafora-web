import { FC, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import usePostTable from "hooks/usePostTable";
import AdminLayout from "layouts/admin";
import Login from "./login";
import { Table } from "antd";
import "./styles.less";
// import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from "@auth0/nextjs-auth0";

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

	useEffect(() => {
		// posts.length === 0 && fetchItems();
		console.log(user);
	}, [user]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<div className="admin-list">
				<AdminLayout>
					<h1>Articulos del blog</h1>
					<Table
						className="admin-list__table"
						columns={columns}
						dataSource={posts}
					/>
				</AdminLayout>
			</div>
		);
	}

	if (!user) <a href="/api/auth/login">Login</a>;
};

export default Admin;
