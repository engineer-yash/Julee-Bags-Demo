import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import { allBagsGallery, categories } from '../data/images';

const AllBags = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryTag) => {
    setSelectedCategory(categoryTag);
    setVisibleCount(12);
    if (categoryTag === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryTag });
    }
  };

  const filteredImages = allBagsGallery.filter((item) =>
    item.tags.includes(selectedCategory)
  );

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Our Bags Collection</h1>
          <p className="text-center mt-2 text-gray-300">Explore our wide range of quality bags</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.tag)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.tag
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{visibleImages.length}</span> of{' '}
            <span className="font-semibold">{filteredImages.length}</span> bags
          </p>
        </div>

        {/* Image Gallery */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visibleImages.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
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
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-10 h-10 mx-auto mb-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <p className="text-sm font-semibold">Click to zoom</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No bags found in this category.</p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-primary text-white px-10 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Load More Bags
            </button>
          </div>
        )}

        {/* End of Results */}
        {!hasMore && filteredImages.length > 12 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 font-semibold">You've reached the end of the gallery</p>
          </div>
        )}
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

export default AllBags;
