import React, {useState, useEffect} from "react";
import axios from "axios";
import "../style/tr.css";
import Sidebar from "./sidebar";
import { useNavigate, useParams } from "react-router-dom";

function Transaksi() {
  const [pembayaran, setpembayaran]= useState();
  const [air, setair]= useState();
  const [keamanan, setkeamanan]= useState();
  const [kebersihan, setkebersihan]= useState();
  const [status,setstatus]= useState();
  const {id} = useParams();


  useEffect(() => {
    (async () => {
      try {
        const getPembayaran = await (
          await axios.get("/api/pembayaran/getpembayaran")
        ).data;
        setpembayaran(getPembayaran);
        console.log(getPembayaran);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []); 

  async function approve(){
    try {
        const result = await (await axios.post(`/api/pembayaran/approvebayar/${id}`)).data;
        console.log(result)
      } catch (error) {
        console.log(error);
      }
}

  async function kirimtagihan(){
      const kirim={
          air,
          keamanan,
          kebersihan
      };
      console.log(kirim);

      try {
          const tagihan = await (await axios.post("/api/tagihan/kirimtagihan", kirim)).data;
          console.log(tagihan)
        } catch (error) {
          console.log(error);
        }
  }
  return (
    <div>
      <div className="container">
      <div className="sidebar">
                <Sidebar/>
            </div>
        </div>
      

      {/* copy */}

      <div class="con">
        <div class="tag">
          <h1 class="tags">Tagihan</h1>
          
          <p class="ta">Tagihan air</p>
          <input name="tagihan_air"  type="text" class="inpa" value={air} onChange={(e)=>{setair(e.target.value);}} />
          <p class="tk">Tagihan Keamanan</p>
          <input name="tagihan_keamanan" type="text" class="inptt" value={keamanan} onChange={(e)=>{setkeamanan(e.target.value);}} />
          <p class="tb">Tagihan Kebersihan</p>
          <input name="tagihan_kebersihan" type="text" class="inpk" value={kebersihan} onChange={(e)=>{setkebersihan(e.target.value);}} />
          <button class="krm" onClick={kirimtagihan}>Kirim Tagihan</button>
        </div>
        <div class="stap">
          <h1 class="sp">Status Pembayaran</h1>
          <table className="tabletr">
            <thead>
            <tr class="upst">
              <td class="no">No</td>
              <td class="name">Nama</td>
              <td class="stat">Status</td>
              <td class="ket">Action</td>
            </tr>
            </thead>
            <tbody>
              {pembayaran &&
                pembayaran.map((pembayaran, index)=>{
                return(
                  <tr>
                  <td class="user1">{index+1}</td>
                  <td class="user">{pembayaran.nama}</td>
                  <td class="stast">{pembayaran.status}</td>
                  <td class="user">
                    
                    <img src={`http://localhost:5000/images/${pembayaran.image}`} width="50" height="20"/>
                    <button class="terima" onClick={approve}>Terima</button>
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transaksi;