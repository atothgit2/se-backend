import { Router } from "express";
import { getFileList, getFileContent, uploadFile, modifyFile, deleteFile } from "./controllers/controllers";
import * as multer from "multer";

export const router = Router();
const upload = multer({ dest: "../uploads" });

router.get("/file", getFileList);
router.get("/file/:id", getFileContent);
router.post("/upload", upload.single("file"), uploadFile);
router.put("/file/:id", modifyFile);
router.delete("/file/:id", deleteFile);

