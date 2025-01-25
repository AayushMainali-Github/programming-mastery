import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FileUploads = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">File Uploads with Multer</div>
        <div className="description">
          File uploads are a common requirement in web applications, such as uploading images, documents, or videos. In this chapter, we’ll use the `multer` middleware to handle
          file uploads in a Node.js application.
        </div>

        <div className="subHeader">What is Multer?</div>
        <div className="description">
          Multer is a Node.js middleware for handling `multipart/form-data`, which is primarily used for file uploads. It simplifies the process of handling files by automatically
          parsing the request and storing the files in the desired location.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install multer`}</Code>

        <div className="subHeader">Setting Up Multer</div>
        <div className="description">First, configure Multer to define where and how files should be stored:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Unique file name
  },
});

// Initialize multer
const upload = multer({ storage });`}</Code>

        <div className="subHeader">Handling Single File Uploads</div>
        <div className="description">Use the `upload.single` method to handle single file uploads:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Route to handle single file upload
app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Uploaded file:', req.file);
  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}</Code>

        <div className="subHeader">Handling Multiple File Uploads</div>
        <div className="description">Use the `upload.array` method to handle multiple file uploads:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Route to handle multiple file uploads
app.post('/uploads', upload.array('files', 5), (req, res) => {
  console.log('Uploaded files:', req.files);
  res.status(200).json({ message: 'Files uploaded successfully', files: req.files });
});`}</Code>
        <div className="description">Here, the second argument (`5`) specifies the maximum number of files allowed in the upload.</div>

        <div className="subHeader">Validating File Types</div>
        <div className="description">Validate file types using Multer’s `fileFilter` option:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Configure Multer with file type validation
const uploadWithValidation = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'));
    }
  },
});`}</Code>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Route with file validation
app.post('/upload-validated', uploadWithValidation.single('file'), (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});`}</Code>

        <div className="subHeader">Serving Uploaded Files</div>
        <div className="description">Use Express’s `static` middleware to serve uploaded files:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`// Serve files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Example URL to access files: http://localhost:3000/uploads/<filename>`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Store sensitive files (e.g., documents) securely and avoid storing them in public directories.</li>
          <li>Validate file types and sizes to prevent malicious uploads.</li>
          <li>Organize uploaded files into structured directories for easier management.</li>
          <li>Use cloud storage services like AWS S3 for scalable and secure file storage.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Multer simplifies handling `multipart/form-data` for file uploads in Node.js.</li>
          <li>Use `upload.single` or `upload.array` based on the number of files being uploaded.</li>
          <li>Always validate file types and sizes to ensure security and application reliability.</li>
        </ul>

        <Bottom back="/nodejs/unit-and-integration-testing" next="/nodejs/security-best-practices" />
      </div>
    </div>
  );
};

export default FileUploads;
