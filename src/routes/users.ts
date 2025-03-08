import express, {Request,Response} from "express";

const router = express.Router()

router.get('/api/users', (req: Request, res: Response) => {
  res.send('User:')
});

router.get('/api/users/:userId', (req: Request, res: Response) => {
  res.send('User Id')
});


router.post('/api/users', (req: Request, res: Response) => {
  res.send('User Post')
});

router.post('/api/users/:updatedUserId', (req: Request, res: Response) => {
  res.send('User Post with updated ID')
});

router.delete('/api/users', (req: Request, res: Response) => {
  res.send('delete user')
});

router.post('/api/users/:userId/friends/:friendId', (req: Request, res: Response) => {
  res.send('Post Friends:')
});

router.delete ('/api/users/:userId/friends/:friendId', (req: Request, res: Response) => {
  res.send('Delete Friends')
});

export default router;