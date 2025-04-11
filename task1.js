// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js
const ul = document.querySelector(".usersList");

async function getUserNames() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    const users = await res.json();
    users.forEach(renderUser);
  } catch (e) {
    console.log(e);
  }
}
getUserNames();

function renderUser(user) {
  const li = document.createElement("li");
  li.textContent = user.name;
  ul.appendChild(li);
}
//  const user = {
//     name: "Alex",
//     age: 37
//  }
//  renderUser(user)
