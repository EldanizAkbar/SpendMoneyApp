import '../css/basket.css';
import BasketItem from './BasketItem';
import { moneyFormat } from './format';

function Basket({ basket, resetBasket, total, products }) {
  return (
    <>
      <div className="container receipt-container text-center w-100 mb-5 py-5 px-1">
        <div className="row receipt-row mx-auto text-center">
          <div className="col-sm-8 col-md-4 mx-auto text-center px-1">
            <h1 className="receipt mb-4">Your Receipt</h1>
            <ul>
              {basket.map(item => (
                <BasketItem key={item.id} item={item} price={item.price} product={products.find(p => p.id === item.id)} />
              ))}
            </ul>
          </div>
        </div>

        <div className="row mx-auto text-center">
          <div className="col-sm-8 col-md-4 mx-auto text-center px-1">
            <div className="d-flex justify-content-between align-items-center">
              <span className="total">Total:</span> <span className="total-money">${moneyFormat(total)}</span>
            </div>
            <button className="mt-3 btn btn-outline-danger" type="reset" onClick={resetBasket}>Reset Basket</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket