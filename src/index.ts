import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation:`);
  console.log(`  - GET    /api/users              - Get all users`);
  console.log(`  - POST   /api/users              - Create a new user`);
  console.log(`  - GET    /api/users/:id          - Get user by ID`);
  console.log(`  - PUT    /api/users/:id          - Update user`);
  console.log(`  - DELETE /api/users/:id          - Delete user`);
  console.log(`  - GET    /health                 - Health check`);
});
