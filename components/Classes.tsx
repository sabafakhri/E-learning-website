import Image from "next/image";

export default function Classes() {
  return (
    <section>
      <div className="font-metropolis flex flex-col items-center justify-center gap-3.75 px-5 py-10 text-center sm:gap-5">
        <h2 className="text-45-55 font-bold max-sm:hidden">
          High quality video, audio & live classes
        </h2>
        <h2 className="text-28-32 sm:text-35-40 font-bold sm:hidden">
          High quality video, audio & live classes
        </h2>
        <div>
          <Image
            className="w-[335px] object-cover"
            src="/Classes.svg"
            alt="Next.js logo"
            width={335}
            height={250}
            priority
          />

          <p className="text-16-24 lg:text-14-28 text-background/70 dark:text-foreground/70 mb-7.5 font-normal sm:mb-10">
            20k+ students daily learn with Eduvi. Subscribe for new courses.
          </p>
          <div className="sm:focus-within:ring-ring/50 sm:focus-within:ring-offset-background mx-2.5 flex transition-all duration-300 max-sm:flex-col max-sm:gap-5 sm:focus-within:ring-[3px] lg:rounded-[10px]">
            <input
              className="peer text-14-30 lg:text-16-30 placeholder:text-background dark:placeholder:text-foreground h-12.5 rounded-[5px] border-none bg-white/20 font-medium sm:rounded-r-none sm:focus-visible:border-none sm:focus-visible:ring-0 lg:h-15 lg:rounded-l-[10px]"
              placeholder="enter your email"
            ></input>
            <button
              // size="subscribe"
              // variant="subscribe"
              className="lg:font-inter text-14-30 lg:text-16-30"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="m-auto grid grid-cols-2 gap-3.75 sm:max-w-216 sm:grid-cols-3 sm:gap-5.5 lg:max-w-265 lg:gap-7.5">
        <div className="bg-background flex items-center gap-2.5 rounded-[5px] p-2.5 sm:p-[20px] lg:p-[15px]">
          <div className="flex size-6 items-center justify-center rounded-sm bg-orange-100 sm:size-11 lg:size-19.25">
            <Image
              className="w-[10.29px] sm:w-5 lg:w-7.5"
              src="/speaker-filled-audio-tool 1.svg"
              alt="Next.js logo"
              width={10.29}
              height={10.29}
              priority
            />
          </div>
          <p className="font-metropolis text-sm font-semibold">Audio Classes</p>
        </div>
        <div className="bg-background flex items-center gap-2.5 rounded-[5px] p-2.5 sm:p-[20px] lg:p-[15px]">
          <div className="flex size-6 items-center justify-center rounded-sm bg-purple-100 sm:size-11 lg:size-19.25">
            <Image
              className="w-[10.29px] sm:w-5 lg:w-7.5"
              src="/live-streaming 1.svg"
              alt="Next.js logo"
              width={10.29}
              height={10.29}
              priority
            />
          </div>
          <p className="font-metropolis text-sm font-semibold">Live Classes</p>
        </div>
        <div className="bg-background col-span-full flex items-center gap-2.5 rounded-[5px] p-2.5 max-sm:justify-self-center sm:col-span-1 sm:p-[20px] lg:p-[15px]">
          <div className="flex size-6 items-center justify-center rounded-sm bg-green-100 sm:size-11 lg:size-19.25">
            <Image
              className="w-[10.29px] sm:w-5 lg:w-7.5"
              src="/play-button 1.svg"
              alt="Next.js logo"
              width={10.29}
              height={10.29}
              priority
            />
          </div>
          <p className="font-metropolis text-sm font-semibold max-sm:pr-2.5">
            Recorded Classes
          </p>
        </div>
      </div>
    </section>
  );
}
