import Item from "../item/item";
function body({ transactions }) {
  console.log();
  return (
    <tbody>
      {transactions.map((index) => (
        <Item key={index.id} item={index} />
      ))}
    </tbody>
  );
}
export default body;
