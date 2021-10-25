import { moneyFormat } from './format';
import '../css/header.css';

function Header({ total, money }) {
  return (
    <>
      <div className="container elonrow mt-5 w-100" >
        <div className="row text-center elonrow w-100 mx-auto">
          <div className="col-8 col-md-6 col-lg-5 mx-auto elon p-3">
            <div className="elonphoto mx-auto">
              <img src="http://ictmedia.com.tr/Media/News/9779.jpg" alt="picture" />
              <h1 className="spend mt-4">Spend Elon Mask's Money</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container elo">
        <div className="row text-center mx-auto">
          <div className="col-12 mx-auto">
            {total > 0 && money - total !== 0 && (
              <div className="header">Left <span>${moneyFormat(money - total)}</span> to spend!</div>
            )}
            {total === 0 && (
              <div className="header">You have <span>${moneyFormat(money)}</span> to spend!</div>
            )}
            {money - total === 0 && (
              <div className="header empty">You're out of money!</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header