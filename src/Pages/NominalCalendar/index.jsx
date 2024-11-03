import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainNominalCalendar from "../Components/MainNominalCalendar";

const NominalCalendar = () => {
    return (
        <>
            <Helmet>
                <title>Xem lịch học</title>
                <meta
                    name="description"
                    content="Xem lịch học theo lớp danh nghĩa của sinh viên"
                />
                <link rel="canonical" href="/lich-hoc-lop-danh-nghia" />
            </Helmet>
            <Header checkSidebar={true} />
            <MainNominalCalendar />
        </>
    );
};

export default NominalCalendar;
