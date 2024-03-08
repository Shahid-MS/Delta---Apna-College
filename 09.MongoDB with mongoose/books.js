//Validation check
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
// const bookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: String,
//   price: Number,
//   },
// });

//Model
// const Book = mongoose.model("Book", bookSchema);

//execute
// const book1 = new Book({
//   title: "Mathematics 12",
//   author: "RD Sharma",
//   price: 200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//error
//title is required
// const book2 = new Book({
//   author: "Sk Sharma",
//   price: 400,
// });

// book2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//execute
// const book3 = new Book({
//   title: "Mathematics 10",
//   author: "RD Sharma",

// });

// book3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//New Schema and model
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  SellingPrice: {
    type: Number,
    min: 100,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
  costPrice: {
    type: Number,
    max: [1000, "CP is more than 1000"],
  },
});
const Book = mongoose.model("Book", bookSchema);

//Default
// const book4 = new Book({
//   title: "Mathematics 8",
//   author: "RD Sharma",
//   price: 250,
// });

// book4
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//execute
// const book5 = new Book({
//   title: "Mathematics 11",
//   author: "RD Sharma",
//   price: 250,
//   discount: 50,
//   SellingPrice: 200,
// });

// book5
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//not execute as selling price cant be less than 100
//   const book6 = new Book({
//     title: "Mathematics 11",
//     author: "RD Sharma",
//     price: 250,
//     discount: 50,
//     SellingPrice: 20,
//   });

//   book6
//     .save()
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//enum
//execute
// const book7 = new Book({
//   title: "Mathematics 7",
//   author: "RD Sharma",
//   price: 250,
//   discount: 50,
//   SellingPrice: 200,
//   category: "fiction",
// });

// book7
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//not execute as enum is defined
// const book8 = new Book({
//   title: "Mathematics 11",
//   author: "RD Sharma",
//   price: 250,
//   discount: 50,
//   SellingPrice: 200,
//   category: "Maths",
// });

// book8
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Storing arrays

// const book9 = new Book({
//   title: "Mathematics 11",
//   author: "RD Sharma",
//   price: 250,
//   discount: 50,
//   SellingPrice: 200,
//   genre: ["Maths", "study"],
// });

// book9
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Validotors working on update
//selling price update validator not work on update
// Book.findByIdAndUpdate("65eafe92587e13e220cc1b56", { SellingPrice: 50 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//pass an options for check
//not updated as min value is 100 for sp
// Book.findByIdAndUpdate(
//   "65eb00c704449d096ee813d4",
//   { SellingPrice: 50 },
//   { runValidators: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update as the contrainst is fulfilled that is min sp is greater than 100
// Book.findByIdAndUpdate(
//   "65eb000bc869169203244552",
//   { SellingPrice: 150 },
//   { runValidators: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Error handling

// const book12 = new Book({
//   title: "Mathematics 1",
//   author: "RD Sharma",
//   price: 250,
//   discount: 50,
//   SellingPrice: 200,
//   costPrice: 1100,
// });

// book12
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//showing only messages
// const book13 = new Book({
//   title: "Mathematics 1",
//   author: "RD Sharma",
//   price: 250,
//   discount: 50,
//   SellingPrice: 200,
//   costPrice: 1100,
// });

// book13
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.errors.costPrice.properties.message);
//   });
