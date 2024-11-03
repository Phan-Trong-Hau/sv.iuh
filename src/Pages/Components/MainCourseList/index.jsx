import { useRef } from "react";
import useState from "react-usestateref";
import ReactToPrint from "react-to-print";
import classNames from "classnames/bind";

import styles from "./MainCourseList.module.scss";
import SidebarMove from "../../../components/SidebarMove";
import CourseItem from "../CourseItem";

const cx = classNames.bind(styles);

const MainCourseList = () => {
    let listCheck = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];

    const [show, setShow, ref] = useState(listCheck);
    const [click, setClick] = useState(false);
    const componentRef = useRef();

    const handleShow = (e) => {
        listCheck = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ];
        if (ref.current[e]) {
            setShow(listCheck);
        } else {
            listCheck[e] = true;
            setShow(listCheck);
        }
    };

    const handleAllShow = () => {
        if (ref.current[0] === ref.current[1] && ref.current[1] === true) {
            listCheck = [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ];
        } else {
            listCheck = [true, true, true, true, true, true, true, true, true];
        }

        setShow(listCheck);
    };

    const handleClick = () => setClick(!click);

    return (
        <>
            <div className={cx("course-list")}>
                <main
                    className={cx("course-container", "container ")}
                    style={click ? { width: "100%" } : {}}
                >
                    <section className={cx("course-sidebar")}>
                        <SidebarMove />
                    </section>
                    <section className={cx("course-content")}>
                        <div className={cx("course-title")}>
                            <div className={cx("caption ")}>
                                <h2>Chương trình khung</h2>

                                <div className={cx("action ")}>
                                    <ReactToPrint
                                        trigger={() => {
                                            return (
                                                <button className={cx("btn")}>
                                                    <i className="fa-solid fa-print"></i>
                                                    In
                                                </button>
                                            );
                                        }}
                                        content={() => componentRef.current}
                                        documentTitle="new document"
                                    />
                                    <button
                                        className={cx("btn ")}
                                        onClick={handleAllShow}
                                    >
                                        <i className="fa-regular fa-square-caret-down"></i>
                                    </button>
                                    <button
                                        className={cx("btn ")}
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
                                </div>
                            </div>
                        </div>

                        <div className={cx("course-body")}>
                            <div className={cx("course-table")} ref={componentRef}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên môn học/Học phần</th>
                                            <th>Mã Học phần</th>
                                            <th>Học phần</th>
                                            <th>Số TC</th>
                                            <th>Số tiết LT</th>
                                            <th>Số tiết TH</th>
                                            <th>
                                                Nhóm <br /> tự chọn
                                            </th>
                                            <th>
                                                Số TC bắt buộc <br /> của nhóm
                                            </th>
                                            <th>Đạt</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(0)}
                                        >
                                            <td colSpan="4">Học kì 1</td>
                                            <td>11</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[0] ? "active" : ""}
                                            check={true}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(1)}
                                        >
                                            <td colSpan="4">Học kì 2</td>
                                            <td>12</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[1] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(2)}
                                        >
                                            <td colSpan="4">Học kì 3</td>
                                            <td>16</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[2] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(3)}
                                        >
                                            <td colSpan="4">Học kì 4</td>
                                            <td>18</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[3] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(4)}
                                        >
                                            <td colSpan="4">Học kì 5</td>
                                            <td>18</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[4] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(5)}
                                        >
                                            <td colSpan="4">Học kì 6</td>
                                            <td>17</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[5] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(6)}
                                        >
                                            <td colSpan="4">Học kì 7</td>
                                            <td>17</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[6] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(7)}
                                        >
                                            <td colSpan="4">Học kì 8</td>
                                            <td>16</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[7] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr
                                            className={cx("row-show")}
                                            onClick={(e) => handleShow(8)}
                                        >
                                            <td colSpan="4">Học kì 9</td>
                                            <td>13</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <CourseItem
                                            active={show[8] ? "active" : ""}
                                        />
                                    </tbody>
                                    <tbody>
                                        <tr className={cx("tr-row-2")}>
                                            <td colSpan="4">Tổng TC yêu cầu</td>
                                            <td>138</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <tr className={cx("tr-row-2")}>
                                            <td colSpan="4">
                                                Tổng TC bắt buộc
                                            </td>
                                            <td>105</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                        <tr className={cx("tr-row-2")}>
                                            <td colSpan="4">Tổng TC tự chọn</td>
                                            <td>33</td>
                                            <td colSpan="5"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx("course-note")}>
                                <p>
                                    <i>
                                        Ghi chú: Những môn học/Học phần có dấu
                                        <span> * </span>
                                        không được tính vào Trung bình chung
                                        tích lũy
                                    </i>
                                </p>
                                <ul>
                                    <li className={cx("li-parent")}>
                                        <span></span>
                                        <label>
                                            Môn học/Học phần đã (hoặc đang) học
                                        </label>
                                    </li>
                                    <li className={cx("li-parent")}>
                                        <span></span>
                                        <label>
                                            Môn học sinh viên chưa đăng ký học
                                            tập
                                        </label>
                                    </li>
                                    <ul className={cx("ul-child")}>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            <label>Đạt </label>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-circle-xmark"></i>
                                            </span>
                                            <label>Không đạt</label>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default MainCourseList;
