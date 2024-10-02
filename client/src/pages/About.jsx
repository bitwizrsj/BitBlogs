import React from 'react';
import { Card, Button } from 'flowbite-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Bit Blogs</h1>
      
      <Card className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          At Bit Blogs, we're passionate about sharing knowledge and insights in the world of technology. 
          Our mission is to provide a platform where tech enthusiasts, developers, and industry experts 
          can come together to learn, share, and grow.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>In-depth technical articles</li>
            <li>Tutorials and how-to guides</li>
            <li>Industry news and trends</li>
            <li>Community discussions</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Quality content</li>
            <li>Community engagement</li>
            <li>Continuous learning</li>
            <li>Inclusivity and diversity</li>
          </ul>
        </Card>
      </div>

      <Card>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Join Our Community</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We believe in the power of community. Whether you're a seasoned professional or just starting 
          your journey in tech, there's a place for you here at Bit Blogs.
        </p>
        <Button gradientDuoTone="purpleToPink">
          Sign Up Now
        </Button>
      </Card>
    </div>
  );
}