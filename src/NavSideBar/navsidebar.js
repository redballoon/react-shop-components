import React from 'react';

import { Component } from 'react';

import PropTypes from 'prop-types';

import Icon from 'react-bulma-components/lib/components/icon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles/navsidebar.module.scss';

// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// in app
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
// library.add(faStroopwafel);
// in components
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const List = (props) => (
	<ul className={`${styles.list} ${!props.align ? styles.top : ''}`}>{props.children}</ul>
);

List.propTypes = {
	align: PropTypes.oneOf(['bottom']),
};


const Button = (props) => (
	<li>
		<button type="button" className="button">
			<Icon size="large">
				<FontAwesomeIcon icon={props.icon} />
			</Icon>
		</button>
	</li>
);

Button.propTypes = {
	icon: PropTypes.string.isRequired,
};


const NavSideBar = class extends Component {
	constructor(props) {
		super(props);
	}

	static List = List;

	static Button = Button;

	handler() {
		
	}

	getChildren() {
		const { children } = this.props;

		return typeof children === 'function' ? children() : null;
	}

	render() {
		return (<div className={styles.sidebar}>
			<div className="sidebar-brand"></div>
				<div className={styles.inner}>
					<nav className={styles.menu}>
						{this.getChildren()}
					</nav>
				</div>
			</div>
		);
	}
};

export default NavSideBar;
