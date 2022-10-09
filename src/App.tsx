// import react
import React,{ Component, ReactNode , Fragment} from 'react';

// import component(default)
import Navbar from './component/navbar';
import Footer from './component/footer';
import QR_Code from './component/qrcode';

// import lib
import 'react-qr-code'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min.js';

export default class App extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Navbar/>
          <QR_Code/>
        <Footer/>
      </Fragment>
    )
  }
}



