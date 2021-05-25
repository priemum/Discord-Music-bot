# Discord-Music-bot
- A simple discord.js music bot based on lavalink and erela.js
- It is Easy Use this bot
- Designed and Tested on Node.js 

## ⚒ Setup ( In Replit or Glitch ) 
[![Run on Repl.it](https://repl.it/badge/github/MSVFORYOU/Discord-Music-bot)](https://repl.it/github/MSVFORYOU/Discord-Music-bot)
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/MSVFORYOU/Discord-Music-bot)

- Import the Repo by typing git clone `https://github.com/MSVFORYOU/Discord-Music-bot` 
- Create a bot application at the [discord developer portal](https://discord.com/developers/applications) and add to your discord server.
- Allow the "Server Member Intent" under the "Privileged Gateway Intents" in the [discord developer panel](https://discord.com/developers/applications). (THIS IS VERY IMPORTANT! The bot will not work propertly without and will not be able to find or kick server members.)
- In `conifg.json` file in `2` line U can Replace the Token of the bot
- In `conifg.json` file in `3` line U can Replace the Prefix of the bot
- In `conifg.json` file in `4` & `5` lines Those are spotify id and secret to play music those are very important and u can replce if u have
- In `config.json` file in `6` , `7` & `8` lines Those are the lavalink server details 
- Install all the packages by typing `npm i`
- Start the bot by typing `node index.js`
- Now Your Bot is Ready

### config.json file

```js
 "token":"TOKEN_HERE", //REPLACE YOUT BOT TOKEN HERE
    "prefix":"PREFIX_HERE",  //REPLCE YOUR PREFIX OF THE BOT
    "clientID":"a0fa9144ef854f14ba0f1adb312fcea2",  // THIS IS THE SPOTIFY ID
    "clientSecret":"0bdcfa39a671486d9ab443900b9f4475", // THIS IS THE SPOTIFY SECRET
    "host": "lava.link",
	"port":80,
	"password":"youshallnotpass"
```
