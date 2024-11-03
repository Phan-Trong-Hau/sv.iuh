const listPoints = [
    [
        "6,00",
        "",
        "8,00",
        "8,00",
        "5,00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "7,00",
        "6,70",
        "2,50",
        "C+",
        "Trung Bình",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "7,50",
        "7,50",
        "3,00",
        "B",
        "Khá",
        "",
    ],
    [
        "5,50",
        "",
        "9,00",
        "8,00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "8,50",
        "",
        "",
        "",
        "",
        "",
        "9,00",
        "8,20",
        "3,50",
        "B+",
        "Khá",
        "",
    ],
    [
        "8,50",
        "",
        "8,50",
        "8,00",
        "9,00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "7,50",
        "8,00",
        "3,50",
        "B+",
        "Khá",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "9,00",
        "9,00",
        "9,00",
        "10,00",
        "9,00",
        "",
        "9,00",
        "9,20",
        "4,00",
        "A+",
        "Xuất sắc",
        "",
    ],
    [
        "6,00",
        "",
        "8,50",
        "8,00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "7,00",
        "7,00",
        "3,00",
        "B",
        "Khá",
        "",
    ],
    [
        "8,50",
        "",
        "8,00",
        "7,00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "7,50",
        "",
        "",
        "",
        "",
        "",
        "8,50",
        "7,90",
        "3,00",
        "B",
        "Khá",
        "",
    ],
];

const RowData = (props) => {
    const listPoint = listPoints.find((e, index) => index === props.index - 1) || [];
    const listItem = listPoint.map((item, index) => <td key={index}>{item}</td>);

    return (
        <>
            <tr role="row">
                <td>
                    <div>{props.index}</div>
                </td>
                <td>
                    <div>{props.idClass}</div>
                </td>
                <td>
                    <div>{props.title}</div>
                </td>
                <td>
                    <div>{props.number}</div>
                </td>
                {listItem}
            </tr>
        </>
    );
};

export default RowData;