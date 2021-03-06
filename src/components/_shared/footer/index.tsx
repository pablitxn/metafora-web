import { FC } from "react";
import "./styles.less";

interface IFooter {
	className?: string;
}

const Footer: FC<IFooter> = ({ className = "" }) => {
	return (
		<footer className={`footer ${className}`}>info@metafora.org.ar</footer>
	);
};

export default Footer;
