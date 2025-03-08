import express, {Request,Response} from "express";

const router = express.Router()

router.get ('/api/thoughts', (req: Request, res: Response) => {
  res.send('Thoughts:')
});

router.get ('/api/thoughts/thoughtId', (req: Request, res: Response) => {
  res.send('Thought with ID')
});

router.post ('/api/thoughts', (req: Request, res: Response) => {
  res.send('Post Thoughts')
});

router.put ('/api/thoughts', (req: Request, res: Response) => {
  res.send('Put Thoughts:')
});

router.delete ('/api/thoughts', (req: Request, res: Response) => {
  res.send('Delete Thoughts:')
});

router.post ('/api/thoughts/:thoughtId/reactions', (req: Request, res: Response) => {
  res.send('Post Reactions:')
});

router.delete ('/api/thoughts/:thoughtId/reactions', (req: Request, res: Response) => {
  res.send('DeleteReactions:')
});