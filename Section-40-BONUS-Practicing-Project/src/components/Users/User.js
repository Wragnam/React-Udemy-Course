import Card from "../UI/Card";

export default function User({ name, age }) {
  return (
    <Card>
      <li>
        {name} ({age} years old)
      </li>
    </Card>
  );
}
