import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

// Set up Redis client with Redis Cloud
const redisClient = createClient({
  username: 'default',
  password: 'hotCSxAq7UqKdAenZPL3G3yVUxP8bFQo',
  socket: {
      host: 'redis-17681.c13.us-east-1-3.ec2.redns.redis-cloud.com',
      port: 17681
  }
});

// Connect to Redis Cloud
redisClient.connect()
  .then(() => console.log('✅ Connected to Redis Cloud'))
  .catch(err => console.error('❌ Redis Cloud connection error:', err));

redisClient.on('error', (err) => {
  console.error('⚠️ Redis error:', err);
});

export default redisClient;

