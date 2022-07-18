import classNames from "classnames/bind";

import SidebarMove from "../../../components/SidebarMove";
import styles from "./MainProfile.module.scss";
import User from "../../../assets/user.png";

const cx = classNames.bind(styles);

const MainProfile = () => {
    return (
        <div className={cx("profile")}>
            <main className={cx("profile-container", "container ")}>
                <section className={cx("profile-sidebar")}>
                    <SidebarMove />
                </section>
                <section className={cx("profile-content")}>
                    <div className={cx("content-box")}>
                        <div className={cx("row")}>
                            <div className={cx("info-user")}>
                                <img src={User} alt="avatar-user" />

                                <div>
                                    <div>
                                        MSSV: <strong>21111111</strong>
                                    </div>
                                    <div>
                                        Họ tên: <strong>Phan Trọng Hậu</strong>
                                    </div>
                                    <div>
                                        Giới tính: <strong>Nam</strong>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("info-edu")}>
                                <div className={cx("info-title ")}>
                                    <div className={cx("caption ")}>
                                        <h2>Thông tin học vấn</h2>
                                    </div>
                                </div>
                                <div className={cx("form-body")}>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Trạng thái:{" "}
                                            <strong>Đang học</strong>
                                        </div>
                                        <div>
                                            Mã hồ sơ:{" "}
                                            <strong>21NV111111111</strong>
                                        </div>
                                        <div>
                                            Ngày vào trường:{" "}
                                            <strong>05/06/1911</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Lớp học: <strong>DHTH17AQN</strong>
                                        </div>
                                        <div>
                                            Cơ sở:{" "}
                                            <strong>
                                                Phân hiệu Quảng Ngãi
                                            </strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Bậc đào tạo:{" "}
                                            <strong>Đại học</strong>
                                        </div>
                                        <div>
                                            Loại hình đào tạo:{" "}
                                            <strong>Chính quy</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Khoa:{" "}
                                            <strong>CS5 Khoa Công Nghệ</strong>
                                        </div>
                                        <div>
                                            Ngành:{" "}
                                            <strong>Công nghệ thông tin</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Chuyên ngành:{" "}
                                            <strong>
                                                Công nghệ thông tin - 7480201
                                            </strong>
                                        </div>
                                        <div>
                                            Khóa học:{" "}
                                            <strong>2021 - 2022</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("row")}>
                            <div className={cx("info-individual")}>
                                <div className={cx("info-title ")}>
                                    <div className={cx("caption ", "bottom")}>
                                        <h2>Thông tin cá nhân</h2>
                                    </div>
                                </div>
                                <div className={cx("form-body")}>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Ngày sinh:{" "}
                                            <strong>01/04/1945</strong>
                                        </div>
                                        <div>
                                            Dân tộc: <strong>Kinh</strong>
                                        </div>
                                        <div>
                                            Tôn giáo: <strong>Không</strong>
                                        </div>
                                        <div>
                                            Khu vực:{" "}
                                            <strong>Khu vực 2 nông thôn</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Số CMND: <strong>221111111</strong>
                                        </div>
                                        <div>
                                            Ngày cấp: <strong></strong>
                                        </div>
                                        <div>
                                            Nơi cấp: <strong></strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Đối tượng:<strong></strong>
                                        </div>
                                        <div>
                                            Diện chính sách:<strong></strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Ngày vào Đoàn:<strong></strong>
                                        </div>
                                        <div>
                                            Ngày vào Đảng:<strong></strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Điện thoại:{" "}
                                            <strong>0399999999</strong>
                                        </div>
                                        <div>
                                            Email:{" "}
                                            <strong>Contact@gmail.com</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Địa chỉ liên hệ:{" "}
                                            <strong>
                                                Hòa Đa - An Mỹ - Tuy An - Phú
                                                Yên
                                            </strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Nơi sinh:{" "}
                                            <strong>Tỉnh Phú Yên</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Hộ khẩu thường trú:{" "}
                                            <strong>
                                                Thôn Hòa Đa, Xã An Mỹ, Huyện Tuy
                                                An, Tỉnh Phú Yên
                                            </strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Tên ngân hàng:{" "}
                                            <strong>
                                                Ngân hàng thương mại cổ phần
                                                Quân Đội - MBB
                                            </strong>
                                        </div>
                                        <div>
                                            Tên chi nhánh:{" "}
                                            <strong>Chi nhánh Phú Yên</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Tên chủ tài khoản:{" "}
                                            <strong>Phan Trọng Hậu</strong>
                                        </div>
                                        <div>
                                            Số tài khoản:{" "}
                                            <strong>999999999999</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("row")}>
                            <div className={cx("info-relationship")}>
                                <div className={cx("info-title ")}>
                                    <div className={cx("caption ", "bottom")}>
                                        <h2>Quan hệ gia đình</h2>
                                    </div>
                                </div>
                                <div className={cx("form-body")}>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Họ tên Mẹ:{" "}
                                            <strong>Võ Thị Kim Loan</strong>
                                        </div>
                                        <div>
                                            Năm sinh: <strong>1974</strong>
                                        </div>
                                        <div>
                                            Nghề nghiệp:<strong></strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Quốc tịch: <strong></strong>
                                        </div>
                                        <div>
                                            Dân tộc:<strong></strong>
                                        </div>
                                        <div>
                                            Tôn giáo:<strong></strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Cơ quan công tác:<strong></strong>
                                        </div>
                                        <div>
                                            Chức vụ:<strong></strong>
                                        </div>
                                        <div>
                                            Số điện thoại:{" "}
                                            <strong>0344444444</strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Hộ khẩu:<strong></strong>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                        <div>
                                            Chỗ ở hiện nay:<strong></strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MainProfile;
