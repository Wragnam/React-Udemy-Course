export default function Log({ turns, players }) {
  return (<ol id="log">
    {turns.map(({square, player}) => {
        const block = `{${square.row}, ${square.col}}`;
        
        return(<li key={block}>
            {players[player]} selected: {block}
        </li>)
    })}
  </ol>);
}
