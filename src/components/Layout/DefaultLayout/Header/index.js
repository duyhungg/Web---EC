import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import styles from './Header.Module.scss';
import Button from '~/components/Button';
import Search from '../Search';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('grid')}>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Button to="/" className={cx('logo-aw')}>
                        Logo
                    </Button>
                    <Search />
                    <div className={cx('actions')}>
                        <Button to="/cart" className={cx('cart')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                        <Button primary to="/login">
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
