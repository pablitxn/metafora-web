import { FC } from "react";
import HeroArticle from "components/blog/hero-article";
import Article from "components/blog/article";
import { Carousel } from "antd";
import "./styles.less";

interface IBlogLayout {
	heroArticles: any;
	homeArticles: any;
}

const BlogLayout: FC<IBlogLayout> = ({ heroArticles, homeArticles }) => {
	return (
		<div className="blog-layout">
			<Carousel
				dotPosition="top"
				className="blog-layout__carousel"
				autoplay
				autoplaySpeed={2500}
			>
				{heroArticles.map((article: any, i: any) => (
					<div key={i}>
						<HeroArticle data={article} />
					</div>
				))}
			</Carousel>

			<div className="blog-layout__chronicle">
				<h2>Cronicas</h2>
				<ul>
					{homeArticles.map((article: any, i: any) => (
						<li key={i}>
							<Article data={article} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogLayout;
