const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const { successCode, failCode, errorCode } = require("../ultis/response");
const model = init_models(sequelize);

const postOrder = async (req, res) => {
    // try {
        let { user_id, food_id, amount, arr_sub_id } = req.body;
        let dataUser = await model.user.findAll();
        let dataFood = await model.food.findAll();
        let userOrder = {
            user_id,
            food_id,
            amount,
            code: "",
            arr_sub_id: `[${arr_sub_id}]`,
        };
        if (amount < 0) {
            failCode(res, "", "Amount phải lớn hơn 0");
        } else {
            let checkUser = () => {
                for (let i = 0; i < dataUser.length; i++) {
                    if (dataUser[i].user_id == user_id) {
                        return true;
                    }
                }
                return false;
            };
            let userChecked = checkUser();
            let checkFood = () => {
                for (let i = 0; i < dataFood.length; i++) {
                    if (dataFood[i].food_id == food_id) {
                        return true;
                    }
                }
                return false;
            };
            let foodChecked = checkFood();
            let order = async () => {
                if (!userChecked) {
                    failCode(res, "", "user_id không tồn tại!");
                    return false;
                } else if (!foodChecked) {
                    failCode(res, "", "food_id không tồn tại!");
                    return false;
                } else {
                    for (let i = 0; i < arr_sub_id.length; i++) {
                        let checkSub = await model.sub_food.findOne({ where: { sub_id: arr_sub_id[i] } });
                        if (!checkSub) {
                            failCode(res, "", `sub_id: ${arr_sub_id[i]} không tồn tại!`);
                            return false
                        }                     
                    }
                    let result = await model.order.create(userOrder);
                    return "Order thành công";
                }
            };
            if (order()) {
                successCode(res, userOrder, order());
            }
        }
    // } catch (error) {
    //     console.log(error);
    //     errorCode(res, "Lỗi kìa backend");
    // }
};

module.exports = {
    postOrder,
};
