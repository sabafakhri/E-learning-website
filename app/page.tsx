import Classes from "@/components/Classes";
import JoinAsATeacher from "@/components/JoinAsATeacher";
import Lessons from "@/components/Lessons";

export default function Home() {
  return (
    <div className="flex flex-col gap-25">
      <Classes />
      <Lessons />
      <JoinAsATeacher />
    </div>
  );
}
