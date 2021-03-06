import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { FooOutlet } from './../outlets/FooOutlet';
import { BarOutlet } from './../outlets/BarOutlet';
import { BazOutlet } from './../outlets/BazOutlet';
import { FooBazOutlet } from './../outlets/FooBazOutlet';
import { FooBarOutlet } from './../outlets/FooBarOutlet';
import { HomeOutlet } from './../outlets/HomeOutlet';
import { ErrorOutlet } from './../outlets/ErrorOutlet';
import { Link } from 'dojo-2-router/Link';

const linkStyle = {
	margin: '20px'
};

export class App extends WidgetBase {
	render() {
		return v('div', [
			v('div', { styles: linkStyle }, [
				w(Link, { styles: linkStyle, to: 'home' }, [ 'Home' ]),
				w(Link, { styles: linkStyle, to: 'foo' }, [ 'Foo' ]),
				w(Link, { styles: linkStyle, isOutlet: false, to: '#foo/no-match' }, [ 'Foo Matches but next path does not' ]),
				w(Link, { styles: linkStyle, to: 'bar' }, [ 'Bar' ]),
				w(Link, { styles: linkStyle, to: 'baz' }, [ 'Baz' ]),
				w(Link, { styles: linkStyle, isOutlet: false, to: '#baz?param1=1&param2=1' }, [ 'Baz with Params' ]),
				w(Link, { styles: linkStyle, to: 'foobar', params: { bar: 'bazza' } }, [ 'FooBar' ]),
				w(Link, { styles: linkStyle, to: 'foobaz' }, [ 'FooBaz' ]),
				w(Link, { styles: linkStyle, isOutlet: false, to: '#blah?param=hello' }, [ 'Unknown Route' ])
			]),
			w(HomeOutlet, {}),
			w(FooOutlet, {}),
			w(BarOutlet, {}),
			w(BazOutlet, {}),
			w(FooBazOutlet, {}),
			w(FooBarOutlet, {}),
			w(ErrorOutlet, {})
		]);
	}
}
