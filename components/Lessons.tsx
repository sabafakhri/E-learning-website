import CardNumber from "./CardNumber";
import { One } from "./icons";
import { Button } from "./ui/button";

const Lessons = () => {
  return (
    <section>
      <h2 className="text-28-32 text-center font-bold">
        Qualified lessons for students
      </h2>
      <p className="text-16-26 text-center">
        A lesson or class is a structured period of time where learning is
        intended to occur. It involves one or more students being taught by a
        teacher or instructor.
      </p>
      <Button variant="EducationSteps" size="EducationSteps">
        Kindergarten
      </Button>
      <Button variant="EducationSteps" size="EducationSteps">
        High School
      </Button>
      <Button variant="EducationSteps" size="EducationSteps">
        College
      </Button>
      <CardNumber
        icon={<One />}
        title="Standard One"
        description="Standard 1 is a foundation Standard that reflects 7 important
          concepts..."
        action="Class Details"
      />
    </section>
  );
};

export default Lessons;
