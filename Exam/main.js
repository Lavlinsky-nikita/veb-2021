window.onload = () => {
    getRestarants()
}
function getRestarants() {

    getData().then(data => {
        renderAriaList(data)
        renderDistrictList(data)
        renderTypeList(data)
    })

    getData().then(data => sort(data)).then(res => renderTable(res))
}

// Запрос данных

async function getData() {
    const url = 'http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants?api_key=ae43c2dd-0ded-41ca-b2c6-90ae98fba956'
    let response = await fetch(url);

    let commits = await response.json();

    return commits
}

// Рендер полей формы

function renderAriaList(records) {
    let admAreaList = document.getElementById('adminArea');
    let arrayAdmArea = [0];
    let flag;

    records.forEach(record => {
        for (let i = 0; i < arrayAdmArea.length; i++) {
            if (record.admArea != arrayAdmArea[i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }

        }
        if (flag == true) {
            admAreaList.append(areaElement(record));
            flag = 0;
            arrayAdmArea.push(record.admArea);
        }
    });
}

function areaElement(record) {
    let itemAdmArea = document.createElement('option');
    itemAdmArea.innerHTML = record.admArea;
    return itemAdmArea;
}

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

function sort(jsonData) {
    let data = jsonData.sort((a, b) => {
        return b.rate - a.rate;
    });
    return data;
}

function renderTable(restaurants) {
    let tableRestaraunts = document.getElementById('table-restaraunt');
    let i = 0;
    for (let restaurant of restaurants) {
        if (i == 10) {
            break;
        } else {
            tableRestaraunts.append(tableElement(restaurant));
            i++;
        }
    }
}

function tableElement(restaurant) {
    let itemTableRestaurants = document.createElement('tr');
    const list = ['align-middle', 'border-2'];
    itemTableRestaurants.classList.add(...list);
    itemTableRestaurants.append(elName(restaurant));
    itemTableRestaurants.append(elType(restaurant));
    itemTableRestaurants.append(elAddress(restaurant));
    itemTableRestaurants.append(elButton());
    return itemTableRestaurants;
}

function elName(restaurant) {
    let itemName = document.createElement('td');
    itemName.innerHTML = restaurant.name;
    return itemName;
}

function elType(restaurant) {
    let itemType = document.createElement('td');
    itemType.innerHTML = restaurant.typeObject;
    return itemType;
}

function elAddress(restaurant) {
    let itemAddress = document.createElement('td');
    itemAddress.innerHTML = restaurant.address;
    return itemAddress;
}

function elButton() {
    let itemButton = document.createElement('td');
    let elementButton = document.createElement('button');
    elementButton.innerHTML = 'Выбрать';
    const list = ['btn', 'btn-success'];
    elementButton.classList.add(...list);
    itemButton.append(elementButton);
    return itemButton;
}