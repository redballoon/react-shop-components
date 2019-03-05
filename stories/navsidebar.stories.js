import React from 'react';

import { storiesOf } from '@storybook/react';

import { actions } from '@storybook/addon-actions';

import NavSideBar from '../src/NavSideBar';


const events = actions('handler');

storiesOf('NavSideBar', module)
	.add('Nav Item with Handler', () => (
		<NavSideBar>
			{() => (
				<>
					<NavSideBar.List>
						<NavSideBar.Button icon="bars" {...events} />
					</NavSideBar.List>
				</>
			)}
		</NavSideBar>
	))
	.add('Layout:: One regular list and one list aligned to bottom', () => (
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
	))
	.add('Layout:: Multiple lists sharing nav bar', () => (
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
	));
