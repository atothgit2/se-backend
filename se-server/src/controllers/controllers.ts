import express from "express";
import { requestFileList } from "se-api";

const HAPPY_THRESHOLD = 0.3;

export function MoodController(_req: express.Request, res: express.Response) {
  const indicator = Math.random();
  if (indicator > HAPPY_THRESHOLD) {
    res.json({
      indicator: indicator,
      mood: "happy",
      text: "I am feeling glad today!",
    });
  } else {
    res.json({
      indicator: indicator,
      mood: "sad",
      text: "I am not feeling well today :sad_face:",
    });
  }
}

export const getFileList = async (_req: express.Request, res: express.Response, _next: Function) => {
  const data : any = await requestFileList();
  res.status(200).send(JSON.stringify(data))
};