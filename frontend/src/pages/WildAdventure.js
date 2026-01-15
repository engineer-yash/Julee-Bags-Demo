import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import { wildAdventureImages } from '../data/images';

const WildAdventure = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-64 md:h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.juleebags.com/images/ban9.jpg)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WILD ADVENTURE</h1>
          <p className="text-xl md:text-2xl">Bags Built for the Explorer in You</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Adventure Awaits
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Our <strong>Wild Adventure</strong> collection is specially designed for outdoor enthusiasts, 
                travelers, and adventurers who demand durability, functionality, and style. Whether you're 
                trekking through mountains, exploring new cities, or embarking on a weekend camping trip, 
                our bags are your perfect companion.
              </p>
              <p>
                Each bag in this collection is crafted with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Durable Materials:</strong> Weather-resistant fabrics that withstand the elements</li>
                <li><strong>Smart Design:</strong> Multiple compartments for organized packing</li>
                <li><strong>Comfort:</strong> Ergonomic straps and padding for long journeys</li>
                <li><strong>Versatility:</strong> Suitable for hiking, traveling, and everyday use</li>
                <li><strong>Quality:</strong> Built to last with reinforced stitching and premium hardware</li>
              </ul>
              <p className="text-primary font-semibold">
                Gear up for your next adventure with Julee Bags - where quality meets adventure!
              </p>
            </div>
          </div>

          {/* Adventure Gallery */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Wild Adventure Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wildAdventureImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square bg-gray-200">
                  <img
                    src={image}
                    alt={`Adventure Bag ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 bg-primary text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h3>
            <p className="mb-6">Contact us to explore our full Wild Adventure collection</p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default WildAdventure;
