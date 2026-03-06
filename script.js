var userAlice = {
    id: 42,
    name: "Alice",
    email: "alice@email.com",
    age: 25,
    isActive: true,
};
function formatUser(user) {
    return "[".concat(user.id, "] ").concat(user.name, " (").concat(user.email, ") ").concat("-", " ").concat("age", " ").concat(user.age, " ").concat(user.isActive);
}
// let formatUser(userAlice)
var array = [
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
// function filterActiveUsers([]){
//   if ([].isActive == true){
//   }
// }
