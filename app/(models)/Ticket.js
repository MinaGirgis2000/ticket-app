import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true, // gives created at and updated at date
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
