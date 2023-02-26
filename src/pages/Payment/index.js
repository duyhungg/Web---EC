import styles from './payment.scss';
function Payment() {
    return (
        <div class="container">
            <form action="">
                <div class="row">
                    <div class="col">
                        <h3 class="title">Hóa đơn điện tử</h3>

                        <div class="inputBox">
                            <span>Tên :</span>
                            <input type="text" placeholder="Nhập tên người nhận hàng" />
                        </div>
                        <div class="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="example@example.com" />
                        </div>
                        <div class="inputBox">
                            <span>Đia chỉ Giao hàng :</span>
                            <input type="text" placeholder="Nhập địa chỉ nhận hàng" />
                        </div>
                        <div class="inputBox">
                            <span>Ghi chú :</span>
                            <input type="text" placeholder="Nhập ghi chú" />
                        </div>

                        <div class="flex">
                            <div class="inputBox">
                                <span>Thành phố :</span>
                                <input type="text" placeholder="india" />
                            </div>
                            <div class="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456" />
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <h3 class="title">Thanh toán bằng thẻ tín dụng</h3>

                        <div class="inputBox">
                            <span>cards accepted :</span>
                            <img src="images/card_img.png" alt="" />
                        </div>
                        <div class="inputBox">
                            <span>Tên chủ thẻ :</span>
                            <input type="text" placeholder="Nhập tên" />
                        </div>
                        <div class="inputBox">
                            <span>Số thẻ :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div class="inputBox">
                            <span>Ngày hết hạn :</span>
                            <input type="text" placeholder="dd" />
                        </div>

                        <div class="flex">
                            <div class="inputBox">
                                <span>Năm hết hạn:</span>
                                <input type="number" placeholder="yy" min="2000" max="2022" />
                            </div>
                            <div class="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>
                    </div>
                </div>

                <input type="submit" value="Đặt hàng" class="submit-btn" />
            </form>
        </div>
    );
}

export default Payment;
