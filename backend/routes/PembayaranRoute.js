const express = require("express");
const router = express.Router();
const upload = require("../upload")

const Pembayaran = require("../models/PembayaranModel");

router.post('/bayar', upload.single('image'), async (req,res)=>{
    const nama =  req.body.nama;
    const jumlahbayar = req.body.jumlahbayar;
    const image = req.file.filename;

    const pembayaran = new Pembayaran({
        nama:nama,
        jumlahbayar:jumlahbayar,
        image:image
    });
    try{
        const bayar = await pembayaran.save();
        res.status(201).json(bayar);
    }catch (error) {
        return res.status(400).json({ error });
      }
})

router.get('/getpembayaran', async (req,res)=>{
    try{
        const bayar = await Pembayaran.find({});
        res.send(bayar);
    }catch (error) {
        return res.status(400).json({ error });
      }
})

router.post("/approvebayar/:id",async (req,res)=>{
    try{
        const approve= await Pembayaran.findById({_id:req.params.id})
        approve.status = "disetujui";
        approve.save();
        res.status(201).json({message: "sukses"})
    }catch (error) {
        return res.status(400).json({ error: `ini error : ${error}` });
      }
})
module.exports = router;