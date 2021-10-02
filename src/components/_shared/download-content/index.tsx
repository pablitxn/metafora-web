import { FC } from "react";
import { FilePdfFilled } from "@ant-design/icons";
import "./styles.less";

interface IDownloadContent {
	level: string;
	content: any;
}

const DownloadContent: FC<IDownloadContent> = ({ level, content }) => {
	return (
		<div className="dwn-cnt">
			<h2 className="dwn-cnt__title">
				Nivel <br /> {level}
			</h2>
			<div className="dwn-cnt__box">
				{content.map((el: any) => (
					<div className="dwn-cnt__element">
						<h3 className="download-box__title">{el.title}</h3>
						<ul>
							{el.material.map((mt: any) => (
								<div>
									<li key={mt.id}>
										{mt.type === "pdf" && <FilePdfFilled />}
										{mt.name}
									</li>
								</div>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default DownloadContent;
