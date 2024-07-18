import classNames from "classnames/bind";

import styles from "./Popup.module.scss";
import imgSorry from "../../assets/sorry.png";

const cx = classNames.bind(styles);

const listData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Popup = (props) => {
  const listItems = listData.map((item) => {
    return (
      <tr key={item}>
        <td>{item}</td>
        <td>LT - Thứ 2 (Tiết 1 -> 5 )</td>
        <td></td>
        <td>TRỰC TUYẾN ZOOM_02</td>
        <td>Trực tuyến CSQN</td>
        <td> Phân hiệu Quảng Ngãi </td>
        <td>DH ĐỖ HỮU DỰ </td>
        <td>29/11/2021 - 29/11/2021</td>
      </tr>
    );
  });

  if (props.index === 1) {
    return (
      <>
        <div className={cx("popup")}>
          <div className={cx("popup-content")}>
            <div className={cx("popup-text")}>
              Lớp học phần đang ở trạng thái <br />
              "Đã khóa" nên không được phép hủy
            </div>
            <button onClick={props.handlePopup}>Đóng</button>
          </div>
          <div
            className={cx("popup-background")}
            onClick={props.handlePopup}
          ></div>
        </div>
      </>
    );
  } else if (props.index === 2) {
    return (
      <>
        <div className={cx("popup")}>
          <div className={cx("popup-table__content")}>
            <div className={cx("popup-title")}>
              <h3>Danh sách lớp học phần trùng lịch</h3>
            </div>
            <div className={cx("popup-table")}>
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Mã lớp học phần</th>
                    <th>Mã lớp xếp lịch học</th>
                    <th>Tên môn học</th>
                    <th>Lý thuyết</th>
                    <th>Nhóm</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Thứ</th>
                    <th>Từ tiết</th>
                    <th>Đến tiết</th>
                    <th>Học bù</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>420300123456</td>
                    <td>
                      Đại học Công nghệ thông tin 17A <br />
                      Quảng Ngãi - 7480201
                    </td>
                    <td>Nhập môn Lập trình</td>
                    <td>
                      <input type="checkbox" disabled />
                    </td>
                    <td>1</td>
                    <td>08/10/2021</td>
                    <td>08/10/2021</td>
                    <td>6</td>
                    <td>2</td>
                    <td>5</td>
                    <td>
                      <input type="checkbox" disabled />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button onClick={props.handlePopup}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div
            className={cx("popup-background")}
            onClick={props.handlePopup}
          ></div>
        </div>
      </>
    );
  } else if (props.index === 3) {
    return (
      <>
        <div className={cx("popup")}>
          <div className={cx("popup-content")}>
            <div className={cx("popup-text")}>
              Chọn chi tiết học phần cần đăng ký
            </div>
            <button onClick={props.handlePopup}>Đóng</button>
          </div>
          <div
            className={cx("popup-background")}
            onClick={props.handlePopup}
          ></div>
        </div>
      </>
    );
  } else if (props.index === 4) {
    return (
      <>
        <div className={cx("popup")}>
          <div className={cx("popup-table__content")}>
            <div className={cx("popup-title")}>
              <h3>Danh sách lớp học phần trùng lịch</h3>
            </div>
            <div className={cx("popup-table")}>
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Lịch học</th>
                    <th> Nhóm </th>
                    <th>Phòng</th>
                    <th>Dãy nhà</th>
                    <th>Cơ sở</th>
                    <th> Giảng viên</th>
                    <th>Thời gian</th>
                  </tr>
                </thead>
                <tbody>{listItems}</tbody>
              </table>
            </div>
            <button onClick={props.handlePopup}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div
            className={cx("popup-background")}
            onClick={props.handlePopup}
          ></div>
        </div>
      </>
    );
  } else if (props.index === 5) {
    return (
      <>
        <div className={cx("popup")}>
          <div className={cx("popup-form")}>
            <form action="/">
              <div className={cx("form-gr")}>
                <label>
                  Mật khẩu cũ <span>(*)</span>
                </label>
                <input
                  data-val="true"
                  data-val-required="Nhập mật khẩu cũ"
                  id="Old_Password"
                  name="Old_Password"
                  placeholder="Nhập mật khẩu cũ"
                  type="password"
                  autoComplete="on"
                  required
                />
              </div>
              <div className={cx("form-gr")}>
                <label>
                  Mật khẩu mới <span>(*)</span>
                </label>
                <input
                  data-val="true"
                  data-val-required="Nhập mật khẩu mới"
                  id="New_Password"
                  name="New_Password"
                  placeholder="Nhập mật khẩu mới"
                  type="password"
                  aria-autocomplete="list"
                  autoComplete="on"
                  required
                />
              </div>
              <div className={cx("form-gr")}>
                <label>
                  Xác nhận mật khẩu <span>(*)</span>
                </label>
                <input
                  data-val="true"
                  data-val-required="Nhập xác nhận mật khẩu mới"
                  id="Confirm_Password"
                  name="Confirm_Password"
                  placeholder="Xác nhận lại mật khẩu"
                  type="password"
                  autoComplete="on"
                  required
                />
              </div>
              <div className={cx("actions")}>
                <button type="submit">Lưu</button>
              </div>
            </form>

            <button onClick={props.handlePopup}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div
            className={cx("popup-background")}
            onClick={props.handlePopup}
          ></div>
        </div>
      </>
    );
  } else if (props.index === 6) {
    return (
      <div className={cx("popup")}>
        <div className={cx("popup-content")}>
          <div className={cx("popup-text")}>
            <strong style={{ color: "red" }}>Thông báo</strong>: Website này xây
            dựng chỉ với mục đích học tập, không phải trang sinh viên của trường
            đại học Công Nghiệp (IUH). Vui lòng click vào{" "}
            <a
              href="https://sv.iuh.edu.vn/sinh-vien-dang-nhap.html"
              target="_blank"
              rel="noreferrer"
              style={{ color: "red" }}
            >
              đây
            </a>{" "}
            để truy cập trang sinh viên của trường.
            <br />
            <br />
            <div className="contact" style={{ fontSize: "1.2rem" }}>
              Mọi thắc mắc xin vui lòng liên hệ:{" "}
              <strong>
                <a href="mailto:phantronghau.dev@gmail.com">
                  phantronghau.dev@gmail.com
                </a>
              </strong>
            </div>
          </div>

          <button onClick={props.handlePopup}>Đóng</button>
        </div>
        <div
          className={cx("popup-background")}
          onClick={props.handlePopup}
        ></div>
      </div>
    );
  } else {
    return (
      <>
        <div className={cx("popup")}>
          <div className={cx("popup-content")}>
            <div className={cx("popup-text")}>
              Thật lòng xin lỗi vì sự bất tiện này! <br />
              Với trình độ gà mờ của tôi bấy giờ, <br />
              tôi chưa thể thực hiện tính năng này. <br />
              Xin chân thành cảm ơn.
            </div>
            <img src={imgSorry} alt="i'm-so-sorry-pikachu" />
            <button onClick={props.handlePopup}>Trở lại</button>
          </div>
          <div
            className={cx("popup-background")}
            onClick={props.handlePopup}
          ></div>
        </div>
      </>
    );
  }
};

export default Popup;
