import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase<any> {
	render() {
		return v('div', [
			v('div', [ 'Outlet - Exact Foo' ]),
			v('div', [ '' ]),
			v('div', [ `Params ${JSON.stringify(this.properties.params)}` ]),
			v('div', [ `Query Params ${JSON.stringify(this.properties.queryParams)}` ]),
		 ]);
	}
}
class PartialWidget extends WidgetBase<any> {
	render() {
		return v('div', [
			v('div', [ 'Outlet - Partial Foo' ]),
			v('div', [ '' ]),
			v('div', [ `Params ${JSON.stringify(this.properties.params)}` ]),
			v('div', [ `Query Params ${JSON.stringify(this.properties.queryParams)}` ]),
		 ]);
	}
}

class Error extends WidgetBase<any> {
	render() {
		return v('div', [
			v('div', [ 'Outlet - Error Foo' ]),
			v('div', [ '' ]),
			v('div', [ `Params ${JSON.stringify(this.properties.params)}` ]),
			v('div', [ `Query Params ${JSON.stringify(this.properties.queryParams)}` ]),
		 ]);
	}
}

const mapParams: MapParams = ({ queryParams, params }) => {
	return {
		queryParams,
		params
	};
};

const onEnter = () => {
	console.log('entering foo');
}

const onExit = () => {
	console.log('exiting foo');
}

export const FooOutlet = Outlet({
	index: Widget,
	main: PartialWidget,
	error: Error
}, 'foo', { mapParams, onEnter, onExit }, 'router');
