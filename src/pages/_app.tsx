import { FC } from "react";
import { AppProps } from "next/app";
import AppLayout from "layouts/app";
import "./app.less";
import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	const adminRegex = new RegExp("/admin");
	const isAdminRoute = adminRegex.test(router.pathname);

	return (
		<>
			{isAdminRoute ? (
				<UserProvider>
					<Component {...pageProps} />
				</UserProvider>
			) : null}

			{!isAdminRoute ? (
				<UserProvider>
					<AppLayout>
						<Component {...pageProps} />
					</AppLayout>
				</UserProvider>
			) : null}
		</>
	);
};

export default App;
