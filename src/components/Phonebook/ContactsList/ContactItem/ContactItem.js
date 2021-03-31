function ContacItem({ item, HandleDelete }) {
  return (
    <p >
      <span>
        {item.name}: {item.number}
      </span>

      <button data-id={item.id} type="button" onClick={HandleDelete}>
        delete
      </button>
    </p>
  );
}

export default ContacItem;
