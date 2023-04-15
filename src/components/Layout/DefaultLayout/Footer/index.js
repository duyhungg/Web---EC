import classNames from 'classnames/bind';
import styles from './Footer.scss';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('grid')}>
                <div className={cx('grid__row')}>
                    <div className={cx('grid__column-2-4')}>
                        <h3 className={cx('footer__heading')}>Chăm sóc khách hàng</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Trung tâm trợ giúp
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Trợ giúp mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column-2-4')}>
                        <h3 className={cx('footer__heading')}>Giới thiệu</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Giới thiệu
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Điều khoản
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Tuyển dụng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column-2-4')}>
                        <h3 className={cx('footer__heading')}>Danh mục sản phẩm</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Sản phẩm 1
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Sản phẩm 2
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column-2-4')}>
                        <h3 className={cx('footer__heading')}>Theo dõi chúng tôi</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Facabook
                                    {/* thêm thẻ i icon vào */}
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Instagram
                                    {/* thêm thẻ i icon vào */}
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    Github
                                    {/* thêm thẻ i icon vào */}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column-2-4')}>
                        <h3 className={cx('footer__heading')}>VÀo của hàng trên ứng dụng</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link')} href="true">
                                    CHPLAY
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a className={cx('footer-item-link test')} href="true">
                                    AppStore
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
