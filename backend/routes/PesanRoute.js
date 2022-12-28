const express = require("express");
const router = express.Router();

const Pesan = require("../models/PesanModel");

router.post('/kirimpesan', async (req,res)=>{
    try{
        const kirimpesan = new Pesan(req.body);
        await kirimpesan.save();
    }catch (error) {
        return res.status(400).json({ error });
      }
})

router.get('/getpesan', async (req,res)=>{
    try{
        const pesan = await Pesan.find({});
        res.send(pesan);
    }catch (error) {
        return res.status(400).json({ error });
      }
})

module.exports = router;