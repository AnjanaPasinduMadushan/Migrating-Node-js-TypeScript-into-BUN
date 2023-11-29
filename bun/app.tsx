interface Person {
  name: string;
  birthYear: number;

}

const calculateAgeIn2030 = (person: Person): number => {
  const ageIn2030 = 2030 - person.birthYear;
  return ageIn2030;
};

const person: Person = {
  name: "John",
  birthYear: 1990,
};

const ageIn2030 = calculateAgeIn2030(person);

console.log(`${person.name} will be ${ageIn2030} years old in 2030.`);