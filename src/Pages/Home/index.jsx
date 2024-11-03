import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainHome from "../Components/MainHome";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Cổng thông tin sinh viên IUH</title>
                <meta
                    name="description"
                    content="Cổng thông tin sinh viên là nơi để các bạn có thể xem lịch học hàng tuần của mình, theo dõi kết quả học tập và nhiều thông tin khác nữa"
                />
            </Helmet>
            <Header checkSidebar={true} />
            <MainHome />
        </>
    );
};

export default Home;
