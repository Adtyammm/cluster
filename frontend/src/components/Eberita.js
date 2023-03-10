import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import Sidebar from "./sidebar";
import "../style/eb.css"

function Eberita() {
  const [judul, setjudul] = useState();
  const [isi, setisi] = useState();
  const {id} = useParams();

  useEffect(() => {
    getBeritaById();
  }, []);


  const getBeritaById = async () => {
    const res = await axios.get(`/api/berita/getberitaById/${id}`);
    setjudul(res.data.judul);
    setisi(res.data.isi);
    console.log(getBeritaById);
  };

  const editberita = async (e) => {
    await axios.patch(`/api/berita/editberita/${id}`, {
      judul,
      isi,
    });
    window.location.href = "/Berita";
  };

  return (
    
    <div class="conb">
      <div className="body">
      <div>
          <Sidebar/>
        </div>
        </div>
        <div>
          <form>
            <h1 class="shk">Edit Berita</h1>
            <div class="jube">
              <p>Judul Berita</p>
            </div>
            <input
              type="text"
              className="inpnj"
              name="judul_berita"
              value={judul}
              onChange={(e) => {
                setjudul(e.target.value);
              }}
            ></input>
            <div>
              <p class="isi">Isi</p>
            </div>
            <div>
              <p>
                <textarea
                  class="inpii"
                  name="isi_berita"
                  value={isi}
                  onChange={(e) => {
                    setisi(e.target.value);
                  }}
                ></textarea>
              </p>
            </div>
            <button className="send" onClick={editberita}>Edit Berita</button>
          </form>
        </div>
      </div>

  );
}

export default Eberita;
