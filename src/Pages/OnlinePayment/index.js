import { useEffect } from 'react';
import Header from '../../components/Header'
import MainOnlinePayment from '../Components/MainOnlinePayment'


const OnlinePayment = () => {
    useEffect(() => {
       document.title = "Thanh toán trực tuyến";
    }, []);
    return (
        <>
            <Header checkSidebar={false}/>
            <MainOnlinePayment />
        </>
    )
}

export default OnlinePayment 