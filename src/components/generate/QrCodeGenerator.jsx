import {QRCodeSVG} from 'qrcode.react';
import {useState} from 'react';
import style from './qrCodeGenerator.module.css';
import {generateData} from "../../constants";


export const QrCodeGenerator = () => {
  let [defaultText ,setText] = useState(`hello`);
  let [showQr, setShowQr] =  useState(``);

  const onClickHandler = () => {
    setShowQr(defaultText);
    setText('');
    const prevData = JSON.parse(localStorage.getItem(generateData) || "[]");
    localStorage.setItem(
          generateData,
          JSON.stringify( [...prevData, defaultText])
    );
  };

  const onChangeHandler = () => {
    setText(event.target.value);
    setShowQr('');
  };

  return (
      <div className='container'>
      {showQr !== `` && (
          <QRCodeSVG value= {showQr} size = "500" fgColor="#e48ae9" bgColor="#1D1C1C" />
      )}
      <input
          type="text"
          value={defaultText}
          onChange={onChangeHandler}
      />
      <button type="button" onClick={onClickHandler}>
        Сгенерировать Qr
      </button>

    </div>
  );
};