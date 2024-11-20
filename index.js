const PORT = 3001;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

const jobsRouter = require("./routes/Jobs");
app.use("/jobs", jobsRouter);

const employmentTypeRouter = require("./routes/EmploymentType");
app.use("/employment-types", employmentTypeRouter);

const workingScheduleRouter = require("./routes/WorkingSchedule");
app.use("/working-schedules", workingScheduleRouter);

const userRouter = require("./routes/Users");
app.use("/users", userRouter);

const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);

const applicationRouter = require("./routes/Applications");
app.use("/applications", applicationRouter);
