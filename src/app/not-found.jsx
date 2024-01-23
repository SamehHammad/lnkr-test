import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex mt-[10%] justify-center min-h-screen">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-mainColor mb-4">Lnkr</h1>
        <h2 className="text-4xl font-bold text-mainColor mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          The requested resource could not be found. It seems like you've
          entered uncharted territory.
        </p>
        <Link
          href="/"
          className="bg-mainColor text-white px-4 py-2 rounded-full transition hover:bg-green-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
