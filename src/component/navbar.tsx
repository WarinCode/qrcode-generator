// import react
import { Fragment } from "react";

// import lib
import Swal from 'sweetalert2';

// import img
import logo from '../img/react.svg';

// import style
import { fontnavbar , distance2 , navbar_brand } from '../style/style';

const Navbar = () => {
  function react(){
    Swal.fire({
      title: 'React-project',
      html: 'โปรเจคนี้ทำเกี่ยวกับการสร้าง QR-CODE<br/>!ไม่รองรับรูปแบบภาษาไทย',
      imageUrl: logo,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }
    return (
      <Fragment>
          <nav className="navbar navbar-expand navbar-dark bg-dark" style={fontnavbar} onClick={react} >
              <div className="container">
                <img src= {logo} alt=""  width={'35px'} height= {'35px'} onClick={react} style={{padding:'3px', marginLeft:'5px'}}  />
                <div style={distance2}></div>
                  <h3 className="navbar-brand mt-2" style={navbar_brand} onClick={react}>React-project</h3>
                      <div className="collapse navbar-collapse" id="navbarNavDropdown"></div>
              </div>
          </nav>
      </Fragment> 
    )
}

export default Navbar ;
