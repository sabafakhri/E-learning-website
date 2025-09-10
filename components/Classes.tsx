import Image from "next/image";
import { Button } from "./ui/button";

export default function Classes() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-3.75 px-5 py-10 text-center sm:gap-5">
        <h2 className="text-45-55 font-bold max-sm:hidden">
          High quality video, <br /> audio & live classes
        </h2>
        <h2 className="text-28-32 sm:text-35-40 font-bold sm:hidden">
          High quality video, audio & live classes
        </h2>
        <p className="text-16-24 lg:text-16-30 mb-7.5 max-w-210 font-normal text-gray-600 sm:mb-10">
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video image with considerably more than
          480 vertical scan lines or 576 vertical lines is considered
          high-definition.
        </p>
        <Button size="classes" variant="classes">
          Visit Courses
        </Button>
      </div>
      <div className="m-auto sm:max-w-216 lg:max-w-265">
        <div className="bg-[url(/pexels-vanessa-garcia-6325959 1.svg)] mask-[url(/next.svg)]">
          {/* <Image
            className="border-7.5 w-full rounded-[20px] border-white"
            src="/pexels-vanessa-garcia-6325959 1.svg"
            alt="Next.js logo"
            width={1000}
            height={570}
            priority
          /> */}
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
