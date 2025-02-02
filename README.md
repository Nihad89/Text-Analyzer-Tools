# **Text Analyzer Tool** 📝🚀  
A **Node.js** and **TypeScript**-based **Text Analyzer API** that allows users to **store, analyze, and retrieve text data** from a MongoDB database. It follows **TDD (Test-Driven Development)** and includes **authentication, caching (Redis), and request throttling**.  

---

## **📌 Features**
✅ **CRUD APIs** for managing text data  
✅ **Text Analysis**: Word count, character count, sentence count, paragraph count, longest word  
✅ **MongoDB** as the database  
✅ **Redis caching** for better performance  
✅ **Rate limiting** to prevent abuse  
✅ **Logging** using Morgan  
✅ **Unit Testing** with Jest + Test coverage reports  

---

## **🚀 Getting Started**
### **📂 1️⃣ Clone the Repository**
```sh
git clone https://github.com/Nihad89/Text-Analyzer-Tool.git
cd Text-Analyzer-Tool
```

---

### **📦 2️⃣ Install Dependencies**
```sh
npm install
```

---

### **🛠 3️⃣ Set Up Environment Variables**
Create a `.env` file in the root folder and add the following:
```env
PORT=5000
MONGO_URI=mongodb:<MongoDB_url>

JWT_SECRET=your_secret_key
REDIS_HOST=<Host>
REDIS_PORT=<Port>
```

---

### **🛢 4️⃣ Start MongoDB & Redis**
Make sure MongoDB and Redis are running.  

```
Validator Steps are added into the project for both MongoDB and Redis.
```

---

### **🚀 5️⃣ Run the Project**
#### **Build Project**
```sh
npm run build
```
#### **Run in Production Mode**
```sh
npm start
```

---

## **🛠 API Endpoints**

### 📌 **Text CRUD APIs**
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| **POST** | `/api/texts` | Add new text |



### 📌 **Text Analysis APIs**
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| **GET** | `/api/:id`     | Get all of the analysis data for the text |
| **GET** | `/api/texts/word-count/:id` | Get word count |
| **GET** | `/api/texts/character-count/:id` | Get character count |
| **GET** | `/api/texts/sentence-count/:id` | Get sentence count |
| **GET** | `/api/texts/paragraph-count/:id` | Get paragraph count |
| **GET** | `/api/texts/longest-word/:id` | Get longest word |

---

## **🧪 Running Tests**
Run unit tests with Jest:
```sh
npm test
```
To generate a test coverage report:
```sh
npm test -- --coverage
```

---

## **📜 Logging & Monitoring**
The app uses **Morgan** for logging API requests.  
To log requests to a file:
```sh
mkdir logs
touch logs/access.log
```
Modify `app.ts` to log requests:
```ts
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';

const logStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: logStream }));
```

---

## **📌 Bonus Features**
✅ **Redis Caching** to reduce DB calls  
✅ **JWT Authentication** for secured access  
✅ **Rate Limiting** using `express-rate-limit`  
✅ **OAuth2.0 Support (Optional)**  

---

## **👨‍💻 Contributing**
1. **Fork** the repository  
2. **Create a new branch** (`git checkout -b feature-branch`)  
3. **Commit your changes** (`git commit -m "Added feature"`)  
4. **Push to GitHub** (`git push origin feature-branch`)  
5. **Create a Pull Request** 🎉  

---

## **📜 License**
MIT License  

🚀 **Happy Coding!** 😊
