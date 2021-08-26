import { FunctionComponent } from "react";
import { AppProps } from "next/app";
import "./app.less";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
