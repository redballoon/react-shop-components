import React from 'react';

import { storiesOf } from '@storybook/react';

import {
	withKnobs,
	text,
} from '@storybook/addon-knobs';

import Cart from '../src/Cart';

import 'react-bulma-components/src/index.sass';


// define knobs
const getCartTitle = () => text('Title', 'Your Cart');


const stories = storiesOf('Cart', module);

stories.addDecorator(withKnobs);

stories.add('render cart with no products.', () => (
	<Cart>
		{() => (
			<>
				<Cart.Header title={getCartTitle()} />

				<Cart.Content />

				<Cart.Footer>
					<Cart.Link href="#" handler={() => {}} text="Continue to Checkout" />
					<Cart.Button handler={() => {}} text="Continue to Shop" />
				</Cart.Footer>
			</>
		)}
	</Cart>
));
