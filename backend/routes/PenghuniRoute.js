const express = require("express");
const router = express.Router();

const Penghuni = require("../models/PenghuniModel");

router.get("/getallpenghuni", async (req, res) => {
    try {
      const penghuni = await Penghuni.find({});
      res.send(penghuni);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  });

 router.get("/getpenghuniByID/:id",async (req, res) => {
    try {
        const penghuni = await Penghuni.findById(req.params.id);
        res.json(penghuni);
    } catch (error) {
        res.status(404).json({message: err});
    }
});

  router.post("/tambahpenghuni", async (req, res) => {
    try {
      const penghuni = new Penghuni(req.body);
      await penghuni.save();
      res.send("new Room Added Success");
    } catch (error) {
      return res.status(400).json({ error });
    }
  });

  router.delete("/hapuspenghuni/:id", async (req, res) => {
    try {
        const hapus = await Penghuni.deleteOne({_id: req.params.id});
        res.status(200).json(hapus);
    } catch (error) {
        res.status(400).json({message: err});
}
});

router.patch("/editpenghuni/:id", async (req, res) => {
  try {
      const edit = await Penghuni.updateOne({_id: req.params.id}, {$set:req.body});
      res.status(200).json(edit);
  } catch (error) {
      res.status(400).json({message: err});
}
});

  module.exports = router;