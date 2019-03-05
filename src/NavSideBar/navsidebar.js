import React, { Component } from 'react';

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

const noop = () => {};


const List = ({ align, children }) => (
	<ul className={`${styles.list} ${!align ? styles.top : ''}`}>{children}</ul>
);

List.propTypes = {
	align: PropTypes.oneOf(['bottom']),
	children: PropTypes.element.isRequired,
};

List.defaultProps = {
	align: undefined,
};


const Button = ({ icon, handler }) => (
	<li>
		<button type="button" className="button" onClick={handler}>
			<Icon size="large">
				<FontAwesomeIcon icon={icon} />
			</Icon>
		</button>
	</li>
);

Button.propTypes = {
	icon: PropTypes.string.isRequired,
	handler: PropTypes.func,
};

Button.defaultProps = {
	handler: noop,
};


const NavSideBar = class extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	// handler() {
	// }

	getChildren() {
		const { children } = this.props;

		return typeof children === 'function' ? children() : null;
	}

	render() {
		return (
			<div className={styles.sidebar}>
				<div className="sidebar-brand" />

				<div className={styles.inner}>
					<nav className={styles.menu}>
						{this.getChildren()}
					</nav>
				</div>
			</div>
		);
	}
};

NavSideBar.propTypes = {
	children: PropTypes.func.isRequired,
};

NavSideBar.List = List;
NavSideBar.Button = Button;

export default NavSideBar;
