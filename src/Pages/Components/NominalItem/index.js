import classNames from "classnames/bind";

import styles from "../MainNominalCalendar/MainNominalCalendar.module.scss";

const cx = classNames.bind(styles);

const NominalItem = () => {
    return (
        <>
            <tr>
                <td>4203003259</td>
                <td>
                    Toán cao cấp 1
                    <br />
                    <span>(Lý thuyết: 30)</span>
                    <br />
                    <span className={cx("text-danger")}>
                        ("Môn học đã kết thúc")
                    </span>
                </td>
                <td>
                    <span>2 - 5</span>
                </td>
                <td>Phạm Hoàng Ngọc Thảo</td>
                <td>TRỰC TUYẾN-MSTEAMS03</td>
                <td>
                    <span>Từ: 04/10/2021</span>
                    <br />
                    <span>Đến: 04/10/2021</span>
                </td>
            </tr>
        </>
    );
};

export default NominalItem;
