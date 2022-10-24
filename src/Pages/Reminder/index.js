import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainReminder from "../Components/MainReminder";

const Reminder = () => {

    return (
        <>
            <Helmet>
                <title>Ghi chú nhắc nhở</title>
                <meta
                    name="description"
                    content="Nhà trường sẽ thông báo, nhắc nhở cho sinh viên về các vấn đề vi phạm trong quá trình học tập trong nhà trường"
                />
                <link rel="canonical" href="/ghi-chu-nhac-nho" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainReminder />
        </>
    );
};

export default Reminder;
