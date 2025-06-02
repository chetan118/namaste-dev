const users = [
  { firstName: "akshay", lastName: "saini", age: 39 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 39 },
];

const youngUsers = users.reduce((youngUsers, user) => {
  if (user.age < 50) {
    youngUsers.push(user.firstName);
  }
  return youngUsers;
}, []);

console.log(youngUsers);

const oldUsers = users
  .filter((user) => user.age >= 50)
  .map((user) => user.firstName);

console.log(oldUsers);

const ageGroups = users.reduce(function (acc, user) {
  if (acc[user.age]) {
    ++acc[user.age];
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});

console.log(ageGroups);
