import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainOnlinePayment from "../Components/MainOnlinePayment";

const OnlinePayment = () => {
    return (
        <>
            <Helmet>
                <title>Thanh toán trực tuyến</title>
                <meta
                    name="description"
                    content="Nơi thanh toán trực tuyến cho sinh viên IUH"
                />
                <link rel="canonical" href="/thanh-toan-truc-tuyen" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainOnlinePayment />
        </>
    );
};

export default OnlinePayment;
