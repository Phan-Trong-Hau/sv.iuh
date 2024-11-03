import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainNewEvents from "../Components/MainNewEvents";

const NewEvents = () => {
    return (
        <>
            <Helmet>
                <title>Tin tức - Thông báo - Biếu mẫu</title>
                <meta
                    name="description"
                    content="Các tin tức, thông báo của nhà trường muốn phổ cập tới sinh viên"
                />
                <link rel="canonical" href="/sinh-vien-tin-tuc-thong-bao" />
            </Helmet>
            <Header checkSidebar={true} />
            <MainNewEvents />
        </>
    );
};

export default NewEvents;
