export default function Log({ turns }) {
  return (<ol id="log">
    {turns.map(({square, player}) => {
        const block = `{${square.row}, ${square.col}}`;
        
        return(<li key={block}>
            {player} selected: {block}
        </li>)
    })}
  </ol>);
}
