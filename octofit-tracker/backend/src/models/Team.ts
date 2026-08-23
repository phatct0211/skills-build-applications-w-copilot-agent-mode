import { Schema, model } from 'mongoose'

const teamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    captain: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    color: { type: String, required: true },
    motto: { type: String, required: true },
  },
  { timestamps: true },
)

export default model('Team', teamSchema)