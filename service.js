const fs = require('fs')


function getAllData() {
    const json = fs.readFileSync('./storage.json');
    const arr = JSON.parse(json);
    return arr
}

function getDataById(id) {
    const json = fs.readFileSync('./storage.json');
    const arr = JSON.parse(json);
    const filt = arr.filter(el => el.id == id)
    return filt
}

function createNewData(label, category, priority) {
    const json = fs.readFileSync('./storage.json');
    const arr = JSON.parse(json);

    const newObj = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority,
    }

    arr.push(newObj);
    fs.writeFileSync('./storage.json', JSON.stringify(arr))
    return arr
}

function updateData(id, label, category, priority) {
    const json = fs.readFileSync('./storage.json');
    const arr = JSON.parse(json);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr[i].id = id
            arr[i].label = label
            arr[i].category = category
            arr[i].priority = priority
        }
    }
    
    fs.writeFileSync('./storage.json', JSON.stringify(arr))
    return arr
}



function deleteData(id) {
    const json = fs.readFileSync('./storage.json');
    const arr = JSON.parse(json);
    const filt = arr.filter(el => el.id != id)
    fs.writeFileSync('./storage.json', JSON.stringify(filt))
    return filt
}




module.exports = { getAllData, getDataById, createNewData, updateData, deleteData }