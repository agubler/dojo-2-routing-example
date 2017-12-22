import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { App } from './widgets/App';
import { Router } from 'dojo-2-router/Router';
import { HashHistory } from 'dojo-2-router/HashHistory';
import { Registry } from '@dojo/widget-core/Registry';
import { Injector } from '@dojo/widget-core/Injector';

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const registry = new Registry();

const routerConfig = [
	{
		outlet: 'home',
		path: '/'
	},
	{
		outlet: 'foo',
		path: 'foo',
		children: [
			{
				outlet: 'foobar',
				path: '{bar}/bar',
				defaultParams: {
					bar: 'default-bar-param'
				},
				defaultRoute: true
			},
			{
				outlet: 'foobaz',
				path: 'baz'
			}
		]
	},
	{
		outlet: 'bar',
		path: 'bar'
	},
	{
		outlet: 'baz',
		path: 'baz'
	}
];

const router = new Router(HashHistory, routerConfig);
const injector = new Injector(router);
router.on('navstart', () => {
	injector.emit({ type: 'invalidate' });
});
registry.defineInjector('router', injector);

const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.setProperties({ registry });

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();
