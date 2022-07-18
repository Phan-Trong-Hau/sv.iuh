import classNames from "classnames/bind";

import styles from "../MainWeeklyProgress/MainWeeklyProgress.module.scss";

const cx = classNames.bind(styles);

const ListSchedule = (props) => {

    return (
        <>
            <tr className={cx(props.background)}>
                <td>{props.index}</td>
                <td>4203003354</td>
                <td className={cx("text-left")}>
                    Giáo dục quốc phòng và an ninh 1
                </td>
                <td>4</td>
                <td>2</td>
                <td>1 - 5</td>
                <td></td>
                <td>TRỰC TUYẾN ZOOM_02</td>
                <td></td>
                <td></td>
                <td>29/11/2021</td>
                <td>29/11/2021</td>
                <td>TG12345678</td>
                <td className={cx("text-left")}>DH. ĐỖ HỮU DỰ</td>
            </tr>
        </>
    );
}

export default ListSchedule;