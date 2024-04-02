# word-of-the-day 

I wrote this script to get Dictionary.com's Word of The Day on the first line of my terminal when I open a new tab or window.

<img width="1313" alt="image" src="https://github.com/samkeshmiri/word-of-the-day/assets/47006111/a2cede25-16ca-44fa-bf50-bd87d14df286">

The script creates a new file wherever it is called and will store the word of the day in JSON format in a file in the same location for caching.

```
[
  {
    "date": "2024-04-01",
    "word": "naiveté",
    "definition": "the quality or state of having or showing a lack of experience or judgment; natural or artless simplicity."
  }
]
```

Once you have downloaded the script add a line to your bash or in my case `.zshrc` file to execute the script.

I used ts-node to execute it like so;
`ts-node "/path/to/WordOfTheDay.ts"`
