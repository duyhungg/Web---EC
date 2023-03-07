import classNames from 'classnames/bind';
import styles from './navbar.scss';
const cx = classNames.bind(styles);
function Navbar() {
    return (
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
    );
}

export default Navbar;
