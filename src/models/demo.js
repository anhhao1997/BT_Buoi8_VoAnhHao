// const { Sequelize, DataTypes, Model } = require("sequelize");
// const Food_Type = require("./food_type");
// const sequelize = require("./index");

// class Food extends Model {}

// Food.init(
//     {
//         // định nghĩa các column trong table
//         food_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//             unique: true,
//         },
//         food_name: {
//             type: DataTypes.STRING,
//         },
//         image: {
//             type: DataTypes.STRING,          
//         },
//         desc: {
//             type: DataTypes.STRING,
//         },
//         type_id: {
//             type: DataTypes.INTEGER,
//         },
//     },
//     {
//         // Other model options go here
//         sequelize, // tham số chứa biến kết nối cơ sở dữ liệu
//         modelName: "Food", // Tên của model
//         tableName: "food", // map đúng với tên table trong CSDL
//         timestamps: false, // bỏ đi chức năng tự tạo 2 cột createDate và updateDate
//     }
// );

// // the defined model is the class itself
// // console.log(User === sequelize.models.User); // true
// Food_Type.hasMany(Food, {foreignKey: "type_id"})
// Food.belongsTo(Food_Type, {foreignKey: "type_id"})

// module.exports = Food;




// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = require("./index");

// class Food_Type extends Model {}

// Food_Type.init(
//     {
//         // định nghĩa các column trong table
//         type_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//             unique: true,
//         },
//         type_name: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         // Other model options go here
//         sequelize, // tham số chứa biến kết nối cơ sở dữ liệu
//         modelName: "Food_Type", // Tên của model
//         tableName: "food_type", // map đúng với tên table trong CSDL
//         timestamps: false, // bỏ đi chức năng tự tạo 2 cột createDate và updateDate
//     }
// );

// // the defined model is the class itself
// // console.log(User === sequelize.models.User); // true

// // Định nghĩa quan hệ


// module.exports = Food_Type;



const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = require("./index");

// class User extends Model {}

// User.init(
//     {
//         // định nghĩa các column trong table
//         user_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//             unique: true,
//         },
//         full_name: {
//             type: DataTypes.STRING,
//         },
//         email: {
//             type: DataTypes.STRING,
//             validate: {
//                 isEmail: {
//                     msg: "Email không đúng định dạng!",
//                 },
//             },
//         },
//         passWord: {
//             type: DataTypes.STRING,
//             field: "pass_word",
//         },
//     },
//     {
//         // Other model options go here
//         sequelize, // tham số chứa biến kết nối cơ sở dữ liệu
//         modelName: "User", // Tên của model
//         tableName: "user", // map đúng với tên table trong CSDL
//         timestamps: false, // bỏ đi chức năng tự tạo 2 cột createDate và updateDate
//     }
// );

// // the defined model is the class itself
// // console.log(User === sequelize.models.User); // true

// module.exports = User;
