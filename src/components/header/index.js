import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

import * as firebase from 'firebase';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Link href="/"><h1>Webwinkel</h1></Link>
				<nav>
					<Link>
            <button class="mdl-button mdl-js-button">
              Button
            </button>
          </Link>
				</nav>
			</header>
		);
	}
}
