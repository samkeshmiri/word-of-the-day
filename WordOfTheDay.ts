//www.dictionary.com/e/word-of-the-day/
import { load } from "cheerio";
import fs from "fs";

const filePath = "./WordOfTheDay.json";

type WordOfTheDay = {
  date: string;
  word: string;
  definition: string;
};

async function getWordOfTheDay(): Promise<WordOfTheDay> {
  const response = await fetch("https://www.dictionary.com/e/word-of-the-day/");
  const data = await response.text();

  const $ = load(data);
  const word = $(".otd-item-headword__word").first().text().trim();
  const definition = $(".otd-item-headword__pos p").eq(1).text().trim();

  return {
    date: new Date().toISOString().split("T")[0],
    word,
    definition,
  };
}

function createOrUpdateWordOfTheDayFile(wordOfTheDay: WordOfTheDay): void {
  let entries: WordOfTheDay[] = [];
  try {
    const data = fs.readFileSync(filePath, { encoding: "utf8" });
    entries = JSON.parse(data);
  } catch (err) {}

  const today = new Date().toISOString().split("T")[0];
  if (entries.some((entry) => entry.date === today)) {
    console.log("Today's word already exists. Skipping...");
    return;
  }

  entries.push(wordOfTheDay);
  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
  console.log(
    `Word of the day: ${wordOfTheDay.word} - ${wordOfTheDay.definition}`
  );
}

async function wordOfTheDay() {
  const today = new Date().toISOString().split("T")[0];

  try {
    const data = fs.readFileSync(filePath, { encoding: "utf8" });
    const entries: WordOfTheDay[] = JSON.parse(data);
    const latestEntry = entries[entries.length - 1];
    if (latestEntry.date === today) {
      console.log(
        `Word of the day: ${latestEntry.word} - ${latestEntry.definition}`
      );
      return;
    }
  } catch (err) {}

  const wordOfTheDay = await getWordOfTheDay();
  createOrUpdateWordOfTheDayFile(wordOfTheDay);
}

wordOfTheDay();
