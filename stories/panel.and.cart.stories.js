import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
	withKnobs,
	text,
	boolean,
	select,
} from '@storybook/addon-knobs';

import Panels from '../src/Panels';

import Cart from '../src/Cart';

import 'react-bulma-components/src/index.sass';


// define knobs
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

const getCartTitle = () => text('Title', 'Your Cart');


const stories = storiesOf('Panel + Cart', module);

stories.addDecorator(withKnobs);

stories.add('render component with Cart component', () => (

	<Panels isOpen={getOpenState()} align={getAlignment()} activeKey={getActiveState()}>
		{() => (
			<>
				<Panels.Panel panelKey="test">
					<Cart>
						{() => (
							<>
								<Cart.Header title={getCartTitle()} />

								<Cart.Content />

								<Cart.Footer>
									<>
										<Cart.Link href="#" handler={() => {}} text="Continue to Checkout" />
										<Cart.Button handler={() => {}} text="Continue to Shop" />
									</>
								</Cart.Footer>
							</>
						)}
					</Cart>
				</Panels.Panel>
			</>
		)}
	</Panels>
));
