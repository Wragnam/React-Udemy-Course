export default function Log({ turns }) {
 
  return (<ol id="log">
    {turns.map(({square, player}) => {
        const block = "{" + square.row + "," + square.col + "}";
        
        return(<li key={block}>
            Player {player} played: {block}
        </li>)
    })}
  </ol>);
}
