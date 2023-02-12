import * as express from 'express';

const HAPPY_THRESHOLD = 0.3;

export function MoodController(_req: express.Request, res: express.Response) {
    const indicator = Math.random();
    if (indicator > HAPPY_THRESHOLD) {
        // TODO replace this:
        res.json({
            indicator: indicator,
            mood: 'happy',
            text: 'I am feeling glad today!'
        });
    } else {
        // TODO replace this too:
        res.json({
            indicator: indicator,
            mood: 'sad',
            text: 'I am not feeling well today :sad_face:'
        });
    }
}
