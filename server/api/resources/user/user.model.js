import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    authId: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    emailVerified: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.methods = {};

export const User = mongoose.model('user', userSchema);
