const express = require("express");
const router = express.Router();

const Tagihan = require("../models/TagihanModel");

router.post('/kirimtagihan', async (req,res)=>{
    try{
        const kirimtagihan = new Tagihan(req.body);
        await kirimtagihan.save();
    }catch (error) {
        return res.status(400).json({ error });
      }
})

router.get('/gettagihan', async (req,res)=>{
    try{
        const tagihan = await Tagihan.find({});
        res.send(tagihan);
    }catch (error) {
        return res.status(400).json({ error });
      }
})

router.delete("/hapustagihan", async (req, res) => {
    try {
        const hapus = await Pembayaran.delete({});
        res.status(200).json(hapus);
    } catch (error) {
        res.status(400).json({message: err});
}
});

module.exports = router;