// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Welcome | Clear Outcomes</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex flex-col items-center min-h-screen py-10 px-6 bg-white text-gray-900">
        <div className="w-full max-w-3xl">
          <div className="mb-12 flex justify-center">
            <Image src="/logo.jpg" alt="Clear Outcomes Logo" width={400} height={111} layout="intrinsic" />
          </div>

          <h1 className="text-4xl font-bold text-center mb-8">Full Site Coming Soon</h1>

          <footer className="mt-12 text-center">
            <p>&copy; {new Date().getFullYear()} Clear Outcomes Research Ltd. All rights reserved.</p>
            <p>Contact us at <a href="mailto:research@clearoutcome.co.uk" className="hover:underline">research@clearoutcome.co.uk</a>.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
