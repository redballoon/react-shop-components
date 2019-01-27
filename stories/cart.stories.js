import React from 'react';

import { storiesOf } from '@storybook/react';

import Cart from '../src/Cart';

import 'react-bulma-components/src/index.sass';

storiesOf('Cart', module)
	.add('render cart with state open', () => (

		<Cart isOpen={true}>
		{() => (
			<>
				<Cart.Header title="Your Cart"/>

				<Cart.Content />

				<Cart.Footer>
					<Cart.Link href="#" handler={() => {}} text="Continue to Checkout"/>
					<Cart.Button handler={() => {}} text="Continue to Shop"/>
				</Cart.Footer>
			</>
		)}
		</Cart>
	))
