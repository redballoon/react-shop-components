import React from 'react';

import { storiesOf } from '@storybook/react';

import Panels from '../src/Panels';

import 'react-bulma-components/src/index.sass';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';


const getActiveState = () => text('Active Panel', 'test');

const getOpenState = () => boolean('Toggle Panel', true);

const getAlignment = () => select(
	// label
	'Alignment',
	// options
	{
		Right: 'right',
		Left: 'left',
	},
	// default
	'right',
	// group id
	// 'GROUP-1',
);



const stories = storiesOf('Panels', module);

stories.addDecorator(withKnobs);

stories.add('render component with two panels', () => (

	<Panels isOpen={getOpenState()} align={getAlignment()} activeKey={getActiveState()}>
	{() => (
		<>
			<Panels.Panel panelKey="test">
				this is panel A
			</Panels.Panel>

			<Panels.Panel panelKey="test2">
				this is panel B
			</Panels.Panel>
		</>
	)}
	</Panels>
));
