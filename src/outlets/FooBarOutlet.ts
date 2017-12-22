import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase {
	render() {
		return v('div', [ 'Foo Bar' ]);
	}
}

const mapParams: MapParams = ({ queryParams, params }) => {
	console.log(queryParams);
	console.log(params);
};

const onEnter = () => {
	console.log('entering foobar');
}

const onExit = () => {
	console.log('exiting foobar');
}

export const FooBarOutlet = Outlet(Widget, 'foobar', { mapParams, onEnter, onExit }, 'router');
