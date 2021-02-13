import { FC } from "react";
import { AppProps } from "next/app";
import "./app.less";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
