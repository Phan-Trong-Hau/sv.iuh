import classNames from "classnames/bind";
import { useState } from "react";

import SidebarMove from "../../../components/SidebarMove";
import RegisterTableList from "../RegisterTableList";
import styles from "./MainGeneralReceipts.module.scss";

const cx = classNames.bind(styles);

const MainGeneralReceipts = () => {
   const [click, setClick] = useState(false);

   const handleOnClick = () => setClick(!click)


   return (
      <>
         <div className={cx("general-receipts")}>
            <main
               className={cx("receipts-container", "container ")}
               style={click ? { width: "100%" } : {}}
            >
               <section className={cx("receipts-sidebar")}>
                  <SidebarMove />
               </section>
               <section className={cx("receipts-content")}>
                  <div className={cx("receipts-box")}>
                     <div className={cx("receipts-title")}>
                        <div className={cx("caption ")}>
                           <h2>Phiếu thu tổng hợp</h2>

                           <div className={cx("action ")}>
                              <button className="btn" onClick={handleOnClick}>
                                 <i
                                    className={
                                       click
                                          ? cx("fa-solid fa-minimize")
                                          : cx("fa-solid fa-maximize")
                                    }
                                 ></i>
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className={cx("receipts-view")}>
                        <div className={cx("receipts-table")}>
                           <table>
                              <thead>
                                 <tr>
                                    <th>STT</th>
                                    <th>Số phiếu</th>
                                    <th>Mã hóa đơn</th>
                                    <th>Ngày thu</th>
                                    <th>Số tiền</th>
                                    <th>Đơn vị thu</th>
                                    <th>HĐĐT</th>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <RegisterTableList listData8={true} />
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

export default MainGeneralReceipts;
