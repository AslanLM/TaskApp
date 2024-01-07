import app from "./app.js";
import connectDB from "./db.js";
import { PORT } from "./config.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });



