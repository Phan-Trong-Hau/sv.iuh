import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainUpdateBank from "../Components/MainUpdateBank";

const UpdateBank = () => {
    return (
        <>
            <Helmet>
                <title>Cập nhật thông tin ngân hàng</title>
                <meta
                    name="description"
                    content="Nơi cập nhật lại thông tin về tài khoản ngần hàng cho sinh viên"
                />
                <link rel="canonical" href="/cap-nhat-thong-tin-ngan-hang" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainUpdateBank />
        </>
    );
};

export default UpdateBank;
