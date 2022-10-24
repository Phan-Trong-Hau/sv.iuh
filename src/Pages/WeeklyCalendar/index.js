import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainWeeklyCalendar from "../Components/MainWeeklyCalendar";

const WeekCalendar = () => {


    return (
        <>
            <Helmet>
                <title>Lịch học, lịch thi theo tuần</title>
                <meta
                    name="description"
                    content="Sinh viên theo dõi và cập nhật lịch học lịch thì hằng tuần, hằng ngày"
                />
                <link rel="canonical" href="/lich-theo-tuan" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainWeeklyCalendar />
        </>
    );
};

export default WeekCalendar;
