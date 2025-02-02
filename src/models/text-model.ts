
import { Schema, model, Document } from 'mongoose';

interface IText extends Document {
  content: string;
  userId: string;
}

const TextSchema = new Schema({
  content: { type: String, required: true },
  userId: { type: String, required: true },
});

export const Text = model<IText>('Text', TextSchema);
export default Text;