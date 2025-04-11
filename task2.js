// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
const nameInput = document.getElementById("userNameInput");
const sendBtn = document.getElementById("getUserButton");
const userCity = document.getElementById("userCity");

async function findUserCity(name) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch");
    const users = await res.json();

    const wantedUser = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    userCity.textContent = wantedUser?.address.city || "There is no such user";
  } catch (e) {
    console.log(e);
  }
}

sendBtn.addEventListener("click", function () {
  const userName = nameInput.value;
  if (!userName){
    alert("Please, enter the user name")
    return
  }
  findUserCity(userName);
});
