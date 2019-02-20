import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'

import styles from './styles/header.module.scss'


const CartItem = class extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// this.state = {login: ''};
	// }

	componentDidMount() {
		console.log('CartItem: mount:');
	}

	render() {
		return (
			<>
				<div className={`${styles.image}`}>
					{/*
					{this.props.line_item.variant.image ? <img src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`} />: <SpinContainer><Spin /></SpinContainer>}
					*/}
				</div>
				<div className={`${styles.details}`}>
					<div className={`${styles.variantTitle}`}>
						{this.props.line_item.variant.title}
					</div>

					<div className={`${styles.title}`}>
						{this.props.line_item.title}
					</div>

					<div className={`${styles.price}`}>
						$ {(this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2)}
					</div>

					<div className={`${styles.quantity}`}>
						Qty: {this.props.line_item.quantity}
					</div>

					<button className={`button is-danger is-outlined ${styles.remove}`} onClick={() => this.props.removeLineItemInCart(this.props.line_item.id)}>
						<span>Remove</span>
						<span className="icon is-small">
							<i className="fas fa-times"></i>
						</span>
					</button>
				</div>
			</>
		);
	}
};


export default CartItem;
