import { FC } from "react";
import { AppProps } from "next/app";
import AppLayout from "layouts/app";
import "./app.less";
import { useRouter } from "next/router";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	const adminRegex = new RegExp("/admin");

	return (
		<>
			{adminRegex.test(router.pathname) ? <Component {...pageProps} /> : null}

			{!adminRegex.test(router.pathname) ? (
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			) : null}
		</>
	);
};

export default App;
