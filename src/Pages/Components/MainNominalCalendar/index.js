import classNames from "classnames/bind";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import Select from "../../../components/Select";
import NominalItem from "../NominalItem";

import styles from "./MainNominalCalendar.module.scss";

const cx = classNames.bind(styles);

const MainNominalCalendar = () => {
   const componentRef = useRef();
   let data = [true, false, false];
   const [click, setClick] = useState(data);

   const handleClick = (index) => {
      data = [false, false, false];
      data[index] = true;
      setClick(data);
   };

   return (
      <>
         <main className={cx("nominal-calendar")}>
            <div className={cx("container ", "nominal-container")}>
               <div className={cx("nominal-content")}>
                  <div className={cx("nominal-title")}>
                     <div className={cx("caption ")}>
                        <h2>Xem lịch học</h2>
                     </div>
                  </div>
                  <div className={cx("nominal-body")}>
                     <div className={cx("nominal-radio")}>
                        <strong>Tìm kiếm theo:</strong>
                        <label>
                           <input
                              type="radio"
                              defaultChecked
                              name="nominal-radio"
                              onChange={(el) => handleClick(el.target.value)}
                              value={0}
                           />
                           Mã sinh viên
                        </label>
                        <label>
                           <input
                              type="radio"
                              name="nominal-radio"
                              onChange={(el) => handleClick(el.target.value)}
                              value={1}
                           />
                           Mã lớp học
                        </label>
                        <label>
                           <input
                              type="radio"
                              name="nominal-radio"
                              onChange={(el) => handleClick(el.target.value)}
                              value={2}
                           />
                           Tùy chọn
                        </label>
                     </div>
                     <div
                        style={
                           click[2] ? { display: "none" } : { display: "grid" }
                        }
                        className={cx("nominal-group")}
                     >
                        <div></div>
                        {click[0] ? (
                           <div>
                              <strong>Mã sinh viên</strong>
                              <input
                                 type="text"
                                 disabled
                                 defaultValue={"21111111"}
                              />
                           </div>
                        ) : (
                           <div>
                              <strong>
                                 Mã lớp học <span>(*)</span>
                              </strong>
                              <input
                                 type="text"
                                 style={{ cursor: "auto" }}
                                 defaultValue={""}
                              />
                           </div>
                        )}

                        <div>
                           <strong>
                              Đợt <span>(*)</span>
                           </strong>
                           <Select index={0} />
                        </div>
                        <div></div>
                     </div>
                     <div
                        style={
                           click[2] ? { display: "grid" } : { display: "none" }
                        }
                        className={cx("nominal-group", "option")}
                     >
                        <div>
                           <strong>
                              Khoa <span>(*)</span>
                           </strong>
                           <input type="text" style={{ cursor: "auto" }} />
                        </div>

                        <div>
                           <strong>
                              Đợt <span>(*)</span>
                           </strong>
                           <Select
                              index={0}
                           />
                        </div>

                        <div>
                           <strong>
                              Lớp học <span>(*)</span>
                              <input type="text" style={{ cursor: "auto" }} />
                           </strong>
                        </div>
                     </div>

                     <div className={cx("nominal-action")}>
                        <button className={cx("btn ")}>Xem</button>
                        <ReactToPrint
                           copyStyles
                           trigger={() => {
                              return (
                                 <button className={cx("btn ")}>
                                    In lịch học
                                 </button>
                              );
                           }}
                           content={() => componentRef.current}
                        />
                     </div>
                     <div
                        className={cx("nominal-view")}
                     >
                        <div
                           className={cx("nominal-table")}
                           ref={componentRef}
                           style={
                              click[0]
                                 ? { display: "block" }
                                 : { display: "none" }
                           }
                        >
                           <table>
                              <thead>
                                 <tr>
                                    <th>Thứ</th>
                                    <th>Buổi</th>
                                    <th>Mã HP</th>
                                    <th>Môn học</th>
                                    <th>Tiết học</th>
                                    <th>Giảng viên</th>
                                    <th>Phòng học</th>
                                    <th>Thời gian học</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td rowSpan="19">Thứ 2</td>
                                 </tr>

                                 <tr>
                                    <td rowSpan="14">Sáng</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Chiều</td>
                                 </tr>
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Tối</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td rowSpan="20">Thứ 3</td>
                                 </tr>

                                 <tr>
                                    <td rowSpan="2">Sáng</td>
                                 </tr>
                                 <NominalItem />

                                 <tr>
                                    <td rowSpan="15">Chiều</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Tối</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td rowSpan="20">Thứ 4</td>
                                 </tr>

                                 <tr>
                                    <td rowSpan="2">Sáng</td>
                                 </tr>
                                 <NominalItem />

                                 <tr>
                                    <td rowSpan="15">Chiều</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Tối</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td rowSpan="19">Thứ 5</td>
                                 </tr>

                                 <tr>
                                    <td rowSpan="14">Sáng</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Chiều</td>
                                 </tr>
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Tối</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td rowSpan="19">Thứ 6</td>
                                 </tr>

                                 <tr>
                                    <td rowSpan="14">Sáng</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Chiều</td>
                                 </tr>
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Tối</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td rowSpan="19">Thứ 7</td>
                                 </tr>

                                 <tr>
                                    <td rowSpan="14">Sáng</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Chiều</td>
                                 </tr>
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Tối</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td rowSpan="9">Chủ Nhật</td>
                                 </tr>

                                 <tr>
                                    <td rowSpan="3">Sáng</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />

                                 <tr>
                                    <td rowSpan="3">Chiều</td>
                                 </tr>
                                 <NominalItem />
                                 <NominalItem />
                                 <tr>
                                    <td rowSpan="2">Tối</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default MainNominalCalendar;
