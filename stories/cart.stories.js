import React from 'react';

import Cart from '../src/Cart';

import 'react-bulma-components/src/index.sass';


export default {
	title: 'Cart',
	component: Cart,
}


const Template = ({ title }) => (
	<Cart>
		{() => (
			<>
				<Cart.Header title />

				<Cart.Content />

				<Cart.Footer>
					<Cart.Link href="#" handler={() => {}} text="Continue to Checkout" />
					<Cart.Button handler={() => {}} text="Continue to Shop" />
				</Cart.Footer>
			</>
		)}
	</Cart>
);


export const NoProducts = Template.bind({});

NoProducts.storyName = 'render cart with no products.';
NoProducts.args = { title: 'Your Cart' };
