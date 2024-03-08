const mongoose = require("mongoose");

// mongoose.connect("mongodb://17.0.0.1.27017/person");

main()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/person");
}

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//Model
const User = mongoose.model("User", userSchema);

//insert one
// const user1 = new User({
//   name: "MS",
//   email: "ms@gmail.com",
//   age: 18,
// });
// user1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//insert Many
// User.insertMany([
//   { name: "PS", email: "ps@gmail.com", age: 18 },
//   { name: "MS_2.O", email: "ms2.o@gmail.com", age: 21 },
//   { name: "SM", email: "sm@gmail.com", age: 25 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Find
// User.find()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Find one
// User.findOne({ age: 21 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Find by Id

// User.findById("65eaf734d34546ed94df09de")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update

// User.updateOne({ name: "SM" }, { name: "Shubham" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update many
// User.updateMany({ age: { $gt: 20 } }, { age: 18 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find and update
// User.findOneAndUpdate({ name: "MS_2.O" }, { age: 21 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find by id and update
// User.findByIdAndUpdate("65eaf734d34546ed94df09de", { name: "MS 2.O" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//delete one
// User.deleteOne({ name: "Shubham" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({ age: { $lt: 20 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find one and delete
// User.findOneAndDelete({ name: "MS_2.O" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndDelete("65eafa7dd338cfd71d01a2cd")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//getting update with new pass options
// User.findByIdAndUpdate(
//   "65eafa7dd338cfd71d01a2cf",
//   { name: "MS 2.O" },
//   { new: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
