const names = ["Patrick", "Piet"];

export default function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>ReactJs is awesome!</p>
    </div>
  );
}
