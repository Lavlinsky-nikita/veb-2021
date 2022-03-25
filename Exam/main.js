// При загрузке страници вызывается функция, которая запрашивает список ресторанов и рендерит их на странице
window.onload = () => {
    getRestarants()
}
function getRestarants() {
    // Вызываем функцию получения данных с сервера и потом передаём эти данные в функции для рендера данных в полях формы
    getData().then(data => {
        renderAriaList(data)
        renderDistrictList(data)
        renderTypeList(data)
    })
    // Вызываем функцию запроса ресторанов с сервера и потом рендерим их в таблицу со списком ресторанов
    getData().then(data => sort(data)).then(res => renderTable(res))
}

// Запрос данных с сервера

async function getData() {
    // Ссылка на которую отправляется запрос
    const url = 'http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants?api_key=ae43c2dd-0ded-41ca-b2c6-90ae98fba956'
    // Запрашиваем данные и помещаем их в переменную response
    let response = await fetch(url);
    // Приводим данные к формату json
    let commits = await response.json();
    // Возвращаем из функции данные в формета json
    return commits
}

// Рендер полей формы

function renderAriaList(records) {
    // Сохраняем в переменную ссылка на элемент страницы с id adminArea
    let admAreaList = document.getElementById('adminArea');
    // Создаем массив для заполнения даннымии административных округов
    let arrayAdmArea = [0];
    // Флаг, для проверки, если ли уже этот элемент в массиве
    let flag;
    // Цикл для заполнения массива
    records.forEach(record => {
        // Проверяем есть ли этот элемент уже в массиве
        for (let i = 0; i < arrayAdmArea.length; i++) {
            if (record.admArea != arrayAdmArea[i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        // Если элемента нет в списке, то добавляем элемент в массив и рендерим и сбрасываем флаг
        if (flag == true) {
            // Добавляем на старницу элемент
            admAreaList.append(areaElement(record));
            // Сбрасываем флаг
            flag = 0;
            // Добавляем в массив
            arrayAdmArea.push(record.admArea);
        }
    });
}
// Рендер элемента в список
function areaElement(record) {
    // Сохраняем ссылку на элемент страницы с опцией выбора
    let itemAdmArea = document.createElement('option');
    // Добавляем в этот элемент название административного округа
    itemAdmArea.innerHTML = record.admArea;
    // Возвращаем этот элемент из функции
    return itemAdmArea;
}
// Рендер списка районов (так же как две функции вверху)
function renderDistrictList(records) {
    let districtList = document.getElementById('district');
    let arrayDistrict = [0];
    let flag;
    records.forEach(record => {
        for (let i = 0; i < arrayDistrict.length; i++) {
            if (record.district != arrayDistrict[i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }

        }
        if (flag == true) {
            districtList.append(districtElement(record));
            flag = 0;
            arrayDistrict.push(record.district);
        }
    })
}

function districtElement(record) {
    let itemDistrict = document.createElement('option');
    itemDistrict.innerHTML = record.district;
    return itemDistrict;
}
// Рендер списка типов, так же как функции на верху
function renderTypeList(records) {
    let typeList = document.getElementById('type');
    let arrayType = [0];
    let flag;
    records.forEach(record => {
        for (let i = 0; i < arrayType.length; i++) {
            if (record.typeObject != arrayType[i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }

        }
        if (flag == true) {
            typeList.append(typeElement(record));
            flag = 0;
            arrayType.push(record.typeObject);
        }
    })
}

function typeElement(record) {
    let itemType = document.createElement('option');
    itemType.innerHTML = record.typeObject;
    return itemType;
}

// Создание таблицы

// Сортировка данных таблицы
function sort(jsonData) {
    // Сортируем данные и помещаем их в переменную data и возвращаем из функции
    let data = jsonData.sort((a, b) => {
        return b.rate - a.rate;
    });
    return data;
}

// Рендер таблицы
function renderTable(restaurants) {
    // Сохраняем ссылку на элемент с id table-restaurant
    let tableRestaraunts = document.getElementById('table-restaraunt');
    // Цикл, который рендерит 10 элементов из списка
    let i = 0;
    for (let restaurant of restaurants) {
        if (i == 10) {
            break;
        } else {
            // Добавляем в элемент таблицы строку с рестораном
            tableRestaraunts.append(tableElement(restaurant));
            i++;
        }
    }
}

// Рендер строки таблицы
function tableElement(restaurant) {
    // Создаём элемент строки таблицы
    let itemTableRestaurants = document.createElement('tr');
    // Добавляем классы к элементу для применения стилей
    const list = ['align-middle', 'border-2'];
    itemTableRestaurants.classList.add(...list);
    // Добавляем в строку 4 элемента (Имя, тип, адресс и кнопку)
    itemTableRestaurants.append(elName(restaurant));
    itemTableRestaurants.append(elType(restaurant));
    itemTableRestaurants.append(elAddress(restaurant));
    itemTableRestaurants.append(elButton());
    // Возвращаем строку из функции
    return itemTableRestaurants;
}

function elName(restaurant) {
    // Создаем элемент ячейки
    let itemName = document.createElement('td');
    // Добавляем в него название ресторана
    itemName.innerHTML = restaurant.name;
    // Возвращаем ячейку с именем
    return itemName;
}

function elType(restaurant) {
    // Создаем элемент ячейки
    let itemType = document.createElement('td');
    // Добавляем в него тип ресторана
    itemType.innerHTML = restaurant.typeObject;
    // Возвращаем ячейку с типом
    return itemType;
}

function elAddress(restaurant) {
    // Создаем элемент ячейки
    let itemAddress = document.createElement('td');
    // Добавляем в него адресс ресторана
    itemAddress.innerHTML = restaurant.address;
    // Возвращаем ячейку с адрессом
    return itemAddress;
}

function elButton() {
    // Создаем элемент ячейки
    let itemButton = document.createElement('td');
    // Создаём элемент кнопки
    let elementButton = document.createElement('button');
    // Добавляем в кнопку текст
    elementButton.innerHTML = 'Выбрать';
    // Добавляем к кнопке классы для стилизации
    const list = ['btn', 'btn-success'];
    elementButton.classList.add(...list);
    // Добавляем в ячейку кнопку
    itemButton.append(elementButton);
    // Возвращает ячейку с кнопкой
    return itemButton;
}