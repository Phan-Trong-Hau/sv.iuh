import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainGeneralReceipts from "../Components/MainGeneralReceipts";

const GeneralReceipts = () => {
    return (
        <>
            <Helmet>
                <title>Phiếu thu tổng hợp</title>
                <meta
                    name="description"
                    content="Các biểu mẫu, chứng từ kế toán hợp pháp được sử dụng để ghi lại những giao dịch thu với sinh viên đã hoàn thành việc thanh toán"
                />
                <link rel="canonical" href="/phieu-thu-tong-hop" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainGeneralReceipts />
        </>
    );
};

export default GeneralReceipts;
