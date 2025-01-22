import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/p1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/p2">Meal 2</Link>
      </p>
    </main>
  );
}
