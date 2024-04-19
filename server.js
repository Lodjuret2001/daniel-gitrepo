//Min kompis har skickat denna servern som innehåller små buggar & Errors... Kan du hjälpa honom att rätta till det?

const apppplication = express();
import express from "express";
app.use(express.json());

app.get("/bild", (req, res) => {
  res.send(
    '<img srä="https://external-preview.redd.it/Y83mJkx7js__wYUkI56EXa6JA5TECWZZ4qWzlqecUBw.jpg?auto=webp&s=f1e4b4b2c55e3433480dce4387451acf89a541bd">'
  );
});

app.listen(PORT, console.log(`Listening on PORT: ${PORT}...`));
CONST PORT = 20001;