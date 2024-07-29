import { Router } from 'express';
import { createTour, updateTour, deleteTour} from '../controllers/adminController';

const router = Router();

// Create a new tour
router.post('/tours',  createTour);

// Update an existing tour
router.patch('/tours/:id',  updateTour);

// Delete a tour
router.delete('/tours/:id', deleteTour);

export default router;

