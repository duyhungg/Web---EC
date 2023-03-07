import classNames from 'classnames/bind';
import styles from './item.scss';
const cx = classNames.bind(styles);
function Item() {
    return (
        <div className={cx('grid__column-10')}>
            <div className={cx('filter')}>{/* nếu có */}</div>
            <div className={cx('home-product')}>
                <div className={cx('grid__row')}>
                    <div className={cx('grid__column-2-4')}>
                        <a className={cx('home-product-item')} href="/items">
                            <div className={cx('home-product-item__img')}></div>
                            <h4 className={cx('home-product-item__name')}>Tên sản phẩm</h4>
                            <span className={cx('home-product-item__price')}>Giá tiền</span>
                            <div className={cx('home-product-item__origin')}>
                                <span className={cx('home-product-item__brand')}>Loại sản phẩm</span>
                                <span className={cx('home-product-item__origin-name')}>xuất sứ</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
