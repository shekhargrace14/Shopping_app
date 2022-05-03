import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import { Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>

			<>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/products/:id" component={Product} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					
				</Switch>
			</>
		</div>
	);
};

export default App;