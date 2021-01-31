import { FC } from "react";
import { AppProps } from "next/app";
import AppLayout from "layouts/app";
import "./styles.less";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	);
};

export default App;
