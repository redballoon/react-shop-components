import React from 'react';

import { storiesOf } from '@storybook/react';

import NavSideBar from '../src/NavSideBar';

storiesOf('NavSideBar', module)
	.add('Handler', () => (

		<NavSideBar>
		{() => (
			<>
				<NavSideBar.List>
					<NavSideBar.Button icon="bars"/>
					<NavSideBar.Button icon="shopping-cart"/>
				</NavSideBar.List>

				<NavSideBar.List align="bottom">
					<NavSideBar.Button icon="search"/>
				</NavSideBar.List>
			</>
		)}
		</NavSideBar>
	))
	.add('One regular list and one list aligned to bottom', () => (
		<NavSideBar>
		{() => (
			<>
				<NavSideBar.List>
					<NavSideBar.Button icon="bars"/>
				</NavSideBar.List>

				<NavSideBar.List align="bottom">
					<NavSideBar.Button icon="search"/>
				</NavSideBar.List>
			</>
		)}
		</NavSideBar>
	))
	.add('Multiple lists sharing nav bar', () => (
		<NavSideBar>
		{() => (
			<>
				<NavSideBar.List>
					<NavSideBar.Button icon="bars"/>
				</NavSideBar.List>

				<NavSideBar.List>
					<NavSideBar.Button icon="bars"/>
				</NavSideBar.List>

				<NavSideBar.List>
					<NavSideBar.Button icon="bars"/>
				</NavSideBar.List>
			</>
		)}
		</NavSideBar>
	));
