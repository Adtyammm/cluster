const mongoose = require("mongoose")

const pesanSchema = mongoose.Schema({
    pengirim: {
        type: String,
        required: true
    },
    pesan:{
        type: String,
        required: true
    },
});

const PesanModel = mongoose.model("pesan", pesanSchema);

module.exports = PesanModel;