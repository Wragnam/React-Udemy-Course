import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptors = ["Fundamental", "Core", "Crucial"];

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const description = reactDescriptors[genRandomInt(reactDescriptors.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
