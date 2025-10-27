import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.send('server is running');
// });

app.get('/api/jokes', (req, res) => {
  const jokes = [
  {
    id: 1,
    title: "Dark Mode",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Express Yourself",
    content: "Why was the JavaScript developer sad? Because he didn’t Node how to Express himself."
  },
  {
    id: 3,
    title: "Computer Break",
    content: "I told my computer I needed a break, and it said: 'You seem stressed, I’ll go to sleep.'"
  },
  {
    id: 4,
    title: "Python Vision",
    content: "Why do Python programmers wear glasses? Because they can’t C#."
  },
  {
    id: 5,
    title: "SQL Query",
    content: "A SQL query walks into a bar, walks up to two tables, and asks: 'Can I join you?'"
  }
];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
