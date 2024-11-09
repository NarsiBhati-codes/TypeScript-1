// let user: {
//   firstName: string;
//   lastName: string;
//   age: number;
// } = {
//   firstName: "Narsi",
//   lastName: "Bhati",
//   age: 24,
// };

// function greet(user: {
//   firstName: string;
//   lastName: string;
//   age: number;
// }): void {
//   console.log(
//     `Hello ${user.firstName} ${user.lastName} you age is : ${user.age}`
//   );
// }

// greet(user);

// ------------------------------------------------

// Types in TypeScript

type UserType = {
  firstName: string;
  lastName: string;
  age: number;
};

let user: UserType = {
  firstName: "Narsi",
  lastName: "Bhati",
  age: 24,
};

function greet(user: UserType): void {
  console.log(
    `Hello ${user.firstName} ${user.lastName} you age is : ${user.age}`
  );
}

greet(user);
