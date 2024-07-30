const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoutes = require("./routes/users.js")
const authRoutes = require("./routes/auth.js")
const postRoutes = require("./routes/posts.js")
const cors = require('cors');
const multer = require('multer');
const path = require('path')

const app = express();
dotenv.config();
app.use(cors())


// connect mongoDB 
mongoose.connect(process.env.MONGO_URL)   
.then(()=>console.log('connected to database'))
.catch((err)=>console.log(err))

// MiddleWare
app.use(express.json());
app.use(helmet())
app.use(morgan('common'))

app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });
  

app.use("/api/users" , userRoutes)
app.use("/api/auth" , authRoutes)
app.use("/api/posts" , postRoutes)





port = 5000
app.listen(port,()=>{
console.log('Backend server is running.....!');
});

