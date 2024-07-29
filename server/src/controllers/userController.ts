import { Request, Response } from 'express';
import Tour from '../models/Tour';

export const getTours = async (req: Request, res: Response) => {
  try {
    const tours = await Tour.find();
    res.json({"tours":tours});
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};

export const getTourById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};

export const addReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user, rating, comment } = req.body;

  try {
    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    const newReview = {
      user,
      rating,
      comment,
      date: new Date()
    };

    tour.reviews.push(newReview);
    await tour.save();

    res.json({ message: 'Review added successfully', review: newReview });
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};
