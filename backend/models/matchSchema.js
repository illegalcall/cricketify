import mongoose from 'mongoose'

const matchSchema = mongoose.Schema(


const Match = mongoose.model("Match",matchSchema);

export default Match;