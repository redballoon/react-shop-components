/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './styles/panel.module.scss';


// //////////////////////////////////////
// Single Panel Component
// //////////////////////////////////////
const Panel = ({ className, children, panelKey }) => (
	<div className={classNames('content', styles.panel, className)} key={panelKey}>
		{children}
	</div>
);

Panel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element.isRequired,
	panelKey: PropTypes.string,
};
Panel.defaultProps = {
	className: '',
	panelKey: '',
};

// //////////////////////////////////////
// Panels Component
// //////////////////////////////////////
const Panels = class extends Component {
	getStateStyles() {
		const { isOpen } = this.props;

		return { [`${styles['is-open']}`]: isOpen };
	}

	getPositionStyles() {
		const { align } = this.props;

		const alignClass = styles[`align-${align}`];

		return { [alignClass]: true };
	}

	getFragment() {
		const { children } = this.props;

		return typeof children === 'function' ? children() : {};
	}

	getChildren(fragment) {
		const { props = {} } = fragment;

		const { children } = props;

		return children || null;
	}

	getPanelsWithActiveClass(children) {
		if (!children) {
			return null;
		}

		const { activeKey } = this.props;

		const hasActiveKey = (typeof activeKey === 'number' && activeKey > 0 && !Number.isNaN(activeKey)) || activeKey;

		if (!hasActiveKey) {
			return children;
		}

		// add is-active class to the correct panel
		return React.Children.map(children, (item) => {
			// invalid children
			if (!item) return null;

			const hasPanelKey = typeof item.props.panelKey !== 'undefined';
			const active = hasPanelKey && item.props.panelKey === activeKey;

			const props = {
				className: classNames({ [`${styles['is-active']}`]: active }),
			};

			return React.cloneElement(item, props);
		});
	}

	render() {
		const positionStyles = this.getPositionStyles();
		const stateStyles = this.getStateStyles();
		const fragment = this.getFragment();
		const children = this.getChildren(fragment);
		const panelsWithActiveClass = this.getPanelsWithActiveClass(children);

		return (
			<div className={classNames(styles['panel-container'], stateStyles, positionStyles)}>
				<div className={`${styles['panel-wrapper']}`}>
					{panelsWithActiveClass}
				</div>
			</div>
		);
	}
};

Panels.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	align: PropTypes.string,
	activeKey: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	children: PropTypes.func.isRequired,
};

Panels.defaultProps = {
	align: 'left',
	activeKey: '',
};

Panels.Panel = Panel;


export default Panels;
