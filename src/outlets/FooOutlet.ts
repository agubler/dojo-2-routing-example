import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase {
	render() {
		return v('div', [ 'Foo' ]);
	}
}

class Error extends WidgetBase {
	render() {
		return v('div', [ 'Foo Error' ]);
	}
}

const mapParams: MapParams = ({ queryParams, params }) => {
	console.log(queryParams);
	console.log(params);
};

const onEnter = () => {
	console.log('entering foo');
}

const onExit = () => {
	console.log('exiting foo');
}

export const FooOutlet = Outlet({ main: Widget, error: Error }, 'foo', { mapParams, onEnter, onExit }, 'router');
