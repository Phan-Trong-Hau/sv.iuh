import classNames from "classnames/bind";

import styles from "../MainCourseList/MainCourseList.module.scss";

const cx = classNames.bind(styles);

const CourseItem = (props) => {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const fnrandom = () => {
        const array = [];
        const n = random(3, 9);
        for (let i = 0; i < n; i++) array[i] = i + 1;

        return array;
    };

    const list = fnrandom();

    const ListItems = list.map((item) => {
        return (
            <tr className={cx(props.active)} key={item}>
                <td>{item}</td>
                <td>Nhập môn Tin học</td>
                <td>4203002009</td>
                <td></td>
                <td>2</td>
                <td>30</td>
                <td>0</td>
                <td>0</td>
                <td></td>
                <td>
                    {props.check && (
                        <i className="fa-solid fa-circle-check"></i>
                    )}
                </td>
            </tr>
        );
    });

    return (
        <>
            <tr className={cx("tr-row-1", props.active)}>
                <td colSpan="4">Học phần bắt buộc</td>
                <td>{random(4, 9)}</td>
                <td colSpan="5"></td>
            </tr>
            {ListItems}
            <tr className={cx("tr-row-1", props.active)}>
                <td colSpan="4">Học phần tự chọn</td>
                <td>{random(7, 16)}</td>
                <td colSpan="5"></td>
            </tr>
            {ListItems}
            <tr>
                <td
                    style={{ height: "4px", background: "#fff" }}
                    colSpan="10"
                ></td>
            </tr>
        </>
    );
};

export default CourseItem;
