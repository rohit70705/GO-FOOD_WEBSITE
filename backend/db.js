const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://rohit:Rohit123@gofoodmern.fhkdiuc.mongodb.net/gofoodDB";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB connected successfully");
    
    const fetched_data = await mongoose.connection.db.collection("food_item");
    const data = await fetched_data.find({}).toArray();
    
    global.food_items = data;
    // console.log(global.food_items);
    
    const food_category = await mongoose.connection.db.collection("food_category");
    const catData = await food_category.find({}).toArray();

    global.food_category = catData;
    // console.log(global.food_category);

  } catch (err) {
    console.log("error:---", err);
  }
};

module.exports = connectDb;
