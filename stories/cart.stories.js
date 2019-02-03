import React from 'react';

import { storiesOf } from '@storybook/react';

import {
	withKnobs,
	boolean,
} from '@storybook/addon-knobs';

import Cart from '../src/Cart';

import 'react-bulma-components/src/index.sass';


// define knobs
const getOpenState = () => boolean('Toggle Cart', true);


const stories = storiesOf('Cart', module);

stories.addDecorator(withKnobs);

stories.add('render cart with state open', () => (
	<Cart isOpen={getOpenState()}>
		{() => (
			<>
				<Cart.Header title="Your Cart" />

				<Cart.Content />

				<Cart.Footer>
					<Cart.Link href="#" handler={() => {}} text="Continue to Checkout" />
					<Cart.Button handler={() => {}} text="Continue to Shop" />
				</Cart.Footer>
			</>
		)}
	</Cart>
));
