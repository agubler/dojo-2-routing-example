import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase {
	render() {
		return v('div', [ 'Bar' ]);
	}
}

const mapParams: MapParams = ({ queryParams, params }) => {
	console.log(queryParams);
	console.log(params);
};

const onEnter = () => {
	console.log('entering bar');
}

const onExit = () => {
	console.log('exiting bar');
}

export const BarOutlet = Outlet(Widget, 'bar', { mapParams, onEnter, onExit }, 'router');
