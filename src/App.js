import { useState, useEffect } from 'react'
import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';
import products from './json/products.json'
import Footer from './components/footer';

function App() {
	const [money, setMoney] = useState(219900000000)
	const [basket, setBasket] = useState([])
	const [total, setTotal] = useState(0)
	const resetBasket = () => {
		setBasket([])
	}

	useEffect(() => {
		setTotal(
			basket.reduce((acc, item) => {
				return acc + (item.amount * (products.find(product => product.id === item.id).price))
			}, 0),
		)
	}, [basket])

	return (
		<>
			<Header total={total} money={money} />
			<div className="container mt-3 mb-5">
				<div className="row">
					{products.map(product => (
						<div className="col-10 col-sm-6 col-md-6 col-lg-4 px-lg-3 px-sm-3 px-0 mx-auto">
							<Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
						</div>
					))}
				</div>
			</div>
			{total > 0 && (<Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />)}

			<Footer/>
		</>
	);
}
export default App;
