import classNames from "classnames/bind";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Select from "../../../components/Select";
import SidebarMove from "../../../components/SidebarMove";
import RegisterTableList from "../RegisterTableList";

import styles from "./MainDebtLookup.module.scss";

const cx = classNames.bind(styles);

const MainDebtLookup = () => {

   const [selectValueDebt, setSelectValueDebt] = useState('0');
   const [click, setClick] = useState(false);
   const componentRef = useRef();

   const handleOnClick = () => setClick(!click);

   return (
      <>
         <div className={cx("debt-lookup")}>
            <main
               className={cx("debt-container", "container ")}
               style={click ? { width: "100%" } : {}}
            >
               <section className={cx("debt-sidebar")}>
                  <SidebarMove />
               </section>
               <section
                  className={cx("debt-content")}
                  style={
                     selectValueDebt === "0" || selectValueDebt === "1"
                        ? {}
                        : { height: "320px" }
                  }
               >
                  <div className={cx("debt-box")}>
                     <div className={cx("debt-title")}>
                        <div className={cx("caption ")}>
                           <h2>Tra cứu công nợ</h2>

                           <div className={cx("action ")}>
                              <Select
                                 index={7}
                                 setSelectValueDebt={setSelectValueDebt}
                              ></Select>

                              <ReactToPrint
                                 trigger={() => {
                                    return (
                                       <button className={cx("btn ")}>
                                          <i className="fa-solid fa-print"></i>
                                          <span>In công nợ</span>
                                       </button>
                                    );
                                 }}
                                 content={() => componentRef.current}
                              />

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

                     <div className={cx("debt-view")}>
                        <div className={cx("debt-table")} ref={componentRef}>
                           <table>
                              <thead>
                                 <tr>
                                    <th>STT</th>
                                    <th>Mã </th>
                                    <th>Nội dung thu</th>
                                    <th>
                                       Số <br /> Tín chỉ
                                    </th>
                                    <th>
                                       Trạng thái <br /> đăng ký
                                    </th>
                                    <th>
                                       Số tiền <br /> (VNĐ)
                                    </th>
                                    <th>
                                       Miễn giảm <br /> (%)
                                    </th>
                                    <th>
                                       Đã nộp <br /> (VNĐ)
                                    </th>
                                    <th>
                                       Khấu trừ <br /> (VNĐ)
                                    </th>
                                    <th>
                                       Công nợ <br /> (VNĐ)
                                    </th>
                                    <th>Trạng thái</th>
                                 </tr>
                              </thead>

                              <tbody>
                                 {selectValueDebt === "0" ||
                                 selectValueDebt === "1" ? (
                                    <RegisterTableList listData6={true} />
                                 ) : (
                                    <RegisterTableList listData7={true} />
                                 )}

                                 <tr>
                                    <td colSpan={11}></td>
                                 </tr>

                                 {selectValueDebt === "0" ||
                                 selectValueDebt === "1" ? (
                                    <tr className={cx("footer-table")}>
                                       <td colSpan={5}>TỔNG</td>
                                       <td>5.464.500</td>
                                       <td></td>
                                       <td>5.464.500</td>
                                       <td>0</td>
                                       <td>0</td>
                                       <td></td>
                                    </tr>
                                 ) : (
                                    <tr className={cx("footer-table")}>
                                       <td colSpan={5}>TỔNG</td>
                                       <td>704.500</td>
                                       <td></td>
                                       <td>704.500</td>
                                       <td>0</td>
                                       <td>0</td>
                                       <td></td>
                                    </tr>
                                 )}
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

export default MainDebtLookup;
