export const people = [
  {
    id: 1,
    name: "didle_didle",
    age: 28,
    gender: "male",
  },
  {
    id: 2,
    name: "HI",
    age: 12,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
