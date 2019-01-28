import React from 'react'

import PropTypes from 'prop-types'

import { Component } from 'react'

import classNames from 'classnames';

import styles from './styles/panel.module.scss'


const Panel = (props) => (
	<div className={classNames('content', styles.panel, props.className)}>
		{props.children}
	</div>
)

const Panels = class extends Component {
	static Panel = Panel;

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	getStateStyles() {
		const { isOpen, transition } = this.props;
		const isActive = isOpen || (transition && !isOpen);

		return { [`${styles['is-open']}`]: isOpen, [`${styles['is-active']}`]: isActive };
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

		return children ? children : null;
	}

	getPanelsWithActiveClass(children) {
		if (!children) {
			return null;
		}

		const hasActiveKey = typeof this.props.activeKey !== 'undefined';

		if (!hasActiveKey) {
			return children;
		}

		// add is-active class to the correct panel
		return React.Children.map(children, (item, index) => {
			// invalid children
			if (!item) return null;

			const hasPanelKey = typeof item.props.panelKey !== 'undefined';
			const active = hasPanelKey && item.props.panelKey === this.props.activeKey;

			const props = {
				className: classNames({ [`${styles['is-active']}`]: active })
			};

			return React.cloneElement(item, props);
		})

	}

	render() {
		const positionStyles = this.getPositionStyles();
		const stateStyles = this.getStateStyles();
		const fragment = this.getFragment();
		const children = this.getChildren(fragment);
		const panelsWithActiveClass = this.getPanelsWithActiveClass(children);

		return (
			<div className={classNames(styles['the-panel'], stateStyles, positionStyles)}>
				<div className={`${styles['panel-container']}`}>
					<div className={`${styles['panel-wrapper']}`}>
						{panelsWithActiveClass}
					</div>
				</div>
			</div>
		);
	}
};

Panels.defaultProps = {
	align: 'left',
};

export default Panels;
