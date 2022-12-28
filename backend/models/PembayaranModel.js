const mongoose = require("mongoose")

const pembayaranSchema = mongoose.Schema ({
    nama: {
        type : String,
        required : true
    },
    jumlahbayar: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    },
    status: {
        type : String,
        required : true,
        default: "pending"
    }
})

const PembayaranModel = mongoose.model("pembayaran", pembayaranSchema);

module.exports = PembayaranModel;