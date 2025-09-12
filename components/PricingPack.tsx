
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Tag } from "lucide-react";

type Feature = {
  label: string;
  active: boolean;
};

type PricingPackProps = {
  title: string;
  features: Feature[];
  price: string;
};

const PricingPack = ({ title, features, price }: PricingPackProps) => {
  return (
    <Card className="w-[400px] h-[600px] rounded-2xl border border-[var(--color-gray-300)] shadow-sm flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 py-8 px-6 min-h-[90px]">
        <Tag className="h-7 w-7 text-[var(--color-purple-900)]" />
        <CardTitle className="text-2xl font-bold ">{title}</CardTitle>
      </CardHeader>
      {/* خط جداکننده */}
      <div className="w-full h-px" style={{ backgroundColor: 'var(--color-gray-300)' }} />
      <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3`}
          >
            {feature.active ? (
              <CheckCircle className="text-[var(--color-green-tick)] h-5 w-5" />
            ) : (
              <XCircle className="text-[var(--color-orange-900)] h-5 w-5" />
            )}
            <span
              style={{
                color: feature.active ? 'var(--color-gray-900)' : 'var(--color-gray-600)',
                fontWeight: feature.active ? 700 : 400,
              }}
            >
              {feature.label}
            </span>
          </div>
        ))}
        <p className="text-2xl font-bold mt-4">{price}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-[220px] h-[2.5rem] mx-auto border border-[var(--color-purple-900)] text-[var(--color-purple-900)] hover:bg-[var(--color-purple-900)] hover:text-background hover:shadow-lg hover:border-[var(--color-purple-900)]"
        >
          Purchase Course
        </Button>
      </CardFooter>
    </Card>
  );
};


const pricingData = [
  {
    title: "Basic Pack",
    price: "$200",
    features: [
      { label: "3 HD video lessons & tutorials", active: true },
      { label: "1 Official exam", active: true },
      { label: "100 Practice questions", active: true },
      { label: "1 Month subscriptions", active: true },
      { label: "1 Free book", active: true },
      { label: "Practice quizzes & assignments", active: false },
      { label: "In depth explanations", active: false },
      { label: "Personal instructor Assistance", active: false },
    ],
  },
  {
    title: "Standard Pack",
    price: "$350",
    features: [
      { label: "10 HD video lessons & tutorials", active: true },
      { label: "3 Official exams", active: true },
      { label: "300 Practice questions", active: true },
      { label: "3 Month subscriptions", active: true },
      { label: "2 Free books", active: true },
      { label: "Practice quizzes & assignments", active: true },
      { label: "In depth explanations", active: false },
      { label: "Personal instructor Assistance", active: false },
    ],
  },
  {
    title: "Premium Pack",
    price: "$500",
    features: [
      { label: "All video lessons & tutorials", active: true },
      { label: "Unlimited Official exams", active: true },
      { label: "All Practice questions", active: true },
      { label: "12 Month subscriptions", active: true },
      { label: "5 Free books", active: true },
      { label: "Practice quizzes & assignments", active: true },
      { label: "In depth explanations", active: true },
      { label: "Personal instructor Assistance", active: true },
    ],
  },
];


const PricingPackList = () => (
  <div className="
    grid grid-cols-1 gap-2 mt-20 mb-20 
    sm:grid-cols-2 
    lg:grid-cols-3 
    place-items-center
  ">
    {pricingData.map((pack, idx) => (
      <PricingPack key={idx} {...pack} />
    ))}
  </div>
);

export default PricingPackList;
