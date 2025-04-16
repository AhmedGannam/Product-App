# Product App 🛒

Welcome to my **Product App**! This project is a full-stack web application built to help users manage products, including creating, updating, and deleting products. It was developed as part of my journey to learn modern web development technologies and best practices.

👉 **Live Demo:** [https://product-app-oyny.onrender.com](https://product-app-oyny.onrender.com)

---

## Features ✨

- **Create Products**: Add new products with a name, price, and image URL.
- **View Products**: Display all products in a responsive grid layout.
- **Update Products**: Edit existing product details.
- **Delete Products**: Remove products from the list.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
- **Animations**: Smooth transitions and hover effects for a modern user experience.

---

## Technologies Used 🛠️

- **Frontend**:
  - React.js (with React Router for navigation)
  - Zustand for state management
  - CSS for styling (with animations and transitions)
  - React Icons for icons
  - React Toastify for notifications

- **Backend**:
  - Node.js with Express.js
  - MongoDB for database storage
  - Render for deployment

- **Tools**:
  - Vite for fast development
  - ESLint for code linting
  - Prettier for code formatting

---

## How to Run Locally 🚀

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AhmedGannam/product-app.git
   cd product-app
   cd frontend

2. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

5. **Start the frontend development server**:
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open the app**:
   - Visit `http://localhost:5173` in your browser.

---


## Folder Structure 📂

```
product-app/
├── backend/
│   ├── config/            # Database configuration
│   ├── controllers/       # API controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── server.js          # Backend entry point
│   └── .env               # Environment variables
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Application pages
│   │   ├── store/         # Zustand state management
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Frontend entry point
│   ├── .eslintrc.js       # ESLint configuration
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Frontend dependencies
├── README.md              # Project documentation
└── screenshots/           # Screenshots for documentation
```

---

## Key Learnings 📚

- **State Management**: Learned how to use Zustand for managing global state in a React application.
- **Responsive Design**: Implemented mobile-first design principles and CSS media queries.
- **Animations**: Added smooth transitions and hover effects using CSS animations.
- **Backend Development**: Built a RESTful API with Node.js and Express.js.
- **Database Integration**: Connected the app to MongoDB for persistent data storage.
- **Deployment**: Deployed the app on Render for public access.

---

## Challenges Faced 🧗

- **Theme Toggle**: Implementing a smooth dark/light theme toggle with CSS variables.
- **Responsive Layout**: Ensuring the app looks great on all screen sizes.
- **State Persistence**: Managing product state across different pages and components.
- **Deployment**: Configuring the backend and frontend for production deployment.

---

## Future Improvements 🔮

- **User Authentication**: Add login/signup functionality.
- **Product Search**: Implement a search bar to filter products.
- **Pagination**: Add pagination for large product lists.
- **Image Upload**: Allow users to upload product images directly.
- **Unit Tests**: Write tests for both frontend and backend.

---

## Credits 🙌

- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Custom CSS with modern design principles.
- **Inspiration**: Built as part of my learning through youtube.

---

Thank you for checking out my project! If you have any feedback,new ideas,issues or suggestions, feel free to reach out. 😊
```

