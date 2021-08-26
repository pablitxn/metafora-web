// Types
import { FunctionComponent, ReactNode } from "react";
// Router
import Link from "next/link";

interface INavigation {
	children: ReactNode;
	className?: string;
	href: string;
}

const Navigation: FunctionComponent<INavigation> = ({
	className,
	href,
	children
}) => {
	return (
		<Link href={href}>
			<a className={className}>{children}</a>
		</Link>
	);
};

export default Navigation;
