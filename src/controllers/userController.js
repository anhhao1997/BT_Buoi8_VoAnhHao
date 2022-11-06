const User = require("../models/user");
const { Sequelize } = require("sequelize");
const  {successCode, failCode, errorCode } = require("../ultis/response")
const Op = Sequelize.Op;
//GET: read
const getUser = async (req, res) => {
    // let danhSachUser = await User.findAll({ where: { user_id: 2 } });
    // // .findOne, .findByPk
    let danhSachUser = await User.findAll({ 
        where: { 
            full_name: {
                [Op.like]: "%hql%"
            }
        } 
    });
    successCode(res, danhSachUser, "Lấy dữ liệu thành công");
};

//POST: create
const postUser = async (req, res) => {
    try {
        let { user_id, full_name, email, passWord } = req.body;
        let userNew = {
            user_id,
            full_name,
            email,
            passWord,
        };
        let result = await User.create(userNew);
        successCode(res, userNew, "Thêm dữ liệu thành công");
    } catch (error) {
        errorCode(res, "Lỗi kìa backend")
    }
};

//PUT: update/:id
const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let { full_name, email, passWord } = req.body;
        let checkUser = await User.findByPk(id);
        if (checkUser) {
            let userNew = {
                full_name,
                email,
                passWord,
            };
            let result = await User.update(userNew, { where: { user_id: id } });
            successCode(res, userNew, "Cập nhật dữ liệu thành công");
        } else {
            failCode(res, "", "Id không tồn tại!");
        }
    } catch (error) {
        errorCode(res, "Lỗi kìa backend")
    }
};

//DELETE: delete/:id
const removeUser = async (req, res) => {
    try {
        let { id } = req.params;
        let checkUser = await User.findByPk(id);
        if (checkUser) {
            let result = await User.destroy({
                where: {
                    user_id: id,
                },
            });
            successCode(res, userNew, "Xóa dữ liệu thành công");
        } else {
            failCode(res, "", "Id không tồn tại!");
        }
    } catch (error) {
        errorCode(res, "Lỗi kìa backend")
    }
};

module.exports = {
    getUser,
    postUser,
    updateUser,
    removeUser,
};
