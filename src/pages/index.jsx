import React from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'gatsby';

function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="absolute top-4 left-4">
        <img src="/path-to-your-logo.svg" alt="Talanta Logo" className="w-12 h-12" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800 text-center mb-8">
        Welcome to the
        {' '}
        <br />
        {' '}
        Talanta Learning Platform
      </h1>
      <div className="flex gap-4 space-x-4 mt-4">
        <Button size="lg" ripple="light" as={Link} to="/signup">
          Sign Up
        </Button>
        <Button size="lg" color="white" ripple="light" as={Link} to="/signin">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default IndexPage;
