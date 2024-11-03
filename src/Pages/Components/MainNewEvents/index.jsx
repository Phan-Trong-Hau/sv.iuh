import classNames from "classnames/bind";

import styles from "./MainNewEvents.module.scss";
import news from "../../../assets/news.png";
import arrowRight from "../../../assets/arrow.png";

const cx = classNames.bind(styles);

const MainNewEvents = () => {
   return (
      <>
         <main className={cx("new-event")}>
            <div className={cx("container ", "event-container")}>
               <div className={cx("event-box")} style={{ height: "370px" }}>
                  <div className={cx("event-title")}>
                     <h3>THÔNG TIN GIỜ HỌC </h3>
                  </div>
                  <div className={cx("event-content")}>
                     <div className={cx("event-item")}>
                        <a
                           href="https://sv.iuh.edu.vn/sinh-vien/tin-tuc/thong-tin-gio-hoc-105421.html"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img src={news} alt="tin-tuc-su-kien-iuh" />
                           <div className={cx("item-title")}>
                              THÔNG TIN GIỜ HỌC
                           </div>
                        </a>
                        <span>22/10/2020</span>
                     </div>
                  </div>
                  <div className={cx("event-footer")}>
                     <a
                        href="https://sv.iuh.edu.vn/sinh-vien/dm-tin-tuc/thong-tin-gio-hoc.html"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Xem thêm
                        <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
               </div>
               <div className={cx("event-box")}>
                  <div className={cx("event-title")}>
                     <h3>TIN TỨC - SỰ KIỆN</h3>
                  </div>
                  <div className={cx("event-content")}>
                     <div className={cx("event-item")}>
                        <a
                           href="https://sv.iuh.edu.vn/sinh-vien/tin-tuc/bang-tong-hop-dang-ky-giang-day-truc-tuyen-tu-ngay-06-04-202.html"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img src={news} alt="tin-tuc-su-kien-iuh" />
                           <div className={cx("item-title")}>
                              BẢNG TỔNG HỢP ĐĂNG KÝ GIẢNG DẠY TRỰC TUYẾN (từ
                              ngày 06/04/2020)
                           </div>
                        </a>
                        <span>01/04/2020</span>
                     </div>
                     <div className={cx("event-item")}>
                        <a
                           href="https://sv.iuh.edu.vn/sinh-vien/tin-tuc/thong-bao-v-v-tiep-tuc-nghi-hoc-doi-voi-hoc-vien-va-sinh-vien-de-phong-chong-dich-benh-viem-duong-ho-hap-cap-do-chung-moi-cua-virus-corona-gay-ra.html"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img src={news} alt="tin-tuc-su-kien-iuh" />
                           <div className={cx("item-title")}>
                              Thông báo V/v tiếp tục nghỉ học đối với học viên
                              và sinh viên để phòng, chống dịch bệnh viêm đường
                              hô hấp cấp do chủng mới của virus Corona gây ra
                           </div>
                        </a>
                        <span>13/02/2020</span>
                     </div>
                  </div>
                  <ul className={cx("blog-list")}>
                     <li>
                        <img src={arrowRight} alt="arrow-right" />
                        <a
                           href="https://sv.iuh.edu.vn/sinh-vien/tin-tuc/hoi-thao-quoc-te-tu-chu-tai-chinh-trong-truong-dai-hoc-kinh-nghiem-quoc-te-va-ung-dung-vao-viet-nam.html"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Hội thảo quốc tế: Tự chủ tài chính trong trường Đại
                           học: Kinh nghiệm quốc tế và ứng dụng vào Việt Nam
                        </a>
                     </li>
                     <li>
                        <img src={arrowRight} alt="arrow-right" />
                        <a
                           href="https://sv.iuh.edu.vn/sinh-vien/tin-tuc/iuh-don-nhan-chung-nhan-04-chuong-trinh-dao-tao-dat-chuan-aun-qa-va-gap-mat-truyen-thong-nhan-ngay-nha-giao-viet-nam-20-11.html"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           IUH đón nhận chứng nhận 04 chương trình đào tạo đạt
                           chuẩn AUN-QA và Gặp mặt truyền thống nhân ngày Nhà
                           giáo Việt Nam 20/11
                        </a>
                     </li>
                  </ul>
                  <div className={cx("event-footer")}>
                     <a
                        href="https://sv.iuh.edu.vn/sinh-vien/dm-tin-tuc/tin-tuc-su-kien.html"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Xem thêm
                        <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
               </div>

               <div className={cx("note")}>
                  <p>
                     <span>Lưu ý: </span>
                     Trang này sẽ dẫn bạn tới các bài viết tin tức chính thức
                     của trường đại học IUH.
                  </p>
               </div>
            </div>
         </main>
      </>
   );
};

export default MainNewEvents;
