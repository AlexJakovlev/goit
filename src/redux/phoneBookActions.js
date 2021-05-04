const add = (value) => {
  // console.log(value, "  -- add -- ");
  return {
    type: "phoneBook/add",
    payload: {
      value,
    },
  };
};

export const dell = (value) => {
  return {
    type: "phoneBook/dell",
    payload: {
      value,
    },
  };
};
export const filter = (value) => {
  // console.log(value, " ---   filter Actions");
  return {
    type: "phoneBook/filter",
    payload: {
      value,
    },
  };
};
const actions = {
  add,
  dell,
  filter,
};
export default actions;
