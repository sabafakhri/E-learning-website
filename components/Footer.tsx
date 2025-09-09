import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-auto px-5 py-10 sm:max-w-[943px] lg:max-w-[1278px]">
      <div className="mx-auto gap-10 sm:flex">
        <section className="flex flex-col gap-6 sm:w-1/5">
          <Image
            src="/Eduvi-Logo.svg"
            alt="Next.js Logo"
            width={114}
            height={30}
          />
          <div className="flex gap-4">
            <Image
              src="/Facebook-Logo.svg"
              alt="Next.js Facebook-Logo"
              width={22}
              height={22}
            />
            <Image
              src="/Instagram-Logo.svg"
              alt="Next.js Instagram-Logo"
              width={36}
              height={36}
            />
            <Image
              src="/Twitter-Logo.svg"
              alt="Next.js Twitter-Logo"
              width={22}
              height={18}
            />
            <Image
              src="/Linkedin-Logo.svg"
              alt="Next.js Linkedin-Logo"
              width={22}
              height={19}
            />
          </div>

          <p className="font-inter sm:text-sm">
            © <span className="font-metropolis">2021 Eduvi.co</span>
          </p>
          <p className="font-metropolis text-16-26 text-muted-foreground sm:text-14-26">
            Eduvi is a registered <br />
            trademark of Eduvi.co
          </p>
        </section>
        <section className="mt-5 grid grid-cols-2 gap-6 sm:mt-0 sm:w-4/5 sm:grid-cols-4 sm:gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-inter text-[22px] font-semibold sm:text-lg">
              Community
            </p>
            <ul className="font-metropolis text-muted-foreground flex flex-col gap-3">
              <li>Learners</li>
              <li>Parteners</li>
              <li>Developers</li>
              <li>Transactions</li>
              <li>Blog</li>
              <li>Teaching Center</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-inter text-[22px] font-semibold sm:text-lg">
              Courses
            </p>
            <ul className="font-metropolis text-muted-foreground flex flex-col gap-3">
              <li>Classroom courses</li>
              <li>Virtual classroom courses</li>
              <li>E-learning courses</li>
              <li>Video Courses</li>
              <li>Offline Courses</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-inter text-[22px] font-semibold sm:text-lg">
              Quick links
            </p>
            <ul className="font-metropolis text-muted-foreground flex flex-col gap-3">
              <li>Home</li>
              <li>Professional Education</li>
              <li>Courses</li>
              <li>Admissions</li>
              <li>Testimonial</li>
              <li>Programs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-inter text-[22px] font-semibold sm:text-lg">
              More
            </p>
            <ul className="font-metropolis text-muted-foreground flex flex-col gap-3">
              <li>Press</li>
              <li>Investors</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
