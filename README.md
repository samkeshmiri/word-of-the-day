# word-of-the-day 

This script fetches the Word of The Day from Dictionary.com.

It creates a new file wherever the script is called to store the word of the day in JSON format. When calling it again it will fetch the word from the file instead of scraping it from the website.

I wrote it to have the day's quote on the first line of my terminal when I open a new tab or window.

Once you have downloaded the script add a line to your bash or in my case `.zshrc` file to execute the script.

I used ts-node to execute it like so;
`ts-node "/path/to/WordOfTheDay.ts"`


<img width="1313" alt="image" src="https://github.com/samkeshmiri/word-of-the-day/assets/47006111/a2cede25-16ca-44fa-bf50-bd87d14df286">
