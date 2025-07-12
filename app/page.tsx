import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white dark:bg-black p-10 text-center">
      <Image
        src="/logo.png" // Replace with your actual logo path
        alt="Hotel Africa Logo"
        width={120}
        height={120}
        priority
      />
      <h1 className="mt-6 text-4xl font-bold text-gray-800 dark:text-white">
        Welcome to Hotel Africa
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Discover, compare, and book the best stays, flights, taxis, boats and more — all in one place.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 max-w-xl">
        <a
          href="/stays"
          className="rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 shadow hover:bg-white transition hover:scale-105 text-left"
        >
          <h2 className="text-xl font-semibold">Stays →</h2>
          <p className="text-sm text-gray-500">Book hotels and guest houses across Africa.</p>
        </a>

        <a
          href="/flights"
          className="rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 shadow hover:bg-white transition hover:scale-105 text-left"
        >
          <h2 className="text-xl font-semibold">Flights →</h2>
          <p className="text-sm text-gray-500">Find the best airfare to your destinations.</p>
        </a>

        <a
          href="/taxis"
          className="rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 shadow hover:bg-white transition hover:scale-105 text-left"
        >
          <h2 className="text-xl font-semibold">Taxis →</h2>
          <p className="text-sm text-gray-500">Private rides from airport and beyond.</p>
        </a>

        <a
          href="/boats"
          className="rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 shadow hover:bg-white transition hover:scale-105 text-left"
        >
          <h2 className="text-xl font-semibold">Boats →</h2>
          <p className="text-sm text-gray-500">Explore islands and coastlines by boat.</p>
        </a>
      </div>
    </main>
  );
}
