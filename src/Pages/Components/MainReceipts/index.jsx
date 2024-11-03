import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import SidebarMove from "../../../components/SidebarMove";
import styles from "./MainReceipts.module.scss";

const cx = classNames.bind(styles);

const Receipts = () => {
   return (
      <>
         <div className={cx("receipts")}>
            <main className={cx("receipts-container", "container ")}>
               <section className={cx("receipts-sidebar")}>
                  <SidebarMove />
               </section>
               <section className={cx("receipts-content")}>
                  <div className={cx("receipts-box")}>
                     <div className={cx("receipts-title")}>
                        <div className={cx("caption ")}>
                           <h2>Phiếu thu</h2>

                           <div className={cx("action ")}>
                              <Link to="/thanh-toan-truc-tuyen">
                                 <button className="btn">
                                    Tiếp tục thanh toán
                                    <i class="fa-solid fa-circle-chevron-right"></i>
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>

                     <div className={cx("receipts-view")}>
                        <div className={cx("receipts-table")}>
                           <table>
                              <thead>
                                 <tr>
                                    <th>STT</th>
                                    <th>Mã đơn</th>
                                    <th>Nội dung thu</th>
                                    <th>
                                       Số tiền <br /> (VNĐ)
                                    </th>
                                    <th>
                                       Ngày <br /> thanh toán
                                    </th>
                                    <th>
                                       Đã <br /> thanh toán
                                    </th>
                                    <th>
                                       Đã cập nhật <br /> công nợ
                                    </th>
                                    <th>
                                       Trạng thái <br /> giao dịch
                                    </th>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>1</td>
                                    <td>
                                       123abc123abc123a <br /> bc123abc123abc12
                                    </td>
                                    <td>Thu nhập học</td>
                                    <td>4.760.000</td>
                                    <td>23/09/2021 15:03:01</td>
                                    <td>
                                       <i className="fa-solid fa-check-circle green"></i>
                                    </td>
                                    <td>
                                       <i className="fa-solid fa-check-circle green"></i>
                                    </td>
                                    <td>Thành công</td>
                                    <td>
                                       <Link to="/">
                                          <button className="btn">
                                             chi tiết
                                          </button>
                                       </Link>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </>
   );
};

export default Receipts;
