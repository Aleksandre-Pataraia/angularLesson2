interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

let uAlice: User = {
  id: 42,
  name: "Alice",
  email: "alice@email.com",
  age: 25,
  isActive: true,
}

function formatUser(e: User): string {
  return `[${e.id}] ${e.name} (${e.email}) ${"-"} ${"age"} ${e.age} ${e.isActive}`;
};

let showuAlice = formatUser(uAlice);
console.log(showuAlice);


let listArray = [
  {
    id: 201,
    name: "George",
    email: "george@email.com",
    age: 23,
    isActive: true,
  },
  {
    id: 201,
    name: "George",
    email: "george@email.com",
    age: 23,
    isActive: true,
  },
  {
    id: 117,
    name: "Alex",
    email: "alex@email.com",
    age: 33,
    isActive: true,
  },
  {
    id: 19,
    name: "Gregory",
    email: "greg@email.com",
    age: 18,
    isActive: false,
  },
  {
    id: 28,
    name: "Alex",
    email: "alex@email.com",
    age: 26,
    isActive: false,
  },
];

function filterActiveUsers(e: User[]){
  let filteredArray = e.filter((item: User) => item.isActive === true);
  return filteredArray;
};

let seeFilteredArray = filterActiveUsers(listArray);
console.log(seeFilteredArray);
