import Link from "next/link";

export default async function MealPage({ params }) {
  const p = await params;
  return (
    <main>
      <h1>Meal Page {p.slug} </h1>
      <p>
        <Link href="/meals">Back</Link>
      </p>
    </main>
  );
}
