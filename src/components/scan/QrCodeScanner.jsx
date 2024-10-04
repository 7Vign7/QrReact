import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import {scanData} from '../../constants'

export const QrCodeScanner = () => {
    const [scanned,setScanned] = useState(null);

    const scanHandler = (result) =>{
        setScanned(result[0].rawValue)
        const prevData = JSON.parse(localStorage.getItem(scanData) || "[]");

        localStorage.setItem(
            scanData,
            JSON.stringify( [...prevData,result[0].rawValue])
        );
    }

    const settings = {
      finder: false,
    };

    return (
        <div className="container">
            <Scanner
                onScan={scanHandler}
                components={settings}
                styles={{
                    container: {width: "30%", height: "30%"}
                }}
            />
            <a href={scanned}>{scanned}</a>

        </div>
    );
};