import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainOutcomes from "../Components/MainOutcomes";

const Outcomes = () => {
    return (
        <>
            <Helmet>
                <title>Kết quả học tập</title>
                <meta
                    name="description"
                    content="Kết quả học tập phản ánh những sự hiểu biết hoặc khả năng thực hành của sinh viên sau một quá trình học tập"
                />
                <link rel="canonical" href="/ket-qua-hoc-tap" />
            </Helmet>
            <Header checkSidebar={true} />
            <MainOutcomes />
        </>
    );
};

export default Outcomes;
