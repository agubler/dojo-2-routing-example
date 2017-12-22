import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { FooOutlet } from './../outlets/FooOutlet';
import { BarOutlet } from './../outlets/BarOutlet';
import { BazOutlet } from './../outlets/BazOutlet';
import { FooBazOutlet } from './../outlets/FooBazOutlet';
import { FooBarOutlet } from './../outlets/FooBarOutlet';
import { HomeOutlet } from './../outlets/HomeOutlet';
import { ErrorOutlet } from './../outlets/ErrorOutlet';

export class App extends WidgetBase {
	render() {
		return v('div', [
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
