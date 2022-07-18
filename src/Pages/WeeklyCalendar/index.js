import { useEffect } from "react";
import Header from "../../components/Header";
import MainWeeklyCalendar from "../Components/MainWeeklyCalendar";

const WeekCalendar = () => {
    useEffect(() => {
       document.title = "Lịch học, lịch thi theo tuần";
    }, []);

    return (
        <>
            <Header checkSidebar={false} />
            <MainWeeklyCalendar />
        </>
    );
};

export default WeekCalendar;