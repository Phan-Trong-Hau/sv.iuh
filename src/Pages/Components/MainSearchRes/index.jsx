import classNames from "classnames/bind";
import styles from "../MainReminder/MainReminder.module.scss";
import SidebarMove from "../../../components/SidebarMove";
const cx = classNames.bind(styles);
const MainSearchRes = () => {
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
                        <h2>Kết quả tìm kiếm</h2>
                     </div>
                  </div>

                  <div className={cx("reminder-view")}>
                     <div>Không tìm thấy thông tin hiển thị</div>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
};

export default MainSearchRes;
