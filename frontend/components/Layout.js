import Head from 'next/head';
import {Container} from 'reactstrap';

import Navigation from './Header/Navigation';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

	}

	static async getInitialProps({req}) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return {pageProps, isAuthenticated};
	}

	render() {
		const {children} = this.props;
		const title = "Deliveroo Clone - Food Marketplace";

		return (
			<>
				<Head>
					<title>{title}</title>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					<link rel="stylesheet"
					      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
					      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
					      crossOrigin="anonymous"/>
					<script src="https://js.stripe.com/v3"/>
				</Head>

				<Navigation/>

				<Container>
					{children}
				</Container>

				<footer className="my-xl-5">
					<p className="text-center text-muted small">Deliveroo Clone GmbH © 2018</p>
				</footer>
			</>
		)
	}

}