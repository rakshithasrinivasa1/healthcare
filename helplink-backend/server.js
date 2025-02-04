const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors()); 


mongoose.connect(process.env.URI)
.then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT|| 8000 , (err) => {
        if(err) console.log(err);

        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch(() => {
    console.error("MongoDB connection failed");
})

app.use(authRoutes);


// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Import routes
// const authRoutes = require("./routes/authRoutes");
// const emergencyRoutes = require("./routes/emergencyRoutes");

// // Use routes
// app.use('/api/auth', authRoutes);
// app.use('/api/emergencies', emergencyRoutes);
// app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`);
// });
