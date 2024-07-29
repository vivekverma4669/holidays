import mongoose, { Schema, Document } from 'mongoose';

interface Itinerary {
  day: number;
  title: string;
  details: string;
}

interface HotelDetail {
  city: string;
  deluxe: {
    pricePerPerson: number;
  };
  premium: {
    pricePerPerson: number;
  };
}

interface Review {
  user: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface ITour extends Document {
  title: string;
  itinerary: Itinerary[];
  images: string[];
  hotelDetails: HotelDetail[];
  exclusions: string[];
  inclusions: string[];
  price: number;
  reviews: Review[];
}

const ItinerarySchema: Schema = new Schema({
  day: { type: Number, required: true },
  title: { type: String, required: true },
  details: { type: String, required: true }
});

const HotelDetailSchema: Schema = new Schema({
  city: { type: String, required: true },
  deluxe: {
    pricePerPerson: { type: Number, required: true }
  },
  premium: {
    pricePerPerson: { type: Number, required: true }
  }
});

const ReviewSchema: Schema = new Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});


const TourSchema: Schema = new Schema({
  title: { type: String, required: true },
  itinerary: [ItinerarySchema],
  images: [{ type: String, required: true }],
  hotelDetails: [HotelDetailSchema],
  exclusions: [{ type: String, required: true }],
  inclusions: [{ type: String, required: true }],
  price: { type: Number, required: true },
  reviews: [ReviewSchema]
}, {
  versionKey: false
});

export default mongoose.model<ITour>('Tour', TourSchema);
