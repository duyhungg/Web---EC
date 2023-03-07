import styles from './item.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function Items() {
    return (
        <div className={cx('container')}>
            <div className={cx('grid grid1')}>
                <div className={cx('image')}></div>
                <div className={cx('infor')}>
                    <div className={cx('infor-form')}>
                        <h2 className={cx('items-name')}>Tên sản phẩm</h2>
                        <div className={cx('price')}>
                            <h2 className={cx('price-name')}>Giá tiền ban đầu: </h2>
                            <h2 className={cx('price-previous')}>giá</h2>
                        </div>
                        <div className={cx('price')}>
                            <label className={cx('price-price')}>Giá tiền đấu giá : </label>
                            <input className={cx('price-input')} placeholder="nhập giá tiền đấu giá"></input>
                        </div>
                        <div className={cx('price')}>
                            <label className={cx('price-name')}>Thời gian: </label>
                        </div>

                        <div className={cx('button-buy')}>
                            <Button primary>Thêm vào giỏ hàng</Button>
                            {/* viết backend thêm sản phẩm vào giỏ hàng */}
                            <Button primary to="/payment">
                                Mua ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('comment')}>
                <div className={cx('comment-image')}>
                    <Button to>
                        <FontAwesomeIcon icon={faUser} />
                    </Button>
                </div>
                <div className={cx('comment-infor')}>
                    <div className={cx('comment-name')}>tên</div>
                    <div className={cx('comment-review')}>review</div>
                </div>
            </div>
        </div>
    );
}

export default Items;
