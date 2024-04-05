import React from 'react'
import { Link } from "react-router-dom";


export default function Header(props) {


    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">🏠</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link" to={"/TextUtil"}>Text_Util</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/About"}>About</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">🔍</button>
                                </form>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : "light"} mx-2 my-2`}>
                            <input className="form-check-input " type="checkbox" onClick={props.EnableMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">🌙DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
