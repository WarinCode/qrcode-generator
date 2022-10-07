import React, { Fragment } from "react";

// style
import '../style/App.css'
import { fontfooter } from '../style/style'

export default function Footer(){
    return(
        <Fragment>
                {/* Credit: bootstrap5  (source: https://getbootstrap.com/docs/5.0/examples/) */}
                <footer id="footer" className="footer">
                    <div className="container">
                        <footer className="py-3 my-4">
                            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                                <li className="nav-item"><a href="mailto:warinsaipanya471@protonmail.com" className="nav-link px-2 text-dark"><i className="ri-mail-unread-fill"></i></a></li>
                                <li className="nav-item"><a href="https://add-friend-instagram.netlify.app/" className="nav-link px-2 text-dark"><i className="ri-instagram-fill"></i></a></li>
                                <li className="nav-item"><a href="https://add-friend-line.netlify.app/"   className="nav-link px-2 text-dark"><i className="ri-line-fill"></i></a></li>
                                <li className="nav-item"><a href="https://add-friend-github.netlify.app/"  className="nav-link px-2 text-dark"><i className="ri-github-fill"></i></a></li>
                                <li className="nav-item"><a href="https://discord-invite-029wedw.netlify.app/"  className="nav-link px-2 text-dark"><i className="ri-discord-fill"></i></a></li>
                            </ul>
                            <p className="text-center text-dark" style={fontfooter}>&copy; 2022 All Rights Reserved.</p>
                        </footer>
                    </div>
                </footer>

        </Fragment>     
    )
}
 