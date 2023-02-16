import express from "express";
import { requestFileList, requestFileContent } from "se-api";
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
  // let file = req.file;
  let metadata = JSON.stringify(req.body);
  console.log(metadata);
  console.log(JSON.stringify(req.file?.filename)); 
  console.log(JSON.stringify(req.file?.path)); 
  
  // renameFile(`uploads/${req.file?.filename}`, `uploads/${req.file?.filename}.srt`);
  // createFile(`uploads/${req.file?.filename}.json`, `${metadata}`);
  res.status(200).send(`Succesfull upload!`);
}

// function renameFile(oldFilanameWPath: string, newFilanameWPath: string) {
//   fs.rename(oldFilanameWPath, newFilanameWPath, (err) => {
//     if (err) throw err;
//     console.log("Rename complete!");
//   });
// }

// function createFile(filename: string, data: string) {
//   fs.writeFile(filename, data, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// }

// // CREATE
// const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
//   let file = req.file;
//   let metadata = JSON.stringify(req.body);

//   console.log(file);
//   console.log(metadata);

//   renameFile(
//     `uploads/${req.file?.filename}`,
//     `uploads/${req.file?.filename}.srt`
//   );
//   createFile(`uploads/${req.file?.filename}.json`, `${metadata}`);

//   res.status(200).send(`Succesfull upload!`);
// };

// // GET ONE W/ CONTENT
// // TODO: if I send wrong id in the url, the complete server dies and need to restart

// const getFileContent = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let id: string = req.params.id;

//   fs.readFile(
//     path.join(__dirname, "..", "..", "uploads", id),
//     "utf8",
//     (err, data) => {
//       if (err) throw err;
//       res.status(200).send(data);
//     }
//   );
// };

// // PUT ONE (MODIFY FILE CONTENT)
// const editFileContent = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let id: string = req.params.id;
//   let body = req.body;
//   // console.log(body);

//   fs.writeFile(
//     path.join(__dirname, "..", "..", "uploads", `${id}.srt`),
//     body,
//     function (err) {
//       if (err) throw err;
//       console.log("Replaced!");
//     }
//   );
//   res.status(200).send("Done!");
// };

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