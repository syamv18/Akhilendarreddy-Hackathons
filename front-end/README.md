# React + Vite

# Simple Todos Frontend

## Features

- Add a new todo
- View all todos
- Delete a todo
- Fetch data from the backend using `fetch`

---

## Project Structure

```
📂front-end
│── 📂 src
│   │── 📂 components
│   │   │── 📂 AddTodo
│   │   │   │── Index.js
│   │   │   │── index.css
│   │   │── 📂 SimpleTodo
│   │   │   │── Index.js
│   │   │   │── index.css
│   │   │── 📂 TodoItem
│   │   │   │── Index.js
│   │   │   │── index.css
│   │── 📜 App.js
│   │── 📜 index.js
│── 📜 package.json
│── 📜 README.md
```

---

## API Integration

### Backend URL

Make sure your backend server is running at `http://localhost:4000/`

### Fetching Todos

**Endpoint:**

```http
GET /todos
```

**Example Response:**

```json
[
  { "id": 1, "title": "Book the ticket" },
  { "id": 2, "title": "Rent a movie" }
]
```

### Adding a Todo

**Endpoint:**

```http
POST /todos
```

**Request Body:**

```json
{
  "title": "New todo item"
}
```

**Response:**

```json
{
  "message": "Todo added successfully"
}
```

### Deleting a Todo

**Endpoint:**

```http
DELETE /todos/:id
```

**Response:**

```json
{
  "message": "Todo deleted successfully"
}
```

---

## Wireframes

### 1. Home Page

```
+----------------------+
|   Simple Todos      |
+----------------------+
| [Input Field] [Add] |
|----------------------|
| ✅ Todo 1    [Delete] |
| ✅ Todo 2    [Delete] |
| ✅ Todo 3    [Delete] |
+----------------------+
```

### 2. Adding a Todo

```
+---------------------------+
| Add Your Todo            |
+---------------------------+
| [Enter new todo...] [Add] |
+---------------------------+
```

### 3. Deleting a Todo

```
+---------------------------+
| Simple Todos             |
+---------------------------+
| ✅ Book a ticket   [Delete] |
| ✅ Rent a movie   [Delete]  |
| ✅ Buy groceries [Delete]  |
+---------------------------+
```

---

## Technologies Used

- React.js (Frontend framework)
- CSS (Styling)
- Fetch API (For making requests to backend)

---
