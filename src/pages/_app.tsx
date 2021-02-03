import { FC } from "react";
import { AppProps } from "next/app";
// import AppLayout from "layouts/app";
import Footer from "components/_shared/footer";
import "./styles.less";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default App;
