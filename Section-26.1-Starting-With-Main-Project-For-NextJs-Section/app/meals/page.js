import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/p1">Meal 1</Link>
      <Link href="/meals/p2">Meal 2</Link>
    </main>
  );
}
