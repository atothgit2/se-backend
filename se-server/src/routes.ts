import { Router } from "express";
// import multer from "multer";
import { MoodController } from './controllers/MoodController';
import { getFileList } from "./controllers/controllers";

export const router = Router();
// const upload = multer({ dest: "./uploads" });

router.get("/api/mood", MoodController);

router.get("/file", getFileList); 
// router.post("/upload", upload.single("file"), controller.listFiles);
// router.get("/file/:id", controller.getFileContent);
// router.put("/file/:id", controller.editFileContent);
// router.put("/file/meta/:id", upload.none(), controller.editMetaData);
// router.delete("/file/:id", controller.deleteFile);

