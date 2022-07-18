import classNames from "classnames/bind";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import Select from "../../../components/Select";
import ListSchedule from "../ListSchedule";
import styles from "./MainWeeklyProgress.module.scss";

const cx = classNames.bind(styles);

const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
];

const MainWeeklyProgress = () => {
    let listSchedules = list.map((item) => (
        <ListSchedule key={item} index={item} />
    ));
    const componentRef = useRef();
    const [click, setClick] = useState();
    const [selectValueProgress, setSelectValueProgress] = useState('0');
    const [listDataSchelules, setListDataSchelules] = useState(listSchedules);

    const handleClick = () => {
        setClick(!click);
    };

    const handleOnChangeAll = () => {
        listSchedules = list.map((item) => (
            <ListSchedule key={item} index={item} />
        ));
        setListDataSchelules(listSchedules);
    };

    const handleOnChangeLearn = () => {
        listSchedules = list.map((item) => {
            if (item <= 43)
                return (
                    <ListSchedule key={item} index={item} background="bgw" />
                );
            else return true;
        });
        setListDataSchelules(listSchedules);
    };

    const handleOnChangeExam = () => {
        listSchedules = list.map((item) => {
            if (item <= 14)
                return (
                    <ListSchedule key={item} index={item} background="bgy" />
                );
            else return true;
        });
        setListDataSchelules(listSchedules);
    };

    return (
       <>
          <main className={cx("weekly-progress")}>
             <div
                style={click ? { width: "100%" } : {}}
                className={cx("progress-container", "container ")}
             >
                <div className={cx("progress-content")}>
                   <div
                      className={cx("progress-title")}
                      style={
                         selectValueProgress === "0" ? {} : { marginBottom: "50px" }
                      }
                   >
                      <div className={cx("caption ")}>
                         <h2>Lịch học, lịch thi theo tiến độ</h2>
                         <div className={cx("action")}>
                            <span className={cx("radio")}>
                               <label>
                                  <input
                                     onChange={handleOnChangeAll}
                                     type="radio"
                                     name="radio-weekly-progress"
                                     defaultChecked
                                  />
                                  <span>Tất cả</span>
                               </label>
                               <label>
                                  <input
                                     type="radio"
                                     name="radio-weekly-progress"
                                     onChange={handleOnChangeLearn}
                                  />
                                  <span>Lịch học</span>
                               </label>
                               <label>
                                  <input
                                     type="radio"
                                     name="radio-weekly-progress"
                                     onChange={handleOnChangeExam}
                                  />
                                  <span>Lịch thi</span>
                               </label>
                            </span>
                            <span className={cx("select")}>
                               <Select
                                  index={0}
                                  setSelectValueProgress={
                                     setSelectValueProgress
                                  }
                               />
                            </span>
                            <span className={cx("button")}>
                               <button className={cx("btn")}>Xem lịch</button>
                               <ReactToPrint
                                  copyStyles
                                  trigger={() => {
                                     return (
                                        <button className={cx("btn")}>
                                           <i className="fa-solid fa-print"></i>
                                           In lịch
                                        </button>
                                     );
                                  }}
                                  content={() => componentRef.current}
                               />

                               <button
                                  className={cx("btn")}
                                  onClick={handleClick}
                               >
                                  <i
                                     className={
                                        click
                                           ? cx("fa-solid fa-minimize")
                                           : cx("fa-solid fa-maximize")
                                     }
                                  ></i>
                               </button>
                            </span>
                         </div>
                      </div>
                   </div>
                   <div
                      className={cx("progress-body")}
                      ref={componentRef}
                      style={
                         selectValueProgress === "0" ? {} : { display: "none" }
                      }
                   >
                      <div className={cx("progress-table")}>
                         <table>
                            <thead>
                               <tr>
                                  <th rowSpan="2">STT</th>
                                  <th rowSpan="2">Mã học phần</th>
                                  <th rowSpan="2">Tên môn học/học phần</th>
                                  <th rowSpan="2">
                                     Số
                                     <br />
                                     tín
                                     <br />
                                     chỉ
                                  </th>
                                  <th colSpan="6">Thông tin lịch</th>
                                  <th colSpan="2">Thời gian</th>
                                  <th rowSpan="2">Mã giảng viên</th>
                                  <th rowSpan="2">Giảng viên</th>
                               </tr>
                               <tr>
                                  <th>Thứ</th>
                                  <th>Tiết</th>
                                  <th>Loại lịch</th>
                                  <th>Phòng</th>
                                  <th>Nhóm</th>
                                  <th>Giờ</th>
                                  <th>Bắt đầu</th>
                                  <th>Kết thúc</th>
                               </tr>
                            </thead>
                            <tbody>{listDataSchelules}</tbody>
                         </table>
                      </div>
                      <div className={cx("progress-note")}>
                         <ul>
                            <li>
                               <span></span>
                               <label>Lịch học</label>
                            </li>
                            <li>
                               <span></span>
                               <label>Lịch thi</label>
                            </li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
          </main>
       </>
    );
};

export default MainWeeklyProgress;
