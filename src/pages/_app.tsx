import { FC, useEffect } from "react";
import { AppProps } from "next/app";
import AppLayout from "layouts/app";
import "./app.less";
import { useRouter } from "next/router";
import Footer from "components/_shared/footer";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	const adminRegex = new RegExp("/admin");
	const prontoRegex = new RegExp("/pronto");

	useEffect(() => {
		if (router.pathname === "/") {
			router.push("/pronto");
		}
		if (router.pathname === "/_error") {
			router.push("/pronto");
		}
	}, [router]);

	return (
		<>
			{prontoRegex.test(router.pathname) ? (
				<>
					<Component {...pageProps} />
					<Footer />
				</>
			) : null}

			{adminRegex.test(router.pathname) ? <Component {...pageProps} /> : null}

			{!prontoRegex.test(router.pathname) &&
			!adminRegex.test(router.pathname) ? (
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			) : null}
		</>
	);
};

export default App;
