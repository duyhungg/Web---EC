import classNames from 'classnames/bind';
import styles from './Home.scss';
import Navbar from '~/components/navbar';
import Item from '~/components/item/item';
import Slider from '~/components/Slider/Slider';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('app__container')}>
            <Slider />
            <div className={cx('grid ')}>
                <div className={cx('grid__row app__contain')}>
                    <Navbar></Navbar>
                    {/* <Item></Item> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
