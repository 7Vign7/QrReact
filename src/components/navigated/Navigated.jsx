import { Link } from "react-router-dom";
import style from "./navigated.module.css";

export const Navigated = () => {
    return (
        <nav className={style.nav}>
            <Link to="/generate">Генерировать Qr код</Link>
            <Link to="/scan">Сканировать QR код</Link>
            <Link to="/generateHistory">История генерирования</Link>
            <Link to="/scanHistory">История сканирования</Link>
        </nav>
    )
}