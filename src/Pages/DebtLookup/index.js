
import { useEffect } from 'react';
import Header from '../../components/Header';
import MainDebtLookup from '../Components/MainDebtLookup';

const DebtLookup = () => {
    useEffect(() => {
       document.title = "Tra cứu công nợ";
    }, []);
    return (
        <>
            <Header checkSidebar={false}/>
            <MainDebtLookup />
        </>
    )
}

export default DebtLookup;