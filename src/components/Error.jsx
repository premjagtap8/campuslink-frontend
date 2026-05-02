


export function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        
        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-blue-600">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500 text-sm md:text-base">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition duration-300"
          >
            Go Back Home
          </a>
        </div>

      </div>
    </div>
  );
}