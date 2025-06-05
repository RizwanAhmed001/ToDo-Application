# 📝 React To-Do List Application

A simple, clean, and responsive **To-Do List App** built using **React**, allowing users to add, delete, mark as complete, and edit tasks. This project showcases component-based architecture, React state management, conditional rendering, and dynamic styling with modern UI/UX principles.

---

## 🚀 Features

- ✅ Add tasks
- 🗑️ Delete tasks
- ✏️ Edit tasks (re-fills input field)
- ✔️ Mark tasks as completed
- 📭 Message when no tasks are available
- 🎨 Visually appealing UI with gradient background and icons
- 📱 Fully responsive for tablets and phones

---

## 🧱 Project Structure

src/
├── App.jsx # Main component with core logic
├── App.css # Application styling
├── components/
│ ├── Header.jsx # App header
│ ├── Empty.jsx # "No tasks" message component
│ ├── ToDoList.jsx # Task input field + list manager
│ └── ToDoItem.jsx # Individual task UI with actions

markdown
Copy
Edit

---

## 🧩 Component Breakdown

### 🔹 App.jsx
- Maintains `todoItems` state
- Handles:
  - Adding tasks (`handleAdd`)
  - Deleting tasks (`handleDelete`)
  - Preparing tasks for editing (`handleEdit`)
- Renders: `Header`, `ToDoList`, and `Empty`

### 🔹 Header.jsx
Displays the main application heading.

### 🔹 Empty.jsx
Shows `"No Task Available"` when task list is empty.

### 🔹 ToDoList.jsx
- Manages input field
- Triggers add/edit functions
- Renders a list of `ToDoItem` components

### 🔹 ToDoItem.jsx
- Displays individual task
- Mark as complete via checkbox
- Delete task
- Edit task (moves value back to input)

---

## 🎨 Styling (App.css)

- **Gradient background** with `linear-gradient`
- **Central container** with responsive width
- **Rounded buttons** with hover effects
- **Checkbox strike-through** using `.mark` class
- **Icons** from `react-icons`
- **Responsive layout** via media queries

```css
#root {
  background-image: linear-gradient(90deg, rgba(56, 43, 179, 1), rgba(87, 199, 136, 1));
}

.btn:hover {
  background-color: rgb(70, 108, 8);
}

.mark {
  text-decoration: line-through;
}

🛠️ Getting Started
Prerequisites
Node.js (v14 or higher)

npm (or yarn)

Installation
bash
Copy
Edit
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
npm install
npm run dev