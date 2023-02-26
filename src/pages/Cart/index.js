import classNames from 'classnames/bind';
import styles from './cart.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Cart() {
    const cart = [{ id: 1, name: 'ca koi', price: '200', amount: '1' }];

    return (
        <div className={cx('container')}>
            <div className="cart">
                <div className="cart-image"></div>
                <div className="cart-name">Tên sản phẩm:{cart.name}</div>
                <div className="cart-amount">
                    Số Lượng:
                    <input className="cart-amount-input" type="number" min="1" />
                </div>
                <div className="cart-price">Giá Tiền: {cart.price}</div>
                <Button className="btn-del" primary>
                    Xóa
                </Button>
            </div>
            <div className="cart">
                <div className="cart-image"></div>
                <div className="cart-name">Tên sản phẩm:{cart.name}</div>
                <div className="cart-amount">
                    Số Lượng:
                    <input className="cart-amount-input" type="number" min="1" />
                </div>
                <div className="cart-price">Giá Tiền: {cart.price}</div>
                <Button className="btn-del" primary>
                    Xóa
                </Button>
            </div>
            <div className="cart">
                <div className="cart-image"></div>
                <div className="cart-name">Tên sản phẩm:{cart.name}</div>
                <div className="cart-amount">
                    Số Lượng:
                    <input className="cart-amount-input" type="number" min="1" />
                </div>
                <div className="cart-price">Giá Tiền: {cart.price}</div>
                <Button className="btn-del" primary>
                    Xóa
                </Button>
            </div>

            <Button primary className={cx('btn-buy')} to="/payment">
                Mua hàng
            </Button>
        </div>
    );
}

export default Cart;
