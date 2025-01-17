import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <section className="h-screen pt-32">
        <div className="grid h-full place-content-center px-4">
          <div className="text-center">
            <h1 className="text-9xl font-black text-gray-200">404</h1>

            <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Uh-oh!
            </p>

            <p className="mt-4 text-white">We can't find that page.</p>

            <Link
              to="/"
              className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
