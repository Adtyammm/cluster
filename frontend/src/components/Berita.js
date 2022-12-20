import React, {useState, useEffect} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/br.css";
import Sidebar from "./sidebar";

function Berita()  {
    const [berita, setBerita] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const getBerita = await (
          await axios.get("/api/berita/getallberita")
        ).data;
        setBerita(getBerita);
        console.log(getBerita);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const hapusberita = (id) => {
    axios.delete(`/api/berita/hapusberita/${id}`).then((res) => {
      console.log(res);
    });
    window.location.reload();
  };
    return (
      <div className="body">
        <div className="container">
        <div className="sidebar">
                <Sidebar/>
            </div>
        <div class="con">
          <div className="sh">
            <h1>Berita</h1>
          </div>
          <div className="shh">
            <h3>Berita</h3>
          </div>
          <Link to={"/Tambahberita"} class="upl">Buat Berita Baru</Link>
          <div className="table">
            <table>
              <thead className="upst1">
                <tr class="upst">
                  <td className="no">No</td>
                  <td className="names">Judul</td>
                  <td className="kets">Action</td>
                </tr>
              </thead>
              <tbody>
            {berita &&
              berita.map((berita, index) => {
                return(
                <tr>
                  <td class="usr1">{index + 1}</td>
                  <td class="usr2">{berita.judul}</td>
                  <td>
                    {" "}
                    <a class="lh">Edit</a>
                  </td>
                  <td>
                    <a class="ed">Hapus</a>
                  </td>
                </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    );
  }


export default Berita;
