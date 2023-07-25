"use client";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow p-10 max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-gray-600 mt-4">Something went wrong.</p>
        <div className="mt-6">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
