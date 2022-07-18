import classNames from "classnames/bind";
import ReactToPrint from "react-to-print";
import { useCallback, useEffect, useRef, useState } from "react";

import SidebarMove from "../../../components/SidebarMove";
import styles from "./MainWeeklyCalendar.module.scss";
import backgroundTable from "../../../assets/backgroundTable.png";

const cx = classNames.bind(styles);

let date = new Date().toISOString().split("T")[0];

const weekday = [
    {
        id: 0,
        date: "",
        day: "Monday",
    },
    {
        id: 1,
        date: "",
        day: "Tuesday",
    },
    {
        id: 2,
        date: "",
        day: "Wednesday",
    },
    {
        id: 3,
        date: "",
        day: "Thursday",
    },
    {
        id: 4,
        date: "",
        day: "Friday",
    },
    {
        id: 5,
        date: "",
        day: "Saturday",
    },
    {
        id: 6,
        date: "",
        day: "Sunday",
    },
];

const MainWeeklyCalendar = () => {
    const componentRef = useRef();
    const count = useRef(0);

    const [listDay, setListDay] = useState([]);
    const [click, setClick] = useState(false);

    const setDate = (
        value = 0,
        valueOnChange = new Date(),
        returnDateUpdate = true
    ) => {
        const someDate = new Date(valueOnChange);
        const dateUpdate = someDate.setDate(someDate.getDate() + value);

        if (returnDateUpdate) return dateUpdate;

        return new Date(dateUpdate).toLocaleDateString("en-TT", {
            weekday: "long",
        });
    };

    const weekDayUpdate = useCallback(
        (value = 0, valueOnChange = new Date()) => {
            const dayFind = weekday.find(
                (item) => item.day === setDate(value, valueOnChange, false)
            );
            const listDayUpdate = [];

            weekday.forEach((item, index) => {
                if (index < dayFind.id) {
                    listDayUpdate[index] = new Date(
                        setDate(-(dayFind.id - index) + value, valueOnChange)
                    ).toLocaleDateString("vi-VN");
                } else if (index > dayFind.id) {
                    listDayUpdate[index] = new Date(
                        setDate(index - dayFind.id + value, valueOnChange)
                    ).toLocaleDateString("vi-VN");
                } else {
                    listDayUpdate[index] = new Date(
                        setDate(value, valueOnChange)
                    ).toLocaleDateString("vi-VN");
                }
            });
            setListDay(listDayUpdate);
        },
        []
    );

    const handleClickUp = () => {
        count.current += 7;
        weekDayUpdate(count.current);
    };

    const handleClickDown = () => {
        count.current -= 7;
        weekDayUpdate(count.current);
    };

    const handleClickNow = () => {
        count.current = 0;
        weekDayUpdate(count.current);
    };

    const handleClick = () => {
        setClick(!click);
    };

    const handleOnChange = (e) => {
        weekDayUpdate(0, e.target.value);
    };

    useEffect(() => {
        weekDayUpdate();
    }, [weekDayUpdate]);

    return (
        <div className={cx("weekly-calendar")}>
            <main
                style={click ? { width: "100%" } : {}}
                className={cx("calendar-container", "container ")}
            >
                <section className={cx("calendar-sidebar")}>
                    <SidebarMove />
                </section>
                <section className={cx("calendar-content")}>
                    <div className={cx("calendar-title")}>
                        <div className={cx("caption")}>
                            <h2> Lịch học, lịch thi theo tuần </h2>
                            <div className={cx("action")}>
                                <span className={cx("radio")}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio-weekly-calendar"
                                            defaultChecked
                                        />
                                        <span>Tất cả</span>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio-weekly-calendar"
                                        />
                                        <span>Lịch học</span>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="radio-weekly-calendar"
                                        />
                                        <span>Lịch thi</span>
                                    </label>
                                </span>
                                <span className={cx("calendar")}>
                                    <input
                                        type="date"
                                        defaultValue={date}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </span>
                                <span className={cx("button")}>
                                    <button
                                        className={cx("btn")}
                                        onClick={handleClickNow}
                                    >
                                        <i className="fa-solid fa-calendar-days"></i>
                                        Hiện tại
                                    </button>
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
                                        documentTitle="new document"
                                    />
                                    <button
                                        className={cx("btn")}
                                        onClick={handleClickDown}
                                    >
                                        <i className="fa-solid fa-angle-left"></i>
                                        Trở về
                                    </button>
                                    <button
                                        className={cx("btn")}
                                        onClick={handleClickUp}
                                    >
                                        Tiếp
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>
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
                    <div ref={componentRef} className={cx("calendar-body")}>
                        <div className={cx("calendar-table")}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Ca học</th>
                                        <th>
                                            Thứ 2 <br />
                                            {listDay[0]}
                                        </th>
                                        <th>
                                            Thứ 3 <br />
                                            {listDay[1]}
                                        </th>
                                        <th>
                                            Thứ 4 <br />
                                            {listDay[2]}
                                        </th>
                                        <th>
                                            Thứ 5 <br />
                                            {listDay[3]}
                                        </th>
                                        <th>
                                            Thứ 6 <br />
                                            {listDay[4]}
                                        </th>
                                        <th>
                                            Thứ 7 <br />
                                            {listDay[5]}
                                        </th>
                                        <th>
                                            Chủ nhật <br />
                                            {listDay[6]}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    style={{
                                        backgroundImage:
                                            "url(" + backgroundTable + ")",
                                    }}
                                >
                                    <tr>
                                        <td>Sáng</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Chiều</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Tối</td>
                                        <td></td>
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
                        <div className={cx("table-note")}>
                            <ul>
                                <li>
                                    <span></span>
                                    <label>Lịch học</label>
                                </li>
                                <li>
                                    <span></span>
                                    Lịch học trực tuyến
                                </li>
                                <li>
                                    <span></span>
                                    Lịch thi
                                </li>
                                <li>
                                    <span></span>
                                    Lịch tạm ngưng
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MainWeeklyCalendar;
