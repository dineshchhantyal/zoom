// create express server with error handler
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const crypto = require('crypto');
const Buffer = require('buffer').Buffer;

const app = express();
const PORT = process.env.PORT || 4004;
const ZOOM_JWT_API_KEY = "AUR-iW5hRhubJpYC46Y7aw";
const ZOOM_JWT_API_SECRET = "7jNHgzGmVo6fwfjMqAhFCqxQKMGxUzYpShNB"
const meetingNumber = "87591389658";
const role = "0";

app.use(cors());
app.get('/', (req, res) => {
    const timestamp = new Date().getTime() - 30000
    const msg = Buffer.from(ZOOM_JWT_API_KEY + meetingNumber + timestamp + role).toString('base64')
    const hash = crypto.createHmac('sha256', ZOOM_JWT_API_SECRET).update(msg).digest('base64')
    const signature = Buffer.from(`${ZOOM_JWT_API_KEY}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

    res.json({
        signature: signature
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const sdkkey = "DEosTeeJl5Eb997fa8p93na68pvaRsef32Mc"
const sdkSecret = "rBFbLe5RHejw1angpmlZbHvZtyDku0tYQdio"
const jwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IkFVUi1pVzVoUmh1YkpwWUM0Nlk3YXciLCJleHAiOjE2NDQ4MjU0NzIsImlhdCI6MTY0NDgyMDA3Mn0.36T7Cg2ZhWF5b-4YIEfMP5FbvCAvpwi5Ev6FlJXiNSY"

const verificationToken = "jW2bWkyOSt-w-8aqRYHuMw"