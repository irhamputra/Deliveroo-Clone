import Link from "next/link";
import { Nav, NavItem } from 'reactstrap';

export default () => (
	<header>
		<Nav className="navbar navbar-dark bg-dark">
			<NavItem>
				<Link href="/">
					<a className="navbar-brand">Deliveroo 🍔</a>
				</Link>
			</NavItem>

			<NavItem className="ml-auto">
				<Link href="/signin">
					<a className="nav-link">Login</a>
				</Link>
			</NavItem>

			<NavItem>
				<Link href="/signup">
					<a className="nav-link">Sign Up</a>
				</Link>
			</NavItem>
		</Nav>
	</header>
)