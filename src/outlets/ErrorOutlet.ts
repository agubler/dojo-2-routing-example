import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase {
	render() {
		return v('div', [ 'Unknown!' ]);
	}
}

const mapParams: MapParams = ({ queryParams, params }) => {
	console.log(queryParams);
	console.log(params);
};

const onEnter = () => {
	console.log('entering errorOutlet');
}

const onExit = () => {
	console.log('exiting errorOutlet');
}

export const ErrorOutlet = Outlet({ error: Widget }, 'errorOutlet', { mapParams, onEnter, onExit }, 'router');
