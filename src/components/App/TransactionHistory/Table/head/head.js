function head({ column1, column2, column3 }) {
  return (
    <thead>
      <tr>
        <th>{column1}</th>
        <th>{column2}</th>
        <th>{column3}</th>
      </tr>
    </thead>
  );
}
export default head;
