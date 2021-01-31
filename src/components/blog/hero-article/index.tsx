import { FC } from "react";
// import { Button } from "antd";
import "./style.less";

// interface IHeroArticle {
// 	src: string;
// 	alt: string;
// 	title: string;
// 	subTitle: string;
// 	author: string;
// 	brief: string;
// }

const HeroArticle: FC<any> = ({ data }) => {
	const {
		subTitle,
		title,
		author,
		backgroundImage: src,
		altBackgroundImage: alt,
		brief
	} = data;

	return (
		<div className="hero-article">
			<img alt={alt} src={src} className="hero-article__background" />

			<article className="hero-article__content">
				<h2>{subTitle.toUpperCase()}</h2>
				<h1>{title.toUpperCase()}</h1>
				<h3>por {author}</h3>
				<p>{brief}</p>
			</article>

			{/* <Button> -&gt; </Button> */}
		</div>
	);
};

export default HeroArticle;
