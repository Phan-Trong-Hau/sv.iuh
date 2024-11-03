import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./MainOnlinePayment.module.scss";
import SidebarMove from "../../../components/SidebarMove";
import Select from "../../../components/Select";

const cx = classNames.bind(styles);

const MainOnlinePayment = () => {
   return (
      <>
         <div className={cx("online-payment")}>
            <main className={cx("payment-container", "container ")}>
               <section className={cx("payment-sidebar")}>
                  <SidebarMove />
               </section>
               <section className={cx("payment-content")}>
                  <div className={cx("payment-box")}>
                     <div className={cx("payment-title")}>
                        <div className={cx("caption ")}>
                           <h2>Thanh toán trực tuyến</h2>

                           <div className={cx("action ")}>
                              <Select index={7}></Select>
                           </div>
                        </div>
                     </div>

                     <div className={cx("payment-view")}>
                        <div className={cx("payment-table")}>
                           <table>
                              <thead>
                                 <tr>
                                    <th>
                                       <input type="checkbox" defaultChecked />
                                    </th>
                                    <th>STT</th>
                                    <th>Mã </th>
                                    <th>Nội dung thu</th>
                                    <th>Tín chỉ</th>
                                    <th>Bắt buộc</th>
                                    <th>Số tiền (VNĐ)</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td colSpan={7}>
                                       Không tìm thấy dữ liệu công nợ
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className={cx("payment-note")}>
                           <p>
                              <span>Lưu ý:</span> Với các giao dịch không thành
                              công thì sau 30 phút hệ thống sẽ làm mới các khoản
                              thu để sinh viên tiếp tục thanh toán. <br />
                              Để hủy giao dịch chờ gạch nợ, vui lòng bấm
                              <Link to='/phieu-thu'> vào đây </Link>.
                           </p>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </>
   );
};
export default MainOnlinePayment;
