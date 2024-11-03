import { useRef, useState } from "react";
import classNames from "classnames/bind";
import ReactToPrint from "react-to-print";

import styles from "./MainRegisterCourse.module.scss";
import Select from "../../../components/Select";
import RegisterTableList from "../RegisterTableList";
import Popup from "../../../components/Popup";

const cx = classNames.bind(styles);

const MainRegisterCourse = () => {

   const [selectValue, setSelectValue] = useState();
   const [tableItemValue, setTableItemValue] = useState();
   const [click, setClick] = useState(0);
   const [change, setChange] = useState(true);
   const [popup, setPopup] = useState(false);
   const [popup1, setPopup1] = useState(false);
   const [popup2, setPopup2] = useState(false);
   const [popup3, setPopup3] = useState(false);
   const [popup4, setPopup4] = useState(false);
   const changeRef = useRef("0");
   const componentRef = useRef();

   const handleOnClick = () => setClick(click + 1);

   const handlePopup = (data) => {
      if (data.target.checked) {
         setTimeout(() => {
            data.target.checked = false;
         }, 200);
      }
      setPopup(!popup);
   };

   const handlePopup1 = () => setPopup1(!popup1);
   const handlePopup4 = () => setPopup4(!popup4);
   const handlePopup2And3 = () => {
      if (tableItemValue%2) setPopup3(!popup3);
      else setPopup2(!popup2);
   };

   const handleOnChange = (e) => {
      setChange(!change);
      changeRef.current = e;
   };

   return (
      <>
         <main className={cx("register-course")}>
            <section className={cx("container ", "register-container")}>
               <div className={cx("register-box")}>
                  <div className={cx("register-title")}>
                     <div className={cx("caption ")}>
                        <h2>Đăng ký học phần</h2>
                     </div>
                  </div>
                  <div className={cx("register-content")}>
                     <div className={cx("form-group")}>
                        <div></div>
                        <div>
                           <Select
                              index={0}
                              defaultValue={10000}
                              setSelectValueRegisterCourse={setSelectValue}
                           />
                        </div>
                        <div>
                           <label>
                              <input
                                 type="radio"
                                 name="register-radio"
                                 defaultChecked
                                 value={0}
                                 onClick={(e) => handleOnChange(e.target.value)}
                              />
                              Học mới
                           </label>

                           <label>
                              <input
                                 type="radio"
                                 name="register-radio"
                                 value={1}
                                 onClick={(e) => handleOnChange(e.target.value)}
                              />
                              Học lại
                           </label>

                           <label>
                              <input
                                 type="radio"
                                 name="register-radio"
                                 value={2}
                                 onClick={(e) => handleOnChange(e.target.value)}
                              />
                              Học cải thiện
                           </label>
                        </div>
                        <div></div>
                     </div>

                     <div
                        style={
                           selectValue && selectValue !== "Chọn học kỳ"
                              ? { display: "block" }
                              : { display: "none" }
                        }
                     >
                        <div
                           className={cx("gr-table")}
                           style={
                              changeRef.current === "2"
                                 ? { display: "none" }
                                 : null
                           }
                        >
                           <div className={cx("table-title")}>
                              <h3>Môn học/học phần đang chờ đăng ký</h3>
                           </div>
                           <div className={cx("table-content")}>
                              <table>
                                 <thead>
                                    <tr>
                                       <th
                                          style={{
                                             width: "40px",
                                          }}
                                       ></th>
                                       <th>STT</th>
                                       <th>Mã học phần</th>
                                       <th>Tên môn học/học phần</th>
                                       <th>TC </th>
                                       <th>Bắt buộc</th>
                                       <th>
                                          học phần: học trước (a),
                                          <br />
                                          tiên quyết (b), <br />
                                          song hành (c)
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {changeRef.current === "0" ? (
                                       <RegisterTableList
                                          listData2={true}
                                          handleOnClick={handleOnClick}
                                       />
                                    ) : (
                                       <tr className={cx("tr-footer")}>
                                          <td colSpan={7}>
                                             Không tìm thấy môn học/học phần
                                             đang chờ đăng ký
                                          </td>
                                       </tr>
                                    )}
                                 </tbody>
                              </table>
                           </div>
                        </div>

                        <div
                           className={cx("gr-table")}
                           style={
                              changeRef.current !== "2"
                                 ? { display: "none" }
                                 : null
                           }
                        >
                           <div className={cx("table-title")}>
                              <h3>Môn học/học phần đang chờ đăng ký</h3>
                           </div>
                           <div className={cx("table-content")}>
                              <table>
                                 <thead>
                                    <tr>
                                       <th
                                          style={{
                                             width: "40px",
                                          }}
                                       ></th>
                                       <th>STT</th>
                                       <th>Mã học phần</th>
                                       <th>Tên môn học/học phần</th>
                                       <th>Điểm tổng kết</th>
                                       <th>TC </th>
                                       <th>Bắt buộc</th>
                                       <th>
                                          học phần: học trước (a),
                                          <br />
                                          tiên quyết (b), <br />
                                          song hành (c)
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {parseInt(selectValue, 10) < 3 ? (
                                       <RegisterTableList
                                          listData5={true}
                                          handleOnClick={handleOnClick}
                                       />
                                    ) : (
                                       <tr className={cx("tr-footer")}>
                                          <td colSpan={8}>
                                             Không tìm thấy môn học/học phần
                                             đang chờ đăng ký
                                          </td>
                                       </tr>
                                    )}
                                 </tbody>
                              </table>
                           </div>
                        </div>

                        <div
                           className={cx("form-table")}
                           style={
                              !click ||
                              changeRef.current === "1" ||
                              (parseInt(selectValue, 10) >= 3 &&
                                 changeRef.current === "2")
                                 ? { display: "none" }
                                 : null
                           }
                        >
                           <div className={cx("gr-table")}>
                              <div className={cx("table-title")}>
                                 <h3>Lớp học phần chờ đăng ký</h3>
                                 <div>
                                    <label>
                                       <input
                                          type="checkbox"
                                          onClick={(e) => handlePopup(e)}
                                       />
                                       <span>
                                          HIỂN THỊ LỚP HỌC PHẦN KHÔNG TRÙNG LỊCH
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              <div className={cx("table-content")}>
                                 <table>
                                    <thead>
                                       <tr>
                                          <th>STT</th>
                                          <th>Thông tin lớp học phần</th>
                                          <th>Đã đăng ký</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <RegisterTableList
                                          listData3={true}
                                          setTableItemValue={setTableItemValue}
                                       />
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div className={cx("gr-table")}>
                              <div className={cx("table-title")}>
                                 <h3>Chi tiết lớp học phần</h3>
                                 <div>
                                    <button
                                       className={cx("btn-custom")}
                                       onClick={handlePopup2And3}
                                    >
                                       Xem lịch trùng
                                    </button>
                                 </div>
                              </div>
                              <div className={cx("table-content")}>
                                 <table>
                                    <thead>
                                       <tr>
                                          <th>
                                             Trạng thái:
                                             {tableItemValue % 2 ? (
                                                <span> Đang lên kế hoạch</span>
                                             ) : (
                                                <span> Chấp nhận mở lớp</span>
                                             )}
                                          </th>
                                          <th className={cx("color-black")}>
                                             Sĩ số tối đa:{" "}
                                             {tableItemValue % 2
                                                ? "100"
                                                : "110"}
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {tableItemValue % 2 ? (
                                          <tr className={cx("tr-footer")}>
                                             <td colSpan={2}>
                                                Chưa có lịch học
                                             </td>
                                          </tr>
                                       ) : (
                                          <RegisterTableList listData4={true} />
                                       )}
                                    </tbody>
                                 </table>
                              </div>
                              <div className={cx("btn-table")}>
                                 <button
                                    className={cx("btn ")}
                                    onClick={handlePopup}
                                 >
                                    Đăng ký
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div className={cx("gr-table")}>
                           <div className={cx("table-title")}>
                              <h3>Lớp học phần đã đăng ký trong học kỳ này</h3>
                              <ReactToPrint
                                 copyStyles
                                 trigger={() => {
                                    return (
                                       <button className="btn">
                                          <i className="fa-solid fa-print"></i>
                                       </button>
                                    );
                                 }}
                                 content={() => componentRef.current}
                              />
                           </div>
                           <div
                              className={cx("table-content")}
                              ref={componentRef}
                           >
                              <table>
                                 <thead>
                                    <tr>
                                       <th>STT</th>
                                       <th>Mã lớp học phần</th>
                                       <th>Tên môn học/học phần</th>
                                       <th> Lớp học dự kiến </th>
                                       <th>TC </th>
                                       <th>Nhóm TH</th>
                                       <th>Học phí</th>
                                       <th>Hạn nộp </th>
                                       <th>Thu</th>
                                       <th>Trạng thái ĐK</th>
                                       <th>Ngày ĐK</th>
                                       <th>Trạng thái Lớp học phần</th>
                                       <th></th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {selectValue === "0" ? (
                                       <>
                                          <RegisterTableList
                                             listData1={true}
                                             handlePopup1={handlePopup1}
                                             handlePopup4={handlePopup4}
                                          />
                                          <tr className={cx("tr-footer")}>
                                             <td colSpan={4}>Tổng</td>
                                             <td>17</td>
                                          </tr>
                                       </>
                                    ) : (
                                       <tr className={cx("tr-footer")}>
                                          <td colSpan={14}>
                                             Không tìm thấy lớp học phần đã đăng
                                             ký
                                          </td>
                                       </tr>
                                    )}
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         {popup && <Popup handlePopup={handlePopup} />}
         {popup1 && <Popup handlePopup={handlePopup1} index={1} />}
         {popup2 && <Popup handlePopup={handlePopup2And3} index={2} />}
         {popup3 && <Popup handlePopup={handlePopup2And3} index={3} />}
         {popup4 && <Popup handlePopup={handlePopup4} index={4} />}
      </>
   );
};

export default MainRegisterCourse;
