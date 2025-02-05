# Simple Todos Backend

## Database Setup (SQLite)

To set up the SQLite database, use the following SQL queries:

### Create Table

```sql
CREATE TABLE todos (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL
);
```

## CORS Setup for Frontend Connection

To allow the frontend to connect to the backend, CORS is enabled.

### Install CORS

Run the following command in the backend project folder:

```sh
npm install cors
```

### Update Backend Code

Add the following code in `index.js`:

```javascript
const cors = require("cors"); // Import CORS
app.use(cors()); // Enable CORS for frontend requests
```

Now, the frontend can fetch data from the backend without CORS issues.

## API Endpoints

### Get All Todos

#### Request

```http
GET /todos
```

#### Response

```json
[
  { "id": 1, "title": "Book the ticket for today evening" },
  { "id": 2, "title": "Rent the movie for tomorrow movie night" }
]
```

### Add a New Todo

#### Request

```http
POST /todos
Content-Type: application/json

{
    "title": "Hello this is Akhil"
}
```

#### Response

```json
{
  "message": "Todo added successfully"
}
```

### Delete a Todo

#### Request

```http
DELETE /todos/:id
```

#### Response

```json
{
  "message": "Todo deleted successfully"
}
```
