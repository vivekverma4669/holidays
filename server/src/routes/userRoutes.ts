import { Router } from 'express';
import { getTours, getTourById, addReview } from '../controllers/userController';

const router = Router();

router.get('/tours', getTours);
router.get('/tours/:id', getTourById,);

// router.post('/tours/:id/review', authenticateJWT, addReview);

export default router;
