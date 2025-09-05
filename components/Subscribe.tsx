import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <div className="text-background dark:text-foreground flex h-105 flex-col items-center justify-center gap-5 bg-gray-900">
      <h2 className="text-45 font-metropolis text-center">
        Subscribe For Get Update <br /> Every New Courses
      </h2>
      <div>
        <p className="text-16 font-metropolis text-background/70 mb-10 font-normal">
          20k+ students daily learn with Eduvi. Subscribe for new courses.
        </p>
        <div className="focus-within:ring-ring/50 focus-within:ring-offset-background flex rounded-[10px] transition-shadow focus-within:ring-[3px]">
          <Input
            className="peer text-16 placeholder:text-background dark:placeholder:text-foreground font-metropolis h-15 rounded-[10px] rounded-r-none border-none bg-white/20 font-medium focus-visible:border-none focus-visible:ring-0"
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
