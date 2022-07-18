import TableItem from "../TableItem";

const data = [
    [
        {
            class: "420300324202",
            name: "Giáo dục quốc phòng và An ninh 1",
            number: 4,
        },
        {
            class: "420300330702",
            name: "Giáo dục thể chất 1",
            number: 2,
        },
        {
            class: "420300325904",
            name: "Toán cao cấp 1",
            number: 2,
        },
        {
            class: "420301416404",
            name: "Triết học Mác - Lênin",
            number: 3,
        },
        {
            class: "420300384801",
            name: "Nhập môn Lập trình",
            number: 2,
        },
        {
            class: "420300200901",
            name: "Nhập môn Tin học",
            number: 2,
        },
        {
            class: "420300319203",
            name: "Kỹ năng làm việc nhóm",
            number: 2,
        },
    ],
    [
        {
            class: "420300335401",
            name: "Giáo dục quốc phòng và an ninh 2",
            number: 4,
        },
        {
            class: "420300330601",
            name: "Giáo dục thể chất 2",
            number: 2,
        },
        {
            class: "420300213701",
            name: "Hệ thống Máy tính",
            number: 4,
        },
        {
            class: "420301416501",
            name: "Kinh tế chính trị Mác - Lênin",
            number: 2,
        },
        {
            class: "420300094101",
            name: "Kỹ thuật lập trình",
            number: 3,
        },
        {
            class: "420300332001",
            name: "Phương pháp tính",
            number: 3,
        },
        {
            class: "420300328808",
            name: "Toán cao cấp 2",
            number: 2,
        },
        {
            class: "420301525319",
            name: "Tiếng Anh 1",
            number: 3,
        },
    ],
];

const TableList = ({ selectedModeTable }) => {
    selectedModeTable = +selectedModeTable;
    const dataList = data.map((row, index) => {
        if (index === selectedModeTable) {
            return row.map((item, index1) => {
                if (index1 % 2) {
                    return (
                        <TableItem
                            key={index1}
                            number={item.number}
                            class={item.class}
                            name={item.name}
                            bg="light before"
                        />
                    );
                } else {
                    return (
                        <TableItem
                            key={index1}
                            number={item.number}
                            class={item.class}
                            name={item.name}
                            bg="dark before"
                        />
                    );
                }
            });
        }
        return true;
    });

    if (selectedModeTable < data.length)
        return (
            <>
                <div className="table__heading">
                    <span>Môn học/học phần</span>
                    <span className="text-center">Số tín chỉ</span>
                </div>
                <div className="table__list">
                    <table>
                        <tbody>{dataList}</tbody>
                    </table>
                </div>
            </>
        );
};

export default TableList;
