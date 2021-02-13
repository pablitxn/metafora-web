import { FC } from "react";
import Article from "components/blog/article";
import "./styles.less";

interface ILastPosts {
	blogData: any;
}

const LastPosts: FC<ILastPosts> = ({ blogData }) => {
	const mock = [blogData[0], blogData[1], blogData[2]];

	return (
		<div className="last-posts">
			<h2>Últimos posteos en el blog</h2>
			<ul>
				{mock.map((article: any, i: any) => (
					<li key={i}>
						<Article data={article} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default LastPosts;
