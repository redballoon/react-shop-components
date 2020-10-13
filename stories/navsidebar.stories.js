import React from 'react';

import NavSideBar from '../src/NavSideBar';


export default {
	title: 'NavSideBar',
	component: NavSideBar,
}


export const withListAlignedToBottom = () => (
	<NavSideBar>
		{() => (
			<>
				<NavSideBar.List>
					<NavSideBar.Button icon="bars" />
				</NavSideBar.List>

				<NavSideBar.List align="bottom">
					<NavSideBar.Button icon="search" />
				</NavSideBar.List>
			</>
		)}
	</NavSideBar>
);

withListAlignedToBottom.storyName = 'One regular list and one list aligned to bottom';


export const withMultiListEvenlyDistributed = () => (
	<NavSideBar>
		{() => (
			<>
				<NavSideBar.List>
					<NavSideBar.Button icon="bars" />
				</NavSideBar.List>

				<NavSideBar.List>
					<NavSideBar.Button icon="bars" />
				</NavSideBar.List>

				<NavSideBar.List>
					<NavSideBar.Button icon="bars" />
				</NavSideBar.List>
			</>
		)}
	</NavSideBar>
);

withMultiListEvenlyDistributed.storyName = 'Multiple lists evenly distrubted in nav bar container';


// https://storybook.js.org/docs/react/essentials/actions
// export const withHandler = ({ onClick }) => (
// 	<NavSideBar>
// 		{() => (
// 			<>
// 				<NavSideBar.List>
// 					<NavSideBar.Button icon="bars" />
// 					<NavSideBar.Button icon="shopping-cart" />
// 				</NavSideBar.List>
//
// 				<NavSideBar.List align="bottom">
// 					<NavSideBar.Button icon="search" />
// 				</NavSideBar.List>
// 			</>
// 		)}
// 	</NavSideBar>
// );
//
// withHandler.storyName = 'with Handler';
// WIP
// withHandler.args = { onClick: () => console.log('click') }
