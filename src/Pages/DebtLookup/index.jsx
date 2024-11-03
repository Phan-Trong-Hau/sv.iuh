import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainDebtLookup from "../Components/MainDebtLookup";

const DebtLookup = () => {

    return (
        <>
            <Helmet>
                <title>Tra cứu công nợ</title>
                <meta
                    name="description"
                    content="Theo dõi các khoản nợ cần phải trả "
                />
                <link rel="canonical" href="/tra-cuu-cong-no" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainDebtLookup />
        </>
    );
};

export default DebtLookup;
