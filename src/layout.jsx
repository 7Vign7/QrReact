import { Routes, Route} from "react-router-dom";
import {Navigated} from "./components/navigated/Navigated";
import {QrCodeGenerator} from "./components/generate/QrCodeGenerator";
import {QrCodeScanner} from "./components/scan/QrCodeScanner";
import {GenerateHistory} from "./components/generate/GeneratorHistory";
import {ScanHistory} from "./components/scan/ScanHistory";

export const Layout = () =>{
    return (
        <div>
            <Navigated />
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator/>} />
                <Route path="/scan" element={<QrCodeScanner/>} />
                <Route path="/generateHistory" element={<GenerateHistory/>} />
                <Route path="/scanHistory" element={<ScanHistory/>} />
            </Routes>
        </div>
    );
};