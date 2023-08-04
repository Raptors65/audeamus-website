export default function Hero() {
  return (
    <div className="px-6 pt-6 lg:px-8 bg-team-photo bg-cover bg-no-repeat bg-center h-screen">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-50 ring-1 ring-gray-100/10 hover:ring-white/20">
            Preparing for the 2023-24 school year.{' '}
            <a href="#" className="font-semibold text-red-300">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            MGCI Robotics
            <br />
            (FRC 8574)
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are the robotics team at Marc Garneau Collegiate Institute, a high school based in
            Toronto, Ontario and part of the Toronto District School Board.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/about"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Members
            </a>
            <a
              href="/sponsors"
              className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sponsors
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
