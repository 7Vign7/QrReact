import {generateData} from "../../constants";
import {QRCodeSVG} from "qrcode.react";
import {useState} from 'react';


export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(generateData) || "[]");
    return (
        <div className="container" >
            {data.map((text) => (
                <a key={text} href={text}>
                    {text}
                    <QRCodeSVG value= {text} size="150" fgColor="#e48ae9" bgColor="#1D1C1C" />
                </a>
            ))}
        </div>
    );
}