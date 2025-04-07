// components/FoodAppCard.js
export default function FoodAppCard() {
  return (
    <div className="relative w-[800px] h-[450px] border border-black overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/rateeat.png" // make sure the image is in /public or use static import
        alt="Amro Chicken"
        className="w-full h-full object-cover"
      />

      {/* Overlay Text Box */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-300 bg-opacity-90 p-6 w-[400px]">
        <p className="text-sm text-gray-900">
          <strong>rateeat</strong> is a web application that allows users to
          rate and review restaurLants. It is built with React, Node.js, and
          MongoDB. The application has a user-friendly interface and allows
          users to search for restaurants by location, cuisine, and rating.
          Users can also create an account to save their favorite restaurants
          and reviews.
        </p>
      </div>

      {/* Top-right Text */}
      <div className="absolute top-6 right-6 text-right">
        <p className="text-xs text-gray-500">Featured Project</p>
        <h2 className="text-2xl font-semibold text-black">Food App</h2>
      </div>

      {/* Bottom Tools */}
      <div className="absolute bottom-6 left-6 flex gap-4 text-sm text-gray-700">
        <span>VS Code</span>
        <span>Python</span>
        <span>Java</span>
        <span>Git</span>
      </div>
    </div>
  );
}
