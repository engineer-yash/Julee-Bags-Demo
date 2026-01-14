import React from 'react';

const AboutJulee = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">About Julee Bags</h1>
          <p className="text-center mt-2 text-gray-300">Quality Bags Manufacturer Since 2003</p>
        </div>
      </div>

      {/* Company Story */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                With over <strong className="text-primary">20 years of experience</strong> in bag manufacturing, 
                Julee Bags has established itself as a trusted name in the industry. Since our inception, 
                we have been committed to producing high-quality bags that combine functionality, durability, 
                and style.
              </p>
              <p>
                Our factory specializes in manufacturing a wide range of bags including <strong>School Bags, 
                College Bags, Laptop Bags, Hand Bags, Document Bags, Tiffin Bags, and Pencil Pouches</strong>. 
                We use premium materials such as foam leather, PVC, PU, polyester, and nylon to ensure the 
                longevity and quality of our products.
              </p>
              <p>
                At Julee Bags, we understand that every customer has unique needs. That's why we offer 
                custom design services, allowing you to create bags that perfectly match your requirements. 
                Whether you need bags for personal use, corporate branding, or bulk orders, we have the 
                expertise and capacity to deliver.
              </p>
            </div>
          </div>

          {/* Author Bio Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Founder</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-primary">
                  <img
                    src="https://www.juleebags.com/images/logo11.png"
                    alt="Julee Bags Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bio Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Julee - Founder & CEO</h3>
                <p className="text-primary font-semibold mb-4">Master Craftsperson & Entrepreneur</p>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    With a passion for quality craftsmanship and an entrepreneurial spirit, Julee founded 
                    the company with a vision to create bags that people can rely on for years. Starting 
                    from a small workshop in Pune, the business has grown into a trusted manufacturer 
                    serving customers across India and internationally.
                  </p>
                  <p>
                    "Our success is built on three pillars: <strong>Quality, Innovation, and Customer 
                    Satisfaction</strong>. Every bag that leaves our factory represents our commitment to 
                    excellence and our respect for the customer's trust in us."
                  </p>
                  <p className="italic text-gray-600">
                    - Julee, Founder of Julee Bags
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To manufacture high-quality bags that exceed customer expectations while maintaining 
                affordability and promoting sustainable business practices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-primary text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become a globally recognized brand known for innovation, quality, and customer 
                satisfaction in the bag manufacturing industry.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary text-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Julee Bags?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold mb-2">20+ Years Experience</h4>
                  <p className="text-gray-100">Two decades of expertise in bag manufacturing</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Custom Designs</h4>
                  <p className="text-gray-100">Tailored solutions for your specific needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Premium Quality</h4>
                  <p className="text-gray-100">Using only the finest materials and craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-bold mb-2">Global Reach</h4>
                  <p className="text-gray-100">Serving customers worldwide with dedication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJulee;
