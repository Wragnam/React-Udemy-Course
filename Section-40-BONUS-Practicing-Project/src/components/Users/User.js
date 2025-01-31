import Card from "../Card/Card";

export default function User({ name, age }) {
  return (
    <Card>
      <li>
        {name} ({age} years old)
      </li>
    </Card>
  );
}
