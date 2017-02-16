import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Link href="/"><h1>Webwinkel</h1></Link>
				<nav>
					<Link href="/login">Login</Link>
				</nav>
			</header>
		);
	}
}
