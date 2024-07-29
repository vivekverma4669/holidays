"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TourCard from '@/components/TourCard';

interface Tour {
  _id: string;
  title: string;
  place: string;
  price: number;
  images: string[];
}

const ToursList: React.FC = () => {
  
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:8000/api/tours');
        const data = await res.json();
        setTours(data.tours);
      } catch (error) {
        console.error('Error fetching tours:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tours. Please try again later.</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h1 className="title">Experience Our Unique Packages</h1>
        <p>Reflecting the warm and welcoming nature of people</p>
      </div>

      <div className="post container">
        {tours.map((tour) => (
          <div className="post-box" key={tour._id}>
            <Link href={`/tours/${tour._id}`} legacyBehavior>
              <a>
                <img
                  src={tour.images[0]}
                  alt={tour.title}
                  className="post-img"
                />
                <h3 className="post-title">{tour.title}</h3>
                <span className="post-price">${tour.price}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursList;
