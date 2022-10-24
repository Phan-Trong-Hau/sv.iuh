import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainWeeklyProgress from "../Components/MainWeeklyProgress";

const WeeklyProgress = () => {
    return (
        <>
            <Helmet>
                <title>Lịch học, lịch thi theo tiến độ</title>
                <meta
                    name="description"
                    content="Thông báo lịch học lịch thi theo tiến độ cho sinh viên IUH"
                />
                <link rel="canonical" href="/lich-theo-tien-do" />
            </Helmet>
            <Header checkSidebar={true} />
            <MainWeeklyProgress />
        </>
    );
};

export default WeeklyProgress;
