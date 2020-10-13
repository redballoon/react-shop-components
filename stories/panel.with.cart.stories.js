import React from 'react';

import Panels from '../src/Panels';

import Cart from '../src/Cart';

import * as PanelsStories from './panel.stories';

import 'react-bulma-components/src/index.sass';


// Modify arg types for this Story
const defaultAT = PanelsStories.default.argTypes;

const argTypes = {
	...defaultAT,

	activeKey: {
		...defaultAT.activeKey,

		control: {
			...defaultAT.activeKey.control,
			options: ['test'],
		}
	}
};


export default {
	title: 'Panels with Cart',
	component: Panels,
	argTypes: {
		...argTypes,

		title: {
			name: 'Cart: Title',
		}
	},
};


export const withCart = ({ isOpen, align, activeKey, ...cart }) => (
	<div style={{
		position: 'absolute',
		width: '100%',
		height: '100%',
		background: '#eee'
	}}>
		<Panels isOpen={isOpen} align={align} activeKey={activeKey}>
			{() => (
				<>
					<Panels.Panel panelKey="test">
						<Cart>
							{() => (
								<>
									<Cart.Header title={cart.title} />

									<Cart.Content />

									<Cart.Footer>
										<Cart.Link href="#" handler={() => {}} text="Continue to Checkout" />
										<Cart.Button handler={() => {}} text="Continue to Shop" />
									</Cart.Footer>
								</>
							)}
						</Cart>
					</Panels.Panel>
				</>
			)}
		</Panels>
	</div>
);

withCart.storyName = 'render component with Cart component';
withCart.args = {
	...PanelsStories.withBasePanel.args,
	title: 'Your Cart',
};
