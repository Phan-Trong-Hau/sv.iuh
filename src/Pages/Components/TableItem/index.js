import { Link } from 'react-router-dom';

const TableItem = (props) => {
    return (
        <>
            <tr className={props.bg}>
                <td className="w80">
                    <div>
                        <Link to='/'>{props.class}</Link>
                    </div>
                    <div className="name">{props.name}</div>
                </td>
                <td className="w20">
                    <div className="text-center">{props.number}</div>
                </td>
            </tr>
        </>
    );
};

export default TableItem;