import '../css/product.css';
import { moneyFormat } from './format';

function Product({ product, total, money, basket, setBasket }) {
	const basketItem = basket.find(item => item.id === product.id)
	const addBasket = () => {
		const checkBasket = basket.find(item => item.id === product.id)
		if (checkBasket) {
			checkBasket.amount += 1
			setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
		} else {
			setBasket([...basket, {
				id: product.id,
				amount: 1,
			}])
		}
	}

	const removeBasket = () => {
		const currentBasket = basket.find(item => item.id === product.id)
		const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
		currentBasket.amount -= 1
		if (currentBasket.amount === 0) {
			setBasket([...basketWithoutCurrent])
		} else {
			setBasket([...basketWithoutCurrent, currentBasket])
		}
	}

	return (
		<>
			<div className="card px-sm-0 px-1 px-lg-3 mt-3">
				<img src={product.image} className="card-img-top card-img mx-auto mt-4" alt="..." />
				<div className="card-body px-1">
					<h5 className="card-title text-center">{product.title}</h5>
					<p className="card-text text-center">${moneyFormat(product.price)}</p>
					<div className="d-flex justify-content-around  justify-content-sm-between">
						<button className="sell-btn px-3 px-sm-4 px-lg-4 py-2" disabled={!basketItem} onClick={removeBasket}>Sell</button>
						<span className="amount px-sm-4 px-3 px-lg-4 py-2">{basketItem && basketItem.amount || 0}</span>
						<button className="buy-btn px-sm-4 px-3 px-lg-4 py-2" disabled={total + product.price > money} onClick={addBasket}>Buy
						</button>
					</div>

				</div>
			</div>
		</>
	)
}

export default Product