import { useEffect } from 'react';
import Header from '../../components/Header';
import MainUpdateBank from '../Components/MainUpdateBank';

const UpdateBank = () => {
    useEffect(() => {
       document.title = "Cập nhật thông tin ngân hàng";
    }, []);
    return (
        <>
            <Header checkSidebar={false} />
            <MainUpdateBank />
        </>
    );
};

export default UpdateBank;