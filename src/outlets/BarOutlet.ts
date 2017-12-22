import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { Outlet } from 'dojo-2-router/Outlet';
import { MapParams } from 'dojo-2-router/interfaces';

class Widget extends WidgetBase<any> {
	render() {
		return v('div', [
			v('div', [ 'Outlet - Bar' ]),
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
	console.log('entering bar');
}

const onExit = () => {
	console.log('exiting bar');
}

export const BarOutlet = Outlet(Widget, 'bar', { mapParams, onEnter, onExit }, 'router');
