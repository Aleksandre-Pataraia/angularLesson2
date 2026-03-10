var uAlice = {
    id: 42,
    name: "Alice",
    email: "alice@email.com",
    age: 25,
    isActive: true,
};
function formatUser(e) {
    return "[".concat(e.id, "] ").concat(e.name, " (").concat(e.email, ") ").concat("-", " ").concat("age", " ").concat(e.age, " ").concat(e.isActive);
}
;
var showuAlice = formatUser(uAlice);
console.log(showuAlice);
var listArray = [
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
function filterActiveUsers(e) {
    var filteredArray = e.filter(function (item) { return item.isActive.valueOf = true; });
    return filteredArray;
}
;
var seeFilteredArray = filterActiveUsers(listArray);
console.log(seeFilteredArray);
