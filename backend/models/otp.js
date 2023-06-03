import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const otpSchema = new mongoose.Schema(
  {
    
    email: {
      type: String,
      required: true,
    //   unique: true,
    },
    expiresIn: {
        type: Number,
    },
    code: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
let Otp = mongoose.model('otp', otpSchema, 'otp')
// const otp = mongoose.model('otp', otpSchema)

// module.exports = otp;
export default Otp
