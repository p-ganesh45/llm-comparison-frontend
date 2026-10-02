# 🤖 LLM Comparison

A full-stack web application that compares responses from **Google Gemini** and **Groq** for the same user question.

The application sends the question to both AI models and displays their responses side-by-side along with their response times.

## 🚀 Live Demo

**Frontend:** https://llm-comparison-frontend.vercel.app

**Backend:** https://llm-comparison-backend.onrender.com

## ✨ Features

* 🤖 Compare Gemini and Groq responses
* ⚡ Measure response time for each model
* 🏆 Identify the faster model
* 💬 Simple and user-friendly interface
* 📱 Responsive design for desktop and mobile
* 🔐 API keys stored securely as environment variables
* 🌐 Deployed frontend and backend

## 🏗️ Project Architecture

```text
                User
                  │
                  ▼
        React + Vite Frontend
                  │
                  │ POST /api/compare
                  ▼
       Spring Boot Backend
              /       \
             /         \
            ▼           ▼
        Gemini         Groq
            \           /
             \         /
              ▼       ▼
          AI Responses
                │
                ▼
       Response + Time Taken
                │
                ▼
        React Comparison UI
```

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Java
* Spring Boot
* Spring AI
* Maven
* REST API

### AI Models

* Google Gemini
* Groq

### Deployment

* Vercel — Frontend
* Render — Backend
* GitHub — Source Code

## 📂 Project Structure

### Frontend

```text
llm-comparison-ui/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

### Backend

```text
llm-comparison/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/llm_comparison/
│       └── resources/
│           └── application.properties
├── Dockerfile
├── pom.xml
└── mvnw
```

## 🔄 How It Works

1. The user enters a question in the React frontend.
2. React sends the question to the Spring Boot backend.
3. The backend sends the same question to Gemini and Groq.
4. Both models generate their responses.
5. The backend measures the response time of each model.
6. The results are returned to the frontend.
7. React displays both responses side-by-side.
8. The application identifies which model responded faster.

## 🔌 API

### Compare Models

**Endpoint**

```text
POST /api/compare
```

**Request**

```json
{
  "message": "Explain what Java is"
}
```

**Example Response**

```json
{
  "question": "Explain what Java is",
  "geminiResponse": "Java is a high-level, object-oriented programming language...",
  "groqResponse": "Java is a general-purpose programming language...",
  "geminiTime": 1250,
  "groqTime": 890
}
```

## 🔐 Environment Variables

API keys are not stored directly in the source code.

Backend environment variables:

```text
GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key
```

Frontend:

```text
VITE_API_URL=https://llm-comparison-backend.onrender.com
```

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/p-ganesh45/llm-comparison-backend.git
```

For the frontend:

```bash
git clone https://github.com/p-ganesh45/llm-comparison-frontend.git
```

### 2. Start the Backend

Open the backend project in IntelliJ IDEA.

Configure the required environment variables:

```text
GEMINI_API_KEY=your_key
GROQ_API_KEY=your_key
```

Run the Spring Boot application.

The backend runs on:

```text
http://localhost:8080
```

### 3. Start the Frontend

Open the frontend folder:

```bash
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## 📸 Application

The application provides:

* Question input
* Compare Models button
* Loading animation
* Gemini response
* Groq response
* Response time for each model
* Faster-model indicator

## 🎯 Purpose of the Project

This project was created to understand how multiple Large Language Models can be integrated into a single application.

It demonstrates practical experience with:

* Spring Boot REST APIs
* Spring AI
* AI model integration
* React frontend development
* API communication
* CORS configuration
* Environment variables
* Docker
* Cloud deployment
* Git and GitHub

## 🔮 Future Improvements

* Add more AI models
* Compare response quality
* Add response scoring
* Add token usage comparison
* Add conversation history
* Add charts for response-time comparison
* Add dark mode
* Add authentication
* Store previous comparisons in a database
## 📸 Screenshots

### 🏠 Home Page
<img width="1916" height="963" alt="image" src="https://github.com/user-attachments/assets/a6504869-b2d8-45e8-b12f-e2fd99bdfebc" />

### 🤖 AI Model Comparison

<img width="958" height="916" alt="image" src="https://github.com/user-attachments/assets/ce540541-003c-4a08-9d4c-8942d6a78ce0" />


### 📱 Responsive Design
<img width="738" height="1601" alt="image" src="https://github.com/user-attachments/assets/ad8034c7-8923-4771-94b5-21026f742c2d" />
<img width="738" height="1601" alt="image" src="https://github.com/user-attachments/assets/c7f6041f-1d47-40d6-99b2-a945ae917d0f" />


## 👨‍💻 Developer

**P Ganesh**

Java Backend & AI Application Engineer | Spring Boot • Microservices • Spring AI • RAG | PostgreSQL • REST APIs | Oracle Java Foundations | React

---

⭐ If you find this project useful, consider giving the repository a star!
