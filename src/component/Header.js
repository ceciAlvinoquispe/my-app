import React from 'react';
import CartContext from '../context/storeProducts'

import Logo from '../img/icono-tienda.svg';
import IconShopping from '../img/icon-shopping.svg';
import IconClose from '../img/icon-close.svg';

const { useContext, useState } = React;

const Header = () => {
	const { cartProducts } = useContext(CartContext);
	
	const [isVisible, setState] = useState(false);

	return (
		<header>
			<div className="name-page">La Tiendita</div>
			<div className="container">
				<div className="menu">
					<div className="menu-logo">
						<img src={Logo} alt="logo de tienda"></img>
					</div>

					<div className="menu-shop cart-shop"
						onMouseEnter={() => setState(true)}>
						<span>Ver carrito</span>
						<div className="menu-shop-icon">
							<img src={IconShopping} alt="icono de compra"></img>
							<span className="menu-shop-counter">{ cartProducts.length}</span>
						</div>
					</div>

					<div className={`shopping ${ isVisible ? "show" : "hidden"}`}>
						<h4>Mi lista de compras:</h4>
						<img className="icon-close"
							src={IconClose} 
							alt="icono cerrar"
							onClick={() => setState(false)}
							/>
						{cartProducts.length === 0 ? (
							<p className="list-else">Aún no seleccionaste algun producto</p>
						) : (
							<ul className="list">
								{cartProducts.map((item, idx)=>{
									return(
									<li key={idx} className="list-item">
										<p>{item.title}</p>
										<p>{item.price}</p>
									</li>
									)
								})}
							</ul>
						)}
						
						<div className="total">
							<span>Total:</span>
							{cartProducts.reduce((obj, data) => {
								obj += data.price; return obj;
							}, 0)}
						</div>
					</div>
				</div>
			</div>
		</header>
  );
};


export default Header;
