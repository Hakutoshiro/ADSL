const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routes/route');
app.use(express.json());
app.use(cors(
    {
        credentials:true,
        origin:'http://localhost:5173'
    }
));
app.use("/",router);

app.listen(4000)