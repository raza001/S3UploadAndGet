const {S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const s3Client = require("../service/S3config");

async function PutUrlRequest(req,res,next) {

    try {
        const file = req.files.upload;
        const uploadedFiles = [];
        const Mutfile = Array.isArray(file) ? file :[file]
         for (const file of Mutfile) {
            const fileName = `${Date.now()}-${file?.name}`;
            const command =new PutObjectCommand({
                Bucket:process.env.BacketName,  
                Key:`test/${fileName}`,
                Body: file.data, 
                ContentType:file.mimetype
              })    
    
              await s3Client.send(command)
              uploadedFiles.push({ fileName, message: 'Uploaded successfully' });
        }
        res.status(200).json({ message: 'File uploaded successfully', uploadedFiles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading file', err:error });
    }
}
module.exports=PutUrlRequest;