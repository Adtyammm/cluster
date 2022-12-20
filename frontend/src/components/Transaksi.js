import React from "react";
import "../style/tr.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

function Transaksi() {
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
          <input type="text" class="inpa" />
          <p class="tk">Tagihan Keamanan</p>
          <input type="text" class="inptt" />
          <p class="tb">Tagihan Kebersihan</p>
          <input type="text" class="inpk" />
          <button class="krm">Kirim Tagihan</button>
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
            <tr>
              <td class="user1">1</td>
              <td class="user">Roy Handsome</td>
              <td class="stast">Sudah Bayar</td>
              <td class="user">
                
                <button class="lihat">Lihat</button>
                <button class="terima">Terima</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transaksi;