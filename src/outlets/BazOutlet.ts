import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase {
	render() {
		return v('div', [ 'Baz' ]);
	}
}

const mapParams: MapParams = ({ queryParams, params }) => {
	console.log(queryParams);
	console.log(params);
};

const onEnter = () => {
	console.log('entering baz');
}

const onExit = () => {
	console.log('exiting baz');
}

export const BazOutlet = Outlet(Widget, 'baz', { mapParams, onEnter, onExit }, 'router');
