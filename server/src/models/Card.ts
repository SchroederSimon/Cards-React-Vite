import mongoose from 'mongoose';


const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const CardSchema = new Schema({
  title: String,
  text: [String],
});

const CardModel = mongoose.model("Card", CardSchema);

export default CardModel;