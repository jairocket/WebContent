/* eslint-disable react/react-in-jsx-scope */
import React from "react";

export function ReportBlock(report) {

    const parseDate = (date) => {
        const dateInMiliSeconds = new Date(date * 1000);
        return `${dateInMiliSeconds.getDate()}/${dateInMiliSeconds.getMonth() + 1}/${dateInMiliSeconds.getFullYear()}`
    };

    return (
        <div className="report">
            <div className="report-data">
                <div>Status: {report.data.status}</div>
                <div>Postado em: {parseDate(report.data.postedIn)}</div>
                <div>Descrição do imóvel: {report.data.description}</div>
                <div>Bairro: {report.data.property.address.neighborhood}</div>
                <div>Vendido em: {report.data.soldIn ? parseDate.data.soldIn : "n/a"}</div>
                
            </div>

        </div>
    );
}