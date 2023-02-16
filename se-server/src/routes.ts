import { Router } from "express";
import { getFileList, getFileContent, uploadFile } from "./controllers/controllers";
import * as multer from "multer";

export const router = Router();
const upload = multer({ dest: "../uploads" });
  
router.get("/file", getFileList); 
router.get("/file/:id", getFileContent);
router.post("/upload", upload.single("file"), uploadFile);
// router.put("/file/:id", controller.editFileContent);
// router.put("/file/meta/:id", upload.none(), controller.editMetaData);
// router.delete("/file/:id", controller.deleteFile);

