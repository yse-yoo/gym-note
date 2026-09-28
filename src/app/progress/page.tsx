import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function ProgressPage() {
  return (
    <>
      <PageHeader title="Progress" subtitle="How your training adds up" />
      <p className="text-zinc-500 text-sm bg-zinc-900 rounded-2xl p-6 border border-zinc-800 text-center">
        Coming soon.
      </p>
    </>
  );
}
