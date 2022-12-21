import React, {useState,useEffect}  from "react";
import axios from "axios";
import "../style/tpeng.css";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
function Tambahpenghuni(){
    const [nama, setnama] = useState();
    const [telp, settelp] = useState();
    const [rumah, setrumah] = useState();
    const [username, setusername] = useState();
    const [password, setpassword] = useState();
    async function addPenghuni(){
        const tambah={
            nama,
            telp,
            rumah,
            username,
            password
        };
        console.log(tambah);
        try {
            const result = await (await axios.post("/api/penghuni/tambahpenghuni", tambah)).data;
            window.location.href = "/penghuni";
            console.log(result)
          } catch (error) {
            console.log(error);
          }
    }
    
        return(
            <div classNameName="container">
               <div className="sidebar">
                <Sidebar/>
            </div>
                <div classNameName="con">
                    <form>
                    <h1 className="sh">Tambah Penghuni</h1>
                    <p className="nm">Nama</p>
                    <input type="text" className="inpn" name="nama_penghuni" value={nama} onChange={(e)=>{setnama(e.target.value);}}></input>
                    <p className="nt">No Telepon</p>
                    <input type="text" className="inpt" name="no_telp" value={telp} onChange={(e)=>{settelp(e.target.value);}}></input>
                    <p className="nr">No Rumah</p>
                    <input type="text" className="inpr" name="no_rumah" value={rumah} onChange={(e)=>{setrumah(e.target.value);}}></input>
                    <p className="usr">Username</p>
                    <input type="text" className="inps" name="username" value={username} onChange={(e)=>{setusername(e.target.value);}}></input>
                    <p className="pw">Password</p>
                    <input type="text" className="inpw" name="password" value={password} onChange={(e)=>{setpassword(e.target.value);}}></input>
                    <button className="same" onClick={addPenghuni}>
                 Tambah Penghuni
                </button>
                    </form>
                </div>
            </div>
        )
    }
export default Tambahpenghuni;