import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Sidebar from "./sidebar";
import '../style/penghuni.css';


function Penghuni() {
  const [penghuni, setPenghuni] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const getPenghuni = await (
          await axios.get("/api/penghuni/getallpenghuni")
        ).data;
        setPenghuni(getPenghuni);
        console.log(getPenghuni);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const hapuspenghuni = (id) => {
    axios.delete(`/api/penghuni/hapuspenghuni/${id}`).then((res) => {
      console.log(res);
    });
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="sidebar">
                <Sidebar/>
            </div>
      <div className="con">
        <h1 className="sh">Daftar Penghuni</h1>
        <table>
          <thead>
            <tr className="usp1">
              <td className="no">No</td>
              <td className="namest">Nama</td>
              <td className="telp">No Telepon</td>
              <td className="rmh">No Rumah</td>
              <td className="srn">Username</td>
              <td className="password">Password</td>
              <td className="ket">Action</td>
            </tr>
          </thead>
          <tbody>
            {penghuni &&
              penghuni.map((penghuni, index) => {
                return (
                  <tr className="trah">
                    <td className="user1">{index + 1}</td>
                    <td className="nma">{penghuni.nama}</td>
                    <td className="tlp">{penghuni.telp}</td>
                    <td className="rumh">{penghuni.rumah}</td>
                    <td className="usname">{penghuni.username}</td>
                    <td className="pwa">{penghuni.password}</td>
                    <td>
                      <button
                        className="haps"
                        onClick={() => hapuspenghuni(penghuni._id)}
                      >
                        Hapus
                      </button>
                      <Link
                        to={`editpenghuni/${penghuni._id}`}
                        className="edt"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <a className="tph" href="/tambahpenghuni">
          Tambah Penghuni
        </a>
      </div>
    </div>
  );
}

export default Penghuni;
