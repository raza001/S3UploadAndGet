const {S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const s3Client = require("../service/S3config");

async function GetUrlRequest(req,res,next) {
  const command =new GetObjectCommand({
    Bucket:process.env.BacketName,
    Key:"test/wallpaperflare.com_wallpaper.jpg"
  })
  const url =getSignedUrl(s3Client,command);
  url.then((signurl)=> {
    res.send(`<a href="${signurl}" target="_blank">Click here to access the file</a>`);
})
    .catch((err)=>{
        console.log(err)
        res.json({ message: "Error generating signed URL", error: err });
    })
}
module.exports = GetUrlRequest;