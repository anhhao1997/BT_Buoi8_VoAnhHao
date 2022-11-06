const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
//middleware
app.listen(8080, () => {});

// nodemon: Tự động restart lại server khi lưu code
// yarn start or npm start
// câu lệnh gỡ thư viện yarn remove

//Method: GET: Read
// (request, response)
// params ví dụ link: http://localhost:8000/hello/title chỉ nên chèn 1 biến duy nhất
// cách khai báo /:id => khai báo API get params từ url
// app.get("/hello/:title", (req, res) => {
//     // cách lấy được params từ url
//     // gửi được tất cả dữ liệu trừ number
//     res.send(req.params.title);
// });

// app.get("/hello", (req, res) => {
//     // gửi được tất cả dữ liệu trừ number
//     //cách lấy được query từ url
//     // bên api url: http://localhost:8000/hello?title=hellonode
//     console.log(req.query.title);
//     // để thêm nhiều biến api url: https://localhost:8000/hello?title=hellonode&id=123
// });
// có 4 nhóm chính
// 1 get tất cả dữ liệu
// app.get("/get", (req, res) => {
//     try {
//         //200
//         console.log(req.body.hoTen);
//         res.status(200).send(req.body);
//     } catch (error) {
//         //400
//         res.status(400).send("Lỗi rồi!");
//     }
// });
// //get 1 đối tượng dữ liệu
// app.get("/hello:/id");
// //post thêm dữ liệu
// app.post("post");
// //put sửa dữ liệu
// app.put("put/:id"); // sửa
// //delete xóa dữ liệu
// app.delete("/delete/:id");

// const mysql = require("mysql2");
// // để kết nối csdl luôn luôn cần 5 thông tin bên dưới
// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "db_food",
//     port: 3306,
// });
// cách kiểm tra xem kết nối được db hay chưa nếu thành công log ra null
// .query("SELECT 1", (err) => {
//     console.log(err);
// });

const rootRouter = require("./routers/index");
app.use("/api", rootRouter);
