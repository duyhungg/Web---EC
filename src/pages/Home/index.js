import classNames from 'classnames/bind';
import styles from './Home.scss';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('app__container')}>
            <div className={cx('grid ')}>
                <div className={cx('grid__row app__contain')}>
                    <div className={cx('grid__column-2')}>
                        <nav className={cx('category')}>
                            <h3 className={cx('category__heading')}>Danh Mục</h3>
                            <ul className={cx('category-list')}>
                                <li className={cx('category-item category-item__active')}>
                                    <a href="/nav" className={cx('category-item__link')}>
                                        Danh mục sản phẩm 1
                                    </a>
                                </li>
                                <li className={cx('category-item category-item__active')}>
                                    <a href="true" className={cx('category-item__link')}>
                                        Danh mục sản phẩm 2
                                    </a>
                                </li>
                                <li className={cx('category-item category-item__active')}>
                                    <a href="true" className={cx('category-item__link')}>
                                        Danh mục sản phẩm 3
                                    </a>
                                </li>
                                <li className={cx('category-item category-item__active')}>
                                    <a href="true" className={cx('category-item__link')}>
                                        Danh mục sản phẩm 4
                                    </a>
                                </li>
                                <li className={cx('category-item category-item__active')}>
                                    <a href="true" className={cx('category-item__link')}>
                                        Danh mục sản phẩm 5
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={cx('grid__column-10')}>
                        <div className={cx('filter')}>{/* nếu có */}</div>
                        <div className={cx('home-product')}>
                            <div className={cx('grid__row')}>
                                <div className={cx('grid__column-2-4')}>
                                    <a className={cx('home-product-item')} href="/items">
                                        <div className={cx('home-product-item__img')}></div>
                                        <h4 className={cx('home-product-item__name')}>Tên sản phẩm</h4>
                                        <span className={cx('home-product-item__price')}>
                                            <span className={cx('home-product-item__time')}>Thời gian</span>
                                            <span className={cx('home-product-item__price-current')}>Giá đấu giá</span>
                                        </span>
                                        <div className={cx('home-product-item__origin')}>
                                            <span className={cx('home-product-item__brand')}>Loại sản phẩm</span>
                                            <span className={cx('home-product-item__origin-name')}>xuất sứ</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
