import '../css/basket.css';
import { moneyFormat, numFormatter } from './format';
function BasketItem({ item, product }) {
	return (
		<>
			<li className="basket-item d-flex justify-content-between align-items-center">
				<span className="span-1 text-left">{product.title}</span>      <span className="span-2 text-center">x{item.amount}</span>     <span className="span-3 text-right total-money">${numFormatter(item.amount * product.price)}</span>
			</li>
		</>
	)
}

export default BasketItem

