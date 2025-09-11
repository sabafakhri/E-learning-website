import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface CardProps {
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
}

const CardNumber = ({ title, description, action, icon }: CardProps) => {
  return (
    <Card className="flex items-center justify-center rounded-[15px]">
      <CardHeader>
        <div>{icon}</div>
        <CardTitle className="text-25-100 font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-16-30 text-center">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button variant="ClassDetails" size="ClassDetails">
            {action}
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default CardNumber;
