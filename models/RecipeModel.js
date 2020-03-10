import mongoose from 'mongoose';

const RecipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true},
  amount: {type: [String], required: true},
  units: {type: [String], required: true},
  description: {type: String, required: true},
  is_published: { type: Boolean, required: true, default: false },
  is_premium: { type: Boolean, required: true, default: true},
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('recipes', RecipeSchema);
