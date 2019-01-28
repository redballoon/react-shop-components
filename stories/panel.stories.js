import React from 'react';

import { storiesOf } from '@storybook/react';

import Panels from '../src/Panels';

import 'react-bulma-components/src/index.sass';

const state = {
	panels: {
		active: 'test',
		open: true,
		test: {
			active: true,
		}
	}
};

storiesOf('Panels', module)
	.add('render component', () => (

		<Panels isOpen={state.panels.open} align="right" activeKey={state.panels.active}>
		{() => (
			<>
				{/* isActive={state.panels['test'].active} */}
				<Panels.Panel panelKey="test">
					this is a panel
				</Panels.Panel>

				<Panels.Panel panelKey="test2">
					this is a panel
				</Panels.Panel>
			</>
		)}
		</Panels>
	))
