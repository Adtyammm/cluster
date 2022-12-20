import React from "react";
import '../style/tagihan.css';
class Tagihan extends React.Component{
    render() {
        return (
            <div className="tagihan-container">
                <img className="logo" src="./img/logo.png" alt="logo"></img>
                <h1>Cluster Maul Hill</h1>
                <div className="rincian">
                    <h2 className="rincian-title">Tagihan Bulanan</h2>
                    <p className="tagihan-air">Air</p>
                    <p className="tagihan-keamanan">Keamanan</p>
                    <p className="tagihan-kebersihan">Kebersihan</p>
                    <p className="total">Total</p>
                    <p className="harga-air">Rp 100.000</p>
                    <p className="harga-keamanan">Rp 50.000</p>
                    <p className="harga-kebersihan">Rp 50.000</p>
                    <p className="harga-total">Rp 200.000</p>
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
                </div>
                <div className="form-bayar">
                    <h2 className="bayar-title">Pembayaran</h2>
                    <p className="rek">No rekening</p>
                    <p className="penerima">Nama</p>
                    <input></input>
                    <p className="ket-jml">Jumlah Pembayaran</p>
                    <input></input>
                    <p className="unggah">unggah bukti pembayaran</p>
                        <input type="file" class="btn-2" id="file" />
                    <button className="confirm-btn">Konfirmasi Pembayaran</button>
                </div>
            </div>
        );
    }
}

export default Tagihan;