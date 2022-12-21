import React,{useState,useEffect} from "react";
import axios from "axios";
import "../style/tb.css";
import {Link} from "react-router-dom";
import Sidebar from "./sidebar";

function Tberita() {
  const [judul, setjudul] = useState();
  const [isi, setisi] = useState();
  async function addBerita(){
    const tambah={
        judul,
        isi,
    };
    console.log(tambah);
    try {
        const result = await (await axios.post("/api/berita/tambahberita", tambah)).data;
        window.location.href = "/berita";
        console.log(result)
      } catch (error) {
        console.log(error);
      }
}
  return (
    <div className="body">
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>

      <div class="conb">
        <form>
          <h1 class="sh">Buat Berita</h1>
          <div class="jube">
            <p>Judul Berita</p>
          </div>
          <input name="judul_berita" type="text" class="inpnb" value={judul} onChange={(e)=>{setjudul(e.target.value);}}></input>
          <div>
            <p class="isi">Isi</p>
          </div>
          <div>
            <p>
              <textarea
                class="inpi"
                name="isi_berita"
                rows="10"
                cols="30"
                value={isi}
                onChange={(e)=>{setisi(e.target.value);}}
              ></textarea>
            </p>
          </div>
          <button className="kirim" onClick={addBerita}>
            Tambah Berita
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tberita;
