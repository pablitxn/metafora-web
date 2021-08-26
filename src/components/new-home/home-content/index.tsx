import React, { FunctionComponent } from "react";
import Whatsapp from "../../_shared/whatsapp-icon";
import About01 from "./about-01";
// import About02 from "./about-02"
// import About03 from "./about-03"
import "./style.less";

interface IHomeContentProps {
	selected: string;
}

const HomeContent: FunctionComponent<IHomeContentProps> = ({ selected }) => {
	return (
		<div className="home-content">
			{selected === "01" && <About01 />}
			{/* {selected === "02" && <About02 />} */}
			{/* {selected === "03" && <About03 />} */}
			<Whatsapp className="home-content__whatsapp" />
		</div>
	);
};

export default HomeContent;