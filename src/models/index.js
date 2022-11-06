const { Sequelize } = require("sequelize");
const config = require("../config/index")
const sequelize = new Sequelize(config.db_name, config.db_user, config.db_pass, {
    host: config.db_host,
    dialect: config.db_dialect,
    port: config.port
});

// để test kết nối cơ sỡ dữ liệu bằng sequelize
// try {
//     sequelize.authenticate();
//     console.log("Thành công");
// } catch (error) {
//     console.log("Thất bại");
// }

module.exports = sequelize;