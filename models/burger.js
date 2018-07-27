var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    create: function (cols, vals, callback) {
        orm.createOne("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    update: function (objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;