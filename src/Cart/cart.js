import React from 'react'

import PropTypes from 'prop-types'

import { Component } from 'react'

import classNames from 'classnames';

// import BulmaButton from 'react-bulma-components/lib/components/button';

import 'react-bulma-components/lib/components/button/button.sass';

import styles from './styles/cart.module.scss'


const Link = (props) => (
	<a href={props.href} className={`button is-fullwidth is-Large ${styles.button} ${styles.checkout}`} onClick={props.handler} title={props.text}>{props.text}</a>
);

const Button = (props) => (
	<button className={`button is-fullwidth is-Large ${styles.button} ${styles.checkout}`} onClick={props.handler} type="button" title={props.text}>{props.text}</button>
);

const Header = (props) => (
	<header className={`${styles.header}`}>
		<h2 className={`${styles.title}`}>{props.title}</h2>
	</header>
);

const Content = (props) => (
	<div className={`${styles.content}`}>
		{props.children}
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

const Footer = (props) => (
	<div className={`${styles.footer}`}>
		<div className={`${styles['cart-meta']}`}></div>
		<div className={`${styles['cart-cta']}`}>
			{props.children}
			{/*
			<button className={`button is-fullwidth is-Large ${styles.button} ${styles.checkout}`} onClick={this.openCheckout} type="button" title="Checkout">Checkout</button>
			<br/>
			<button className={`button is-fullwidth is-Large ${styles.button} ${styles.continue}`} onClick={this.onContinue} type="button" title="Continue Shopping">Continue Shopping</button>
			*/}
		</div>
	</div>
);


const Cart = class extends Component {
	static Link = Link;
	static Button = Button;
	static Header = Header;
	static Content = Content;
	static Footer = Footer;

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('Cart: mount:');

	}

	getChildren() {
		const { children } = this.props;

		return typeof children === 'function' ? children() : null;
	}

	render() {
		const { isOpen } = this.props;

		return (
			<div className={classNames(styles['cart-panel'], { [`${styles['is-open']}`]: isOpen })}>
				<div className={`content ${styles.panel}`}>
					{this.getChildren()}
				</div>
			</div>
		);
	}
};


export default Cart;
