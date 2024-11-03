import { Link } from "react-router-dom";
import classNames from 'classnames/bind';

import styles from '../Sidebar/Sidebar.module.scss';

const cx = classNames.bind(styles);


const SidebarLinkItem = (props) => {

    return (
        <>
            <li className={cx("sidebar-link__item")}>
                <Link to={props.path}>{props.title}</Link>
            </li>
        </>
    );
};

export default SidebarLinkItem;
