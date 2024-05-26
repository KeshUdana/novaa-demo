import UserSteps from "@/components/UserSteps";

export const metadata = {
  title: "NOVAA demo - Buddila",
};

export default function BuddilaRuwanpathirana() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-balance text-center">
      {/* Delete this if you want ! */}
      <h1 className="mb-8 text-4xl sm:text-5xl">Your Progress</h1>
      <UserSteps />
      Buddila{"'"}s page.
    </main>
  );
}
