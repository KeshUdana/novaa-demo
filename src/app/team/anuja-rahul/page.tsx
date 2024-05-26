import UserSteps from "@/components/UserSteps";
import "./index.scss";
import Paths from "@/components/Paths";

export const metadata = {
  title: "NOVAA demo - Anuja",
};

export default function AnujaRahul() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-balance text-center">
      <Paths namePath="anuja-rahul" />
      {/* Delete this if you want ! */}
      <h1 className="mb-8 text-4xl sm:text-5xl">Your Progress</h1>
      <UserSteps />
      Anuja{"'"}s page.
    </main>
  );
}
