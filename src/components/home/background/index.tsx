import React, { FunctionComponent } from "react";
import "./style.less";

const Background: FunctionComponent = () => {
	return (
		<div className="background">
			<div className="background__canvas">
				<img
					className="background__image background__image--plant"
					src="/images/plant.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--core"
					src="/images/circle-core.svg"
					alt="logo"
				/>
				<img
					className="background__image background__image--line-a"
					src="/images/line.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--line-b"
					src="/images/line.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--line-c"
					src="/images/line.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--circle-11"
					src="/images/circle-11.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--dot-medium"
					src="/images/dot-medium.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--dot-small-a"
					src="/images/dot-small.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--dot-small-b"
					src="/images/dot-small.png"
					alt="logo"
				/>
				<img
					className="background__image background__image--dot-small-c"
					src="/images/dot-small.png"
					alt="logo"
				/>
			</div>
		</div>
	);
};

export default Background;
