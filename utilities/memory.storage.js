var memoryStorage = require("memorystorage");
var notesAppStorage = new memoryStorage("notes-app");

exports.getKeys = (notesAppStorage) => {
  let keys = []
  for (let i = 0; i < notesAppStorage.length; i++) {
    let key = notesAppStorage.key(i);
    keys.push(key)
  }
  return keys
};
exports.getValues = (notesAppStorage) => {
  let values = []
  for (let i = 0; i < notesAppStorage.length; i++) {
    let key = notesAppStorage.key(i)
    let value = notesAppStorage.getItem(key);
    values.push(value)
  }
  return values
};

exports.notesAppStorage = notesAppStorage;
