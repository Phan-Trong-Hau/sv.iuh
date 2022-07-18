import classNames from "classnames/bind";

import SidebarMove from "../../../components/SidebarMove";
import styles from "./MainReminder.module.scss";
import Select from "../../../components/Select";

const cx = classNames.bind(styles);

const MainReminder = () => {
    return (
        <div className={cx("reminder")}>
            <main className={cx("reminder-container", "container ")}>
                <section className={cx("reminder-sidebar")}>
                    <SidebarMove />
                </section>
                <section className={cx("reminder-content")}>
                    <div className={cx("reminder-box")}>
                        <div className={cx("reminder-title")}>
                            <div className={cx("caption ", "bottom")}>
                                <h2>Ghi chú nhắc nhở</h2>

                                <div className={cx("action ")}>
                                    <span>Lọc bản tin</span>

                                    <Select index={1}></Select>
                                </div>
                            </div>
                        </div>

                        <div className={cx("reminder-view")}>
                            <div>
                                Không tìm thấy thông tin nhắc nhở
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MainReminder;
