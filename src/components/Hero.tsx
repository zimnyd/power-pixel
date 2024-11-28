import avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <section className="bg-neutral-100 py-8 dark:bg-neutral-700">
      <div className="mx-auto grid max-w-5xl justify-items-center gap-8 px-4 md:grid-cols-2">
        <div className="order-last flex flex-col justify-evenly gap-4 md:order-none">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            alias?
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            molestiae velit quidem commodi maiores aspernatur praesentium
            excepturi eveniet illo non natus, eum a asperiores! Eos rerum non
            neque animi enim.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="ml-2 rounded-md border border-transparent bg-blue-600 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Button Blue
            </button>
            <button
              className="ml-2 rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Button Red
            </button>
            <button
              className="ml-2 rounded-md border border-transparent bg-green-600 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Button Green
            </button>
            <button
              className="ml-2 rounded-md border border-transparent bg-amber-600 px-4 py-2 text-center text-sm text-slate-800 shadow-md transition-all hover:bg-amber-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-none active:bg-amber-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Button Amber
            </button>
          </div>
        </div>

        <div className="relative z-10 max-h-fit">
          <img
            src={avatar}
            alt=""
            width="320px"
            height="320px"
            className="max-w-md rounded-full"
          />
          <div className="absolute inset-0 -z-10 h-full w-full animate-hero-primary bg-red-500"></div>
          <div className="absolute inset-0 -z-10 h-full w-full animate-hero-secondary rounded-[20%_80%_50%_50%_/_20%_50%_50%_80%] bg-blue-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
