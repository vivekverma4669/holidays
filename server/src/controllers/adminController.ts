import { Request, Response } from 'express';
import Tour from '../models/Tour';

export const createTour = async (req: Request, res: Response) => {
  const { title, itinerary, images, hotelDetails, exclusions, inclusions, price } = req.body;

  try {
    const newTour = new Tour({ title, itinerary, images, hotelDetails, exclusions, inclusions, price });
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTour = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedTour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(updatedTour);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTour = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedTour = await Tour.findByIdAndDelete(id);
    if (!deletedTour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json({ message: 'Tour deleted successfully' });
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};
