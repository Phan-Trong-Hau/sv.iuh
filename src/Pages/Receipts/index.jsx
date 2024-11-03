import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainReceipts from "../Components/MainReceipts";

const Receipts = () => {
    return (
        <>
            <Helmet>
                <title>Phiếu thu</title>
                <meta
                    name="description"
                    content="Phiếu thu bao gồm thông tin các khoản tiền mà sinh viên đã nộp"
                />
                <link rel="canonical" href="/phieu-thu" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainReceipts />
        </>
    );
};

export default Receipts;
