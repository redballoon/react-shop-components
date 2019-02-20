import React, { Component } from 'react';

import PropTypes from 'prop-types';

// import classNames from 'classnames';

// import BulmaButton from 'react-bulma-components/lib/components/button';

import 'react-bulma-components/lib/components/button/button.sass';

import styles from './styles/cart.module.scss';


// //////////////////////////////////////
// Link Component
// //////////////////////////////////////
const Link = ({ href, text, handler }) => (
	<a href={href} className={`button is-fullwidth is-Large ${styles.button} ${styles.checkout}`} onClick={handler} title={text}>{text}</a>
);

Link.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	handler: PropTypes.func,
};

Link.defaultProps = {
	handler: () => {},
};

// //////////////////////////////////////
// Button Component
// //////////////////////////////////////
const Button = ({ handler, text }) => (
	<button className={`button is-fullwidth is-Large ${styles.button} ${styles.checkout}`} onClick={handler} type="button" title={text}>{text}</button>
);

Button.propTypes = {
	text: PropTypes.string.isRequired,
	handler: PropTypes.func,
};

Button.defaultProps = {
	handler: () => {},
};

// //////////////////////////////////////
// Header Component
// //////////////////////////////////////
const Header = ({ title }) => (
	<header className={`${styles.header}`}>
		<h2 className={`${styles.title}`}>{title}</h2>
	</header>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// //////////////////////////////////////
// Content Component
// //////////////////////////////////////
const Content = ({ children }) => (
	<div className={`${styles.content}`}>
		{children}
		{/*
			<ul className={`${styles.products}`}>
				{this.props.products.map((product, i) =>
					<li id={'product-' + i} className={`${styles.product}`} key={`product-${i}`}>
						<CartItem product={product} messages={this.props.messages}/>
					</li>
				)}
			</ul>
		*/}
	</div>
);

Content.propTypes = {
	children: PropTypes.string,
};

Content.defaultProps = {
	children: '',
};

// //////////////////////////////////////
// Footer Component
// //////////////////////////////////////
const Footer = ({ children }) => (
	<div className={`${styles.footer}`}>
		<div className={`${styles['cart-meta']}`} />
		<div className={`${styles['cart-cta']}`}>
			{children}
		</div>
	</div>
);

Footer.propTypes = {
	children: PropTypes.element.isRequired,
};

// //////////////////////////////////////
// Cart Component
// //////////////////////////////////////
const Cart = class extends Component {
	getChildren() {
		const { children } = this.props;
		return typeof children === 'function' ? children() : null;
	}

	render() {
		return (
			<div className={styles['cart-container']}>
				{this.getChildren()}
			</div>
		);
	}
};

Cart.propTypes = {
	children: PropTypes.func.isRequired,
};

Cart.Link = Link;
Cart.Button = Button;
Cart.Header = Header;
Cart.Content = Content;
Cart.Footer = Footer;

export default Cart;
