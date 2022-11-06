const sequelize  = require("../models/index")
const init_models = require("../models/init-models") 
const model = init_models(sequelize);
const getFoodDemo = async (req, res) => {
    // kết bảng include = join
    let data = await model.like_res.findAll({include: ["user", "re"]}) // nếu kết thêm bảng thì phẩy tiếp
    res.send(data)
}

module.exports = {
    getFoodDemo
}