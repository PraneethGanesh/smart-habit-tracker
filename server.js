const express = require('express');
const cron = require('node-cron');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

class Habit {
  constructor(id, name, goal) {
    this.id = id;
    this.name = name;
    this.goal = goal;
    this.completedDays = [];
  }
}
app.post('/habits', (req, res) => {
  const { name, goal } = req.body;
  const newHabit = new Habit(Date.now(), name, goal);
  // ... (Add to database or in-memory store)
  res.json(newHabit);
});
app.put('/habits/:id', (req, res) => {
  const { id } = req.params;
  // Find the habit and update its completion status
  // ...
  res.json({ message: 'Habit updated successfully' });
});
app.get('/habits', (req, res) => {
  // Fetch all habits from the store
  // ...
  res.json(habits);
});
app.get('/habits/report', (req, res) => {
  cron.schedule('0 8 * * *', () => {
    console.log('Wake up you morning sleep');
});
  res.json(weeklyReport);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});