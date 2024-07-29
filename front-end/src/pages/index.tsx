/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/Navbar';
import Tour from "@/pages/tours/index";
import Link from "next/link";


export default function Home() {
  return (
    <main>
        <Navbar/>
        <Tour/>
        
    </main>
  );
}
