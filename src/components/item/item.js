import classNames from 'classnames/bind';
import styles from './item.scss';
const cx = classNames.bind(styles);
function Item({ src, name, price, brand, year }) {
    return (
        <div className={cx('grid__column-10')}>
            <div className={cx('filter')}>{/* nếu có */}</div>
            <div className={cx('home-product')}>
                <div className={cx('grid__row')}>
                    <div className={cx('grid__column-2-4')}>
                        <a className={cx('home-product-item')} href={src}>
                            <div className={cx('home-product-item__img')}></div>
                            <h4 className={cx('home-product-item__name')}>{name}</h4>
                            <span className={cx('home-product-item__price')}>{price}</span>
                            <div className={cx('home-product-item__origin')}>
                                <span className={cx('home-product-item__brand')}>{brand}</span>
                                <span className={cx('home-product-item__origin-name')}>{year}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
