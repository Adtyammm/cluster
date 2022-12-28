const mongoose = require("mongoose")

const tagihanSchema = mongoose.Schema ({
    air: {
        type : String,
        required : true
    },
    keamanan: {
        type : String,
        required : true
    },
    kebersihan: {
        type : String,
        required : true
    }
})

const TagihanModel = mongoose.model("tagihan", tagihanSchema);

module.exports = TagihanModel;