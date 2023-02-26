import styles from './Login.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('body')}>
            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3">
                                    <span>Đăng nhập</span>
                                    <span>Đăng kí</span>
                                </h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Đăng nhập</h4>
                                                    <div class="form-group">
                                                        <input
                                                            type="email"
                                                            name="logemail"
                                                            class="form-style"
                                                            placeholder="Nhập Email"
                                                            id="logemail"
                                                            autocomplete="off"
                                                        />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input
                                                            type="password"
                                                            name="logpass"
                                                            class="form-style"
                                                            placeholder="NHập mật khẩu"
                                                            id="logpass"
                                                            autocomplete="off"
                                                        />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="true" class="btn mt-4">
                                                        Đăng nhập
                                                    </a>
                                                    <p class="mb-0 mt-4 text-center">
                                                        <a href="true" class="link">
                                                            Quên mật khẩu?
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Đăng kí</h4>
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            name="logname"
                                                            class="form-style"
                                                            placeholder="Tên của bạn"
                                                            id="logname"
                                                            autocomplete="off"
                                                        />
                                                        <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input
                                                            type="email"
                                                            name="logemail"
                                                            class="form-style"
                                                            placeholder="Email của bạn"
                                                            id="logemail"
                                                            autocomplete="off"
                                                        />
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input
                                                            type="password"
                                                            name="logpass"
                                                            class="form-style"
                                                            placeholder="Mật khẩu"
                                                            id="logpass"
                                                            autocomplete="off"
                                                        />
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="true" class="btn mt-4">
                                                        Đăng kí
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
