import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <div className="text-background dark:text-foreground font-metropolis flex flex-col items-center justify-center gap-3.75 bg-gray-900 text-center max-sm:px-5 max-sm:py-10 sm:h-105 sm:gap-5">
      <h2 className="text-45 font-bold max-sm:hidden">
        Subscribe For Get Update Every New Courses
      </h2>
      <h2 className="text-28 font-bold sm:hidden">
        Subscribe For Get Update Every New Courses
      </h2>
      <div>
        <p className="text-16 text-background/70 dark:text-foreground/70 mb-7.5 font-normal sm:mb-10">
          20k+ students daily learn with Eduvi. Subscribe for new courses.
        </p>
        <div className="sm:focus-within:ring-ring/50 sm:focus-within:ring-offset-background flex transition-all duration-300 max-sm:flex-col max-sm:gap-5 sm:rounded-[10px] sm:focus-within:ring-[3px]">
          <Input
            className="peer text-16 placeholder:text-background dark:placeholder:text-foreground h-12.5 rounded-[5px] border-none bg-white/20 font-medium sm:h-15 sm:rounded-[10px] sm:rounded-r-none sm:focus-visible:border-none sm:focus-visible:ring-0"
            placeholder="enter your email"
          ></Input>
          <Button size="subscribe" variant="rightsideborder">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
