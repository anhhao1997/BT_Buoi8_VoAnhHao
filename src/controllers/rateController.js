const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const { successCode, failCode, errorCode } = require("../ultis/response");
const model = init_models(sequelize);

const getRateRes = async (req, res) => {
    let data = await model.rate_res.findAll({ include: ["user", "re"] });
    if (data) {
        let dataNew = [];
        let objRate = {
            amount: "",
            dateRate: "",
            user: {},
            re: {},
        };
        for (let i = 0; i < data.length; i++) {
            objRate = {
                ...objRate,
                amount: data[i].amount,
                dateRate: data[i].date_rate,
                user: data[i].user,
                re: data[i].re,
            };
            dataNew.push(objRate);
        }
        successCode(res, dataNew, "Lấy dữ liệu thành công");
    }
};

const postRateRes = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body;
        if (amount > 5 || amount < 0) {
            failCode(res, "", "Đánh giá chỉ được > 0 và < 5");
        } else {
            let dataUser = await model.user.findAll();
            let dataRes = await model.restaurant.findAll();
            let dataRate = await model.rate_res.findAll();
            let checkUser = () => {
                for (let i = 0; i < dataUser.length; i++) {
                    if (dataUser[i].user_id == user_id) {
                        let d = new Date();
                        let currYear = d.getFullYear();
                        let currMonth = d.getMonth() + 1;
                        let currDate = d.getDate();
                        let currHours = d.getHours();
                        let currMinutes = d.getMinutes();
                        let currSeconds = d.getSeconds();
                        let date_rate = `${currYear}-${currMonth}-${currDate} ${currHours}:${currMinutes}:${currSeconds}`;
                        let userRate = {
                            user_id,
                            res_id,
                            date_rate,
                            amount,
                        };
                        return userRate;
                    }
                }
                return false;
            };
            let userChecked = checkUser();
            let checkRes = () => {
                for (let i = 0; i < dataRes.length; i++) {
                    if (dataRes[i].res_id == res_id) {
                        return dataRes[i];
                    }
                }
                return false;
            };
            let resChecked = checkRes();
            let rateRes = async () => {
                if (!userChecked) {
                    failCode(res, "", "user_id không tồn tại!");
                    return false;
                } else if (!resChecked) {
                    failCode(res, "", "res_id không tồn tại!");
                    return false;
                } else {
                    for (let i = 0; i < dataRate.length; i++) {
                        if (userChecked.user_id != dataRate[i].user_id && resChecked.res_id != dataRate[i].res_id) {
                            let result = await model.rate_res.create(userChecked);
                            return (resultLike = "Đánh giá thành công");
                        }
                    }
                    return false;
                }
            };
            if (rateRes()) {
                successCode(res, userChecked, rateRes());
            }
        }
    } catch (error) {
        console.log(error);
        errorCode(res, "Lỗi kìa backend");
    }
};

module.exports = {
    getRateRes,
    postRateRes,
};
