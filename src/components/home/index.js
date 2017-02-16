import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Webwinkel</h1>
				<p>Hier komt de webwinkel</p>
			</div>
		);
	}
}
