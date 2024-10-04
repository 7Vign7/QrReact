import {scanData} from "../../constants";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(scanData) || "[]");
  return (
      <div className='container'>
            {data.map((text) => (
                <a key={text} href={text}>{text}</a>
            ))}
      </div>
  );
};