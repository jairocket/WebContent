/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { ReportBlock } from './ReportBlock';

export function Report() {
    const [reports, setReports] = useState([]);

    useEffect(()=> {
        try {
            axios.get('http://localhost:8080/advertisements')
            .then(response => setReports(response.data))
        } catch(error) {
            alert(`Erro ao buscar relatório. Por favor, tente novamente. Erro: ${error.message}`);
        }
        
    }, []);


    if(reports.length === 0) return <div className='loading'><div>Loading...</div></div>

    return (
        <div className='reports'>
            <h2>Anúncios</h2>
            <p>Total de anúncios: {reports.length}</p>
            {reports.map(report => (
                <div key={report.id} >
                        <ReportBlock data={report} />
                    </div>
                )
            )}
        </div>
    )   

}

  
