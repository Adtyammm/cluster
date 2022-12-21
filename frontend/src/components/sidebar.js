import React from "react";
import { Link, } from "react-router-dom";
import "../style/sidebar.css";

function Sidebar (){
    return(
<div className="body">
            <div className="container">
            <div className="nav">
                <div className="cmh">
                    <h1>Cluster Hahahihi</h1>
                </div>
                <div className="logo">
                    <img src="./Vector1.png" alt=""/>
                </div>
                
                <div  className="prof">
                    <img src="./Ellipse.png" alt=""/>
                </div>
                <div className="us">
                    <h2> Aditya </h2>
                </div>
                </div>
            </div>
            <ul>
            <li className="boa">
            <Link to={"/Dashboard"} className="type">Dashboard</Link>
            </li>
            <li className="tr">
            <Link to={"/transaksi"} className="type">Transaksi</Link>
            </li>
            <li className="ph">
            <Link to={"/penghuni"} className="type">Penghuni</Link>
            </li>
            <li className="ps">
            <a href="https://app.crisp.chat/website/98cc1309-418c-489a-8647-47f3ac637891/inbox/" class="type">Pesan</a>
            </li>
            <li className="ber">
            <Link to={"/Berita"} className="type">Berita</Link>
            </li>
            </ul>
            </div>
    );
}

export default Sidebar;