import classNames from "classnames/bind";
import RowData from "../RowData";

import styles from "./MainLearnRes.module.scss";

const cx = classNames.bind(styles);

const dataClass = [
    {
        id: "420300324202",
        name: "Giáo dục quốc phòng và An ninh 1",
        number: 4,
    },
    {
        id: "420300330702",
        name: "Giáo dục thể chất 1",
        number: 2,
    },
    {
        id: "420300325904",
        name: "Toán cao cấp 1",
        number: 2,
    },
    {
        id: "420301416404",
        name: "Triết học Mác - Lênin",
        number: 3,
    },
    {
        id: "420300384801",
        name: "Nhập môn Lập trình",
        number: 2,
    },
    {
        id: "420300200901",
        name: "Nhập môn Tin học",
        number: 2,
    },
    {
        id: "420300319203",
        name: "Kỹ năng làm việc nhóm",
        number: 2,
    },
];

const MainOutcomes = () => {
    const listsDataClass = dataClass.map((item, index) => {
        return (
            
                <RowData
                    key={index}
                    index={index + 1}
                    title={item.name}
                    idClass={item.id}
                    number={item.number}
                />
            
        );
    });

    return (
        <>
            <main className={cx("outcomes")}>
                <div className={cx("outcomes-container")}>
                    <div className={cx("outcomes-title")}>
                        <div className={cx("caption ")}>
                            <h2>Kết quả học tập</h2>
                        </div>
                    </div>
                    <div className={cx("outcomes-body")}>
                        <div className={cx("table-wrapper")}>
                            <table
                                id="checkpoint"
                                className={cx("outcomes-table")}
                            >
                                <thead>
                                    <tr>
                                        <th rowSpan="3" lang="kqht-stt">
                                            <div>STT</div>
                                        </th>
                                        <th rowSpan="3" lang="kqht-malhp">
                                            <div>Mã lớp học phần</div>
                                        </th>
                                        <th rowSpan="3" lang="kqht-tenlhp">
                                            <div>Tên môn học/học phần</div>
                                        </th>
                                        <th rowSpan="3" lang="kqht-stc">
                                            <div>Số tín chỉ</div>
                                        </th>
                                        <th colSpan="2" lang="Row_1_2">
                                            Giữa kỳ
                                        </th>
                                        <th colSpan="9" lang="Row_1_3">
                                            Thường xuyên
                                        </th>
                                        <th colSpan="5" lang="Row_1_5">
                                            Thực hành
                                        </th>
                                        <th rowSpan="3" lang="DiemTBQuaTrinh">
                                            TBQT
                                        </th>
                                        <th rowSpan="3" lang="Row_1_8">
                                            Cuối kỳ
                                        </th>
                                        <th rowSpan="3" lang="Row_1_10">
                                            Điểm tổng kết
                                        </th>
                                        <th rowSpan="3" lang="DiemTinChi">
                                            Thang điểm 4
                                        </th>
                                        <th rowSpan="3" lang="DiemChu">
                                            Điểm chữ
                                        </th>
                                        <th rowSpan="3" lang="XepLoai">
                                            Xếp loại
                                        </th>
                                        <th rowSpan="3" lang="GhiChu">
                                            Ghi chú
                                        </th>
                                    </tr>
                                    <tr>
                                        <th rowSpan="2" lang="DiemChuyenCan1">
                                            1
                                        </th>
                                        <th rowSpan="2" lang="DiemChuyenCanE">
                                            Chuyên cần
                                        </th>
                                        <th colSpan="9" lang="Row_2_3_2">
                                            LT Hệ số 1
                                        </th>
                                        <th rowSpan="2" lang="DiemThucHanh1">
                                            1
                                        </th>
                                        <th rowSpan="2" lang="DiemThucHanh2">
                                            2
                                        </th>
                                        <th rowSpan="2" lang="DiemThucHanh3">
                                            3
                                        </th>
                                        <th rowSpan="2" lang="DiemThucHanh4">
                                            4
                                        </th>
                                        <th rowSpan="2" lang="DiemThucHanh5">
                                            5
                                        </th>
                                    </tr>
                                    <tr>
                                        <th lang="DiemHeSo11">1</th>
                                        <th lang="DiemHeSo12">2</th>
                                        <th lang="DiemHeSo13">3</th>
                                        <th lang="DiemHeSo14">4</th>
                                        <th lang="DiemHeSo15">5</th>
                                        <th lang="DiemThuongKy6">6</th>
                                        <th lang="DiemThuongKy7">7</th>
                                        <th lang="DiemThuongKy8">8</th>
                                        <th lang="DiemThuongKy9">9</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row">
                                        <td
                                            colSpan="27"
                                            className={cx("row-head")}
                                        >
                                            HK1 (2021-2022)
                                        </td>
                                    </tr>
                                    {listsDataClass}
                                    <tr className={cx('text-left')}>
                                        <td colSpan="2">
                                            Điểm trung bình học kỳ hệ 10:
                                            <span> 8,10</span>
                                        </td>
                                        <td colSpan="2">
                                            Điểm trung bình học kỳ hệ 4:
                                            <span> 3,41</span>
                                        </td>
                                        <td colSpan="27"></td>
                                    </tr>
                                    <tr className={cx('text-left')}>
                                        <td colSpan="2">
                                            Điểm trung bình tích lũy:
                                            <span> 8,10</span>
                                        </td>
                                        <td colSpan="2">
                                            Điểm trung bình tích lũy (hệ 4):
                                            <span> 3,41</span>
                                        </td>
                                        <td colSpan="27"></td>
                                    </tr>
                                    <tr className={cx('text-left')}>
                                        <td colSpan="2">
                                            Tổng số tín chỉ đã đăng ký:
                                            <span> 11</span>
                                        </td>
                                        <td colSpan="2">
                                            Tổng số tín chỉ tích lũy:
                                            <span> 11</span>
                                        </td>
                                        <td colSpan="27"></td>
                                    </tr>
                                    <tr className={cx('text-left')}>
                                        <td colSpan="2">
                                            Tổng số tín chỉ đạt:
                                            <span> 11</span>
                                        </td>
                                        <td colSpan="2">
                                            Tổng số tín chỉ nợ tính đến hiện
                                            tại:
                                            <span> 0</span>
                                        </td>
                                        <td colSpan="27"></td>
                                    </tr>
                                    <tr className={cx('text-left')}>
                                        <td colSpan="2">
                                            Xếp loại học lực tích lũy:
                                            <span> Giỏi</span>
                                        </td>
                                        <td colSpan="2">
                                            Xếp loại học lực học kỳ:
                                            <span> Giỏi</span>
                                        </td>
                                        <td colSpan="27"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MainOutcomes;
