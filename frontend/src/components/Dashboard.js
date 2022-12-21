import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import "../style/db.css";
import Sidebar from "./sidebar";

function Dashboard() {
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

        return(
        <div className="body">
            <div className="container">
            <div className="sidebar">
                <Sidebar/>
            </div>
        <div class="con">
        <h1 class="sk">Dashboard</h1>
        <div class="tp">
              <div>
            <h2 class="tph">Total Penghuni</h2>
            <p class="atph">{penghuni &&penghuni.length}</p>
            </div>
            <div className="bk"></div>
            <img src="img/Intersect.png" alt=""/>
                </div>
        </div>
        <div class="pb">
            <h2 class="pbl">Pemasukan Bulanan</h2>
            <p class="apbl">Rp 33.300.000</p>
        </div>
    </div>
    </div>
            
         );
    }

export default Dashboard;