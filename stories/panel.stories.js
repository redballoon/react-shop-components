import React from 'react';

import Panels from '../src/Panels';

import 'react-bulma-components/src/index.sass';


export default {
	title: 'Panels',
	component: Panels,

	// https://storybook.js.org/docs/react/api/argtypes
	// https://storybook.js.org/docs/react/essentials/controls
	argTypes: {
		isOpen: {
			name: 'Toggle Panel',
			control: 'boolean',
			defaultValue: true,
		},

		align: {
			name: 'Alignment',
			control: {
				type: 'select',
				options: ['right', 'left'],
			},
			defaultValue: 'right',
		},

		activeKey: {
			name: 'Active Panel',
			control: {
				type: 'select',
				options: ['test', 'test2', 'testDoesNotExist'],
			},
			defaultValue: 'test',
		},
	},
};


export const withBasePanel = ({ isOpen, align, activeKey }) => (
	<div style={{
		position: 'absolute',
		width: '100%',
		height: '100%',
		background: '#eee'
	}}>
		<Panels isOpen={isOpen} align={align} activeKey={activeKey}>
			{() => (
				<>
					<Panels.Panel panelKey="test">this is panel A</Panels.Panel>

					<Panels.Panel panelKey="test2">this is panel B</Panels.Panel>
				</>
			)}
		</Panels>
	</div>
);

withBasePanel.storyName = 'render component with two panels';
withBasePanel.args = { isOpen: true, align: 'right', activeKey: 'test' };
