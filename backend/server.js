
const express = require("express");
const app = express();
const dbConfig = require("./db");

const PenghuniRoute = require("./routes/PenghuniRoute");
const BeritaRoute = require("./routes/BeritaRoute");
const TagihanRoute = require("./routes/TagihanRoute");
const PembayaranRoute = require("./routes/PembayaranRoute");
const PesanRoute = require("./routes/PesanRoute");

app.use(express.json());
app.use(express.static("public"));

app.use("/api/penghuni", PenghuniRoute);
app.use("/api/berita", BeritaRoute);
app.use("/api/tagihan", TagihanRoute);
app.use("/api/pembayaran", PembayaranRoute);
app.use("/api/pesan", PesanRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node Server Start using Nodemon"));