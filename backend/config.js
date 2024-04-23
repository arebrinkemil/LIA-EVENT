import "dotenv/config";

export const PORT = 5555;

export const mongoDBURL =
  "mongodb+srv://root:" +
  process.env.DB_PASSWORD +
  "@lia-event.6e7zew3.mongodb.net/LIADB?retryWrites=true&w=majority&appName=LIA-EVENT";
