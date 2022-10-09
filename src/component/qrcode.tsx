// import react
import { Fragment , FunctionComponent, useState} from "react";

// import style
import  * as style from '../style/style';

// import lib
import QRCode from "react-qr-code";
import Swal from "sweetalert2";

const QR_Code:FunctionComponent = () => {
    const [state , setState] = useState('');
    const create_qrcode = (event:(any|undefined|null))=> setState(event.target.value);
    
    // Ref: https://github.com/rosskhanas/react-qr-code
    const downloading = (event:(any|undefined|null)):void => { 
        event.preventDefault();
        const svg:any|null = document.querySelector('.QRCode') ;
        const svgData:string = new XMLSerializer().serializeToString(svg);
        const canvas:any = document.createElement("canvas");
        let ctx:CanvasDrawImage = canvas.getContext("2d");
        const img:HTMLImageElement = new Image();
        console.log(typeof img);
        img.onload = ():void => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const pngFile:CanvasDrawImage = canvas.toDataURL("image/png");
          const downloadLink:any = document.createElement("a");
          downloadLink.download = "QRCode";
          downloadLink.href = `${pngFile}`;
          downloadLink.click();
        }
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`; 
      }

    const copy = (event:(any|undefined|null)) => {
        event.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'คัดลอกเรียบร้อย!',
            showConfirmButton: false,
            timer: 1300
          });
        return navigator.clipboard.writeText(state);
    }

    const cancel = () => setState((copy:string) => {
        return copy = ''.toString();
    })
    
    return (
            <Fragment>
                <div style={style.fontthai} >
                    <section style={style.section_qrcode}>
                        <span  style={style.picture_frame}>
                            <QRCode value={state} size={230} className="QRCode" id="QRCode" />
                        </span>
                    </section>  
                    <section style={style.section_input}>
                        <form className=" text-center form">
                            <h4>โปรดพิมพ์ข้อความลงไป</h4>
                            <input type="text" onChange={create_qrcode} style={style.taginput} placeholder="ใส่ข้อความหรือใส่ link ลงไป" /><br />
                            <div className=" btn-group" style={style.vent}>
                                <button className="btn btn-primary me-1" onClick={copy}>Copy</button>
                                <button className="btn btn-success me-1 ms-1" onClick={downloading} >Download</button>
                                <button className="btn btn-danger ms-1" onClick={cancel} type="reset" >Cancel</button>
                            </div>
                        </form>
                    </section>
                </div>
            </Fragment>
            
        )
    }

export default QR_Code;
