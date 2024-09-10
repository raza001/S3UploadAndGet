const {S3Client, GetObjectCommand } = require("@aws-sdk/client-s3")

const s3Client =new S3Client({
    region:"ap-south-1",
    credentials:{
        accessKeyId:process.env.ACCESSKEY,
        secretAccessKey:process.env.SECRETKEY
    }
})

module.exports = s3Client;