import dotenv from dotenv;

export const PORT = 5555;

export const mongoDBURL =
  "mongodb+srv://root:" + process.env.DB_PASSWORD + "@lia-event.6e7zew3.mongodb.net/?retryWrites=true&w=majority&appName=LIA-EVENT";

// Please create a free database for yourself.
// This database will be deleted after tutorial
