import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-blue-50 px-6">
      <div className="text-center">
        {/* Error Number */}
        <h1 className="text-9xl font-extrabold text-blue-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-lg mx-auto">
          The page you are looking for doesn’t exist or has been moved. Please
          check the URL or return to the homepage.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md
           hover:bg-blue-700 transition animate__animated animate__jello animate__infinite"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
