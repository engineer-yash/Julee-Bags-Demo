import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ImageModal from '../components/ImageModal';
import { heroSliderImages, allBagsGallery } from '../data/images';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Get first 12 images for home preview
  const previewImages = allBagsGallery.slice(0, 12);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider images={heroSliderImages} />

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to JULEE BAGS
          </h1>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Our factory has an experience in manufacturing of bags over <span className="font-bold text-primary">20 years</span>. 
              Our products includes <strong>Documents Bags, School Bags, College Bags, Laptop Bags, Handbags, 
              Tiffin bags, Pencil pouch</strong> made from foam leather, PVC, PU, polyster and nylon etc.
            </p>
            <p>
              Our service includes producing according to customer's designs. 
              <strong className="text-primary"> Customer satisfaction is our moto.</strong> We welcome the customers from all 
              over the world to hold business and order with us.
            </p>
            <p className="text-primary font-semibold">
              Sincerely hope to build close co-operation relatioship with all honest customers.
            </p>
          </div>
        </div>
      </section>

      {/* Promo Video Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-800 rounded-lg shadow-xl" style={{ aspectRatio: '16/9' }}>
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-20 h-20 mx-auto mb-4 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <p className="text-xl font-semibold">Promo Video Coming Soon</p>
                  <p className="text-sm text-gray-400 mt-2">Experience the quality and craftsmanship of Julee Bags</p>
                </div>
              </div> */}
              <VideoPlayer src={'https://www.juleebags.com/vedio/v1.mp4'} autoPlay="true" loop className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Bags Gallery Preview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Bags Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {previewImages.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(item.url)}
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={item.url}
                  alt={`Bag ${item.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            to="/all-bags"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Bags
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">20+ Years Experience</h3>
              <p className="text-gray-600">Two decades of expertise in bag manufacturing</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
              <p className="text-gray-600">We produce according to your unique requirements</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Worldwide Delivery</h3>
              <p className="text-gray-600">We welcome customers from all over the world</p>
            </div>
          </div>
        </div>
      </section>

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

export default Home;
