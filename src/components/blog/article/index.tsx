import { FC } from "react";
import "./styles.less";

// interface IArticle {
// 	src: string;
// 	alt: string;
// 	title: string;
// 	subTitle: string;
// 	author: string;
// 	imgAuthor?: string;
// }

const Article: FC<any> = ({ data }) => {
	const {
		subTitle,
		title,
		author,
		backgroundImage: src,
		altBackgroundImage: alt,
		phAuthor
	} = data;

	const imageStyle = {
		backgroundImage: `url(${src})`,
		backgroundSize: "cover",
		backgroundPosition: "center"
	};

	return (
		<div className="article" style={{ ...imageStyle }}>
			<article className="article__content">
				<h2>{subTitle}</h2>
				<h1>{title}</h1>
				<h3>
					por {author}
					{phAuthor && ` | Foto por ${phAuthor}`}
				</h3>
			</article>
		</div>
	);
};

export default Article;
