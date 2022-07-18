import { useEffect } from 'react';
import Header from '../../components/Header'
import MainGeneralReceipts from '../Components/MainGeneralReceipts';


const GeneralReceipts = () => {
    useEffect(() => {
       document.title = "Phiếu thu tổng hợp";
    }, []);
    return (
        <>
            <Header checkSidebar={false}/>
            <MainGeneralReceipts />

        </>
    )
}

export default GeneralReceipts;