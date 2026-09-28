import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function WorkoutPage() {

  return (
    <>
      <PageHeader title="Workout" subtitle="Today's sets" />
      <p className="text-zinc-500 text-sm bg-zinc-900 rounded-2xl p-6 border border-zinc-800 text-center">
        Coming soon.
      </p>
    </>
  );
}
