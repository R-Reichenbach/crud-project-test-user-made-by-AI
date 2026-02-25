import { Router, Request, Response } from 'express';
import { UserDatabase } from '../database/UserDatabase';

const router = Router();
const userDB = new UserDatabase();

// CREATE - POST /api/users
router.post('/', (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Check if email already exists
    if (userDB.findByEmail(email)) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const user = userDB.create(name, email, age);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// READ all - GET /api/users
router.get('/', (req: Request, res: Response) => {
  try {
    const users = userDB.findAll();
    res.json({
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// READ by ID - GET /api/users/:id
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = userDB.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// UPDATE - PUT /api/users/:id
router.put('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const user = userDB.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if new email already exists (and is different from current)
    if (email && email !== user.email && userDB.findByEmail(email)) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const updatedUser = userDB.update(id, name, email, age);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE - DELETE /api/users/:id
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = userDB.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    userDB.delete(id);
    res.json({ message: 'User deleted successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET stats - GET /api/users/stats/count
router.get('/stats/count', (req: Request, res: Response) => {
  try {
    res.json({ count: userDB.count() });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;