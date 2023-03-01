import express from "express";
import { requestFileList, requestFileContent, requestUpload, requestModify } from "se-api";
// import fs from "fs";

export const getFileList = async (_req: express.Request, res: express.Response, _next: Function) => {
  const data : any = await requestFileList();
  res.status(200).send(JSON.stringify(data))
};

export const getFileContent = async (req: express.Request, res: express.Response, _next: Function) => {
  let id: string = req.params.id;
  let data: any = await requestFileContent(id);
  res.status(200).send(data);
};

export const uploadFile = async (req: express.Request, res: express.Response, _next: Function)=> {
  await requestUpload(`${req.file?.filename}`,`${req.file?.filename}.srt`, './../uploads', JSON.stringify(req.body))
  res.status(200).send(`New file(s) created!`);
}

export const modifyFile = async (req: express.Request, res: express.Response, _next: Function)=> {
  let id: string = req.params.id;
  let data : string = JSON.stringify(req.body);
  await requestModify(id, data);
  res.status(200).send(`Content modified!`);
}

export const deleteFile = async (_req: express.Request, res: express.Response, _next: Function)=> {
  res.status(200).send(`Content modified!`);
}

// // PUT METADATA (MODIFY METADATA)
// const editMetaData = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let id: string = req.params.id;
//   let body = JSON.stringify(req.body);
//   console.log(body);
//   console.log(typeof body);

//   fs.writeFile(
//     path.join(__dirname, "..", "..", "uploads", `${id}.json`),
//     body,
//     function (err) {
//       if (err) throw err;
//       console.log("Replaced!");
//     }
//   );
//   res.status(200).send("Done!");
// };

// const deleteFile = async (req: Request, res: Response, next: NextFunction) => {
//   let id: string = req.params.id;

//   fs.rm(
//     path.join(__dirname, "..", "..", "uploads", id),
//     { recursive: true },
//     (err) => {
//       if (err) throw err;
//       console.log("File removed!");
//       res.status(200).send("File removed!");
//     }
//   );
// };