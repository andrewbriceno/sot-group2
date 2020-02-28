import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  published: { type: Boolean, required: true, default: false },
  is_premium: { type: Boolean, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now()}
});

export default mongoose.model('products', ProductSchema);
