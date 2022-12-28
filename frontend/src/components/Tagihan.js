import React, {useState, useEffect} from "react";
import axios from "axios";
import '../style/tagihan.css';

function Tagihan(){
    const [tagihan,setTagihan] = useState([]);
    const [nama,setNama] = useState([]);
    const [jumlahbayar,setjumlahbayar] = useState([]);
    const [image,setImage] = useState([]);
    useEffect(() => {
        (async () => {
          try {
            const getTagihan = await (
              await axios.get("/api/tagihan/gettagihan")
            ).data;
            setTagihan(getTagihan);
            console.log(getTagihan);
          } catch (error) {
            console.log(error);
          }
        })();
      }, []); 

      const pembayaran = async(e) =>{
        e.preventDefault();
        const formdata = new FormData();
       formdata.append('nama',nama);
       formdata.append('jumlahbayar',jumlahbayar);
       formdata.append('image',image);
        try{
            await axios.post('/api/pembayaran/bayar', formdata);
        }catch (error){
            throw error;
        }
      }
      const handlerimage = e =>{
        setImage(e.target.files[0]);
        console.log(image);
    }
        return (
            <div className="tagihan-container">
                <img className="logos" src="./img/logo.png" alt="logo"></img>
                <div className="hil">
                <h1>Cluster Maul Hill</h1>
                </div>
                <div className="rincian">
                    <h2 className="rincian-title">Tagihan Bulanan</h2>
                    <p className="tagihan-air">Air</p>
                    <p className="tagihan-keamanan">Keamanan</p>
                    <p className="tagihan-kebersihan">Kebersihan</p>
                    <p className="total">Total</p>
                    {tagihan.map((tagihan)=>{
                        return(
                            <>
                            <p className="harga-air">Rp {tagihan.air}</p>
                            <p className="harga-keamanan">Rp {tagihan.keamanan}</p>
                            <p className="harga-kebersihan">Rp {tagihan.kebersihan}</p>
                            </>
                        );
                    })}
                    
                </div>
                <div className="metode">
                    <h2 className="Metode-title">Metode Pembayaran</h2>
                    <ul>
                        <li>
                        <p className="BCA">BCA</p>
                        </li>
                        <li>
                        <p className="BRI">BRI</p>
                        </li>
                        <li>
                        <p className="Mandiri">Mandiri</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <p className="BCAA"> 3014923048</p>
                        </li>
                        <li>
                        <p className="BRII"> 2132014827</p>
                        </li>
                        <li>
                        <p className="MANDIRII"> 0593382913</p>
                        </li>
                    </ul>
                </div>
                <div className="form-bayar">
                    <h2 className="bayar-title">Pembayaran</h2>
                    <p className="penerima">Nama</p>
                    <input name="nama_penerima" type="text" class="inpe" value={nama}  onChange={(e)=> setNama(e.target.value)} ></input>
                    <p className="ket-jml">Jumlah Pembayaran</p>
                    <input name="jmlh-pem" type="text" class="inpj"value={jumlahbayar}  onChange={(e)=> setjumlahbayar(e.target.value)} ></input>
                    <p className="unggah">Unggah bukti pembayaran</p>
                        <input type="file" class="btn-2" id="file"  onChange={handlerimage}/>
                    <button className="confirm-btn"  onClick={pembayaran}>Konfirmasi Pembayaran</button>
                </div>
            </div>
        );
    }


export default Tagihan;