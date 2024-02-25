//1

/*
Ваша задача - создать систему обработки заказов с использованием callback-функций.
Каждый заказ имеет свой уникальный номер, сумму и состояние (выполнен или не выполнен).
Вам нужно реализовать функции для добавления нового заказа, изменения состояния заказа и вывода информации о заказах.

// Объект для хранения заказов
const orders = {};

function addOrder(orderNumber, amount, callback) {
  Если заказа нет - добавить в список заказов с полем completed = false и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказ существует
}

function completeOrder(orderNumber, callback) {
  Если заказ существует - добавить в список заказов с полем completed = true и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказа нет
}

function listOrders(callback) {
  Пройтись по объекту заказов и вывести информацию в виде:
  Заказ #1 - Сумма: 50, выполнен
  Заказ #2 - Сумма: 30, не выполнен

  Сначала отформатируйте каждый заказ в таком виде, затем вызовите колбэк с отформатированным ордер-листом
}

// Использование системы обработки заказов
addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));
*/

const orders = {};

function addOrder(orderNumber, amount, callback) {
  if (!orders[orderNumber]) {
    orders[orderNumber] = {
      amount: amount,
      completed: false,
    };
    callback(`Заказ #${orderNumber} добавлен. Сумма: ${amount}.`);
  } else {
    callback(`Заказ #${orderNumber} уже существует.`);
  }
}

function completeOrder(orderNumber, callback) {
  if (orders[orderNumber]) {
    orders[orderNumber].completed = true;
    callback(`Заказ #${orderNumber} выполнен.`);
  } else {
    callback(`Заказ #${orderNumber} не существует.`);
  }
}

function listOrders(callback) {
  let formattedOrderList = "";
  for (const orderNumber in orders) {
    const order = orders[orderNumber];
    const status = order.completed ? "выполнен" : "не выполнен";
    formattedOrderList += `Заказ #${orderNumber} - Сумма: ${order.amount}, ${status}\n`;
  }
  callback(formattedOrderList);
}

addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));

//2
/*
Ваша задача - создать систему для загрузки данных о пользователях из удаленного сервера с использованием промисов.
У вас есть URL сервера, который предоставляет данные о пользователях в формате JSON.
Вам нужно реализовать функцию для загрузки данных и обработать результат.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(....)
      .then(response => {
       ....
      })
      .then(data => {
        ....
      })
      .catch(error => {
       .....
      });
  });
}

// Использование промиса для загрузки данных
loadUserData()
  .then(users => {
    console.log('Данные о пользователях получены:', users);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });
 */

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(usersDataURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

loadUserData()
  .then((users) => {
    console.log("Данные о пользователях получены:", users);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });

//3
// Переписать loadUserData с помощью async/await

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

async function loadUserData() {
  try {
    const response = await fetch(usersDataURL);

    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function fetchData() {
  try {
    const users = await loadUserData();
    console.log("Данные о пользователях получены:", users);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
}

fetchData();

//4
/*

Ваша задача - создать систему для одновременной загрузки данных о пользователях и их постах с использованием Promise.all.
 У вас есть два URL: один для данных о пользователях, а другой для их постов в формате JSON.
 Вам нужно реализовать функцию для одновременной загрузки обоих наборов данных и обработки результатов.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {}
function loadPostsData() {}

Promise.all([loadUserData(), loadPostsData()]) // здесь надо вывести данные в случае успеха и в случае ошибки

Затем то же самое с Promise.race()

*/

const usersDataURL = "https://jsonplaceholder.typicode.com/users";
const postsDataURL = "https://jsonplaceholder.typicode.com/posts";

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(usersDataURL)
      .then((response) => {
        if (!response.ok) {
          reject(`Failed to fetch users data. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((userData) => resolve(userData))
      .catch((error) => reject(error));
  });
}

function loadPostsData() {
  return new Promise((resolve, reject) => {
    fetch(postsDataURL)
      .then((response) => {
        if (!response.ok) {
          reject(`Failed to fetch posts data. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((postsData) => resolve(postsData))
      .catch((error) => reject(error));
  });
}

Promise.all([loadUserData(), loadPostsData()])
  .then(([userData, postsData]) => {
    console.log("Users data:", userData);
    console.log("Posts data:", postsData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

Promise.race([loadUserData(), loadPostsData()])
  .then((winnerData) => {
    console.log("Winner data:", winnerData);
  })
  .catch((error) => {
    console.error("Error from the winner:", error);
  });

//5
/*
Вы - анонимусы, и вам необходимо провести DDos-атаку на https://jsonplaceholder.typicode.com
Раз в полсекунды отправляйте рандомный запрос на сервер (либо /users, либо /posts)
*/

function sendRandomRequest() {
  const endpoint = Math.random() < 0.5 ? "/users" : "/posts";
  const url = `https://jsonplaceholder.typicode.com${endpoint}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(`Random request to ${url}`, data))
    .catch((error) => console.error(`Error sending request to ${url}`, error));
}

setInterval(sendRandomRequest, 500);

//6
/*
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

setTimeout(() => {
  console.log('3');
  Promise.resolve().then(() => console.log('4'));
}, 0);

Promise.resolve().then(() => {
  console.log('5');
  setTimeout(() => console.log('6'), 0);
});

Promise.resolve().then(() => {
  console.log('7');
});

console.log('8');

Напишите порядок вывода чисел в консоль с ОБЪЯСНЕНИЯМИ ПРИЧИНЫ

- ВЫВОДИТСЯ 1 (синхронщина)
- ВЫВОДИТСЯ 8 (синхронщина)
- 2-ка идет в очередь по таймеру
- 3 и 4 идут в очередь по таймеру
- ВЫВОДИТСЯ 5 и тут же 6-ка идет в очередь по таймеру
- ВЫВОДИТСЯ 7 
Остались только те, что в очереди, выходят по порядку также как и вошли в неё:
- ВЫВОДИТСЯ 2
- ВЫВОДИТСЯ 3
- ВЫВОДИТСЯ 4 
- ВЫВОДИТСЯ 6 

Итого:
1
8
5
7
2
3
4
6

*/
