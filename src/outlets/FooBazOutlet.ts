import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase {
	render() {
		return v('div', [ 'Foo Baz' ]);
	}
}

const mapParams: MapParams = ({ queryParams, params }) => {
	console.log(queryParams);
	console.log(params);
};

const onEnter = () => {
	console.log('entering foobaz');
}

const onExit = () => {
	console.log('exiting foobaz');
}

export const FooBazOutlet = Outlet(Widget, 'foobaz', { mapParams, onEnter, onExit }, 'router');
