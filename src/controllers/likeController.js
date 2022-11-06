const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const { successCode, failCode, errorCode } = require("../ultis/response");
const model = init_models(sequelize);

const getUserLikeRes = async (req, res) => {
    let data = await model.like_res.findAll({ include: ["user", "re"] });
    if (data) {
        let dataNew = [];
        let objLike = {
            dateLike: "",
            user: {},
            re: {},
        };
        for (let i = 0; i < data.length; i++) {
            objLike = {
                ...objLike,
                dateLike: data[i].date_like,
                user: data[i].user,
                re: data[i].re,
            };
            dataNew.push(objLike);
        }
        successCode(res, dataNew, "Lấy dữ liệu thành công");
    }
};

const postUserLikeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        let dataUser = await model.user.findAll();
        let dataRes = await model.restaurant.findAll();
        let dataLike = await model.like_res.findAll();
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
                    let date_like = `${currYear}-${currMonth}-${currDate} ${currHours}:${currMinutes}:${currSeconds}`;
                    let userLike = {
                        user_id,
                        res_id,
                        date_like,
                    };
                    return userLike;
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
        let likeAndUnLike = async () => {
            if (!userChecked) {
                failCode(res, "", "user_id không tồn tại!");
                return false;
            } else if (!resChecked) {
                failCode(res, "", "res_id không tồn tại!");
                return false;
            } else {
                for (let i = 0; i < dataLike.length; i++) {
                    if (userChecked.user_id != dataLike[i].user_id && resChecked.res_id != dataLike[i].res_id) {
                        let result = await model.like_res.create(userChecked);
                        return resultLike = "Like thành công";
                    }
                    if (userChecked.user_id == dataLike[i].user_id && resChecked.res_id == dataLike[i].res_id) {
                        let result = await model.like_res.destroy({
                            where: {
                                user_id: userChecked.user_id,
                                res_id: resChecked.res_id,
                            },
                        });
                        return resultLike = "Unlike thành công";
                    }
                }
            }
        }
        if (likeAndUnLike()) {
            successCode(res, userChecked, likeAndUnLike())
        }
    } catch (error) {
        console.log(error);
        errorCode(res, "Lỗi kìa backend");
    }
};

module.exports = {
    getUserLikeRes,
    postUserLikeRes,
};
