{
  "name": "HANS-MD",
  "description": "This BOT was developed by Hanstztech.",
  "keywords": [
    "bot",
    "node",
    "baileys",
    "whatsapp"
  ],
  "logo": "https://files.catbox.moe/l1i9o4.jpg",
  "repository": "https://github.com/Mrhanntz/HANS-MD",
  "succes_url": "/",
  "stack": "container",
  "env": {
    "PREFIX": {
      "description": "choose your prefix of bot",
      "value": ".",
      "required": true
    },
    "AUTO_READ_STATUS": {
      "description": "Your contact status will be read automatically(type yes to active or no to deactive  ; don't write in capital letter)",
      "value": "yes",
      "required": false
    },
    "AUTO_READ_MESSAGES": {
      "description": "Turn this 'on' if you want the bot to automatically read incoming messages. Use 'off' to disable it.",
      "value": "no",
      "required": false
    },
    "BLOCK_ALL": {
      "description": "Turn this 'on' if you want the bot to automatically block ANYONE WHO SENDS YOU A MESSAGE. Use 'off' to disable it.",
      "value": "no",
      "required": false  
    },
    "AUTO_DOWNLOAD_STATUS": {
      "description": "Your contact status will be download automatically and send to you(type yes to active or no to deactive ; don't write in capital letter)",
      "value": "no",
      "required": false
    },
    "PM_PERMIT": {
      "description": "Other user can't use your bot in pm (type yes to active or no to deactive ; don't write in capital letter)",
      "value": "no",
      "required": false
    },
    "BOT_NAME": {
      "description": "put A name for your bot",
      "value": "HANS-MD",
      "required": false
    },
    "BOT_MENU_LINKS": {
      "description": "add one or many link for your bot menu  ; eg : url1,url2,url3.....",
      "value":"https://files.catbox.moe/l1i9o4.jpg",
      "required": false
    },
    "PUBLIC_MODE": {
      "description": "type yes to put your bot on public mode or no to put it on private mod",
      "value": "yes",
      "required": false 
    },
    "HEROKU_APY_KEY": {
      "description": "insert your heroku api-key (OPTIONAL)",
      "value" : "", 
      "required": false
    },
    "HEROKU_APP_NAME": {
      "description": "insert your heroku APP NAME (OPTIONAL)",
      "value" : "", 
      "required": false
    },
    "SESSION_ID": {
      "description": "put your session ID , the code you receive after scanning Qr code",
      "value": "",
      "required": true
    },
    "OWNER_NAME": {
      "desc": "Your Name",
      "required": false,
      "value": "HANS TZ"
    },
    "NUMERO_OWNER": {
      "desc": "Your number , dont put '+' and put you area code(exemple of togo '228')",
      "required": false,
      "value": "255760774888"
    },
    "WARN_COUNT": {
      "desc": "this is the limit of warn for warning commandes",
      "required": false,
      "value": "2"
    },
    "STARTING_BOT_MESSAGE": {
      "description": "if you don't want startting-bot-message put no else put yes",
      "required": true,
      "value": "yes"
    },
    "PRESENCE": {
      "description": "Mark your presence: 1 to indicate that you are online even if you are not. 2 to indicate that you are currently typing a message. 3 to indicate that you are currently recording an audio. Or leave the field blank to indicate your real state.",
      "value": "1",
      "required": false
    },
    "ANTI_DELETE_MESSAGE": {
      "description": "if you want to enable anti delete message put yes else put no",
      "value": "yes",
      "required": false
    },
    "ANTICALL": {
      "description": "Automatically decline incoming calls. Type 'on' to activate or 'off' to deactivate.",
      "value": "no",
      "required": false  
    },
    "AUTO_REACTION": {
      "description": "Put yes if you want the bot to react to messages in private",
      "required": false,
      "value": "yes"
    }
  },
  "formation": {
    "worker": {
      "quantity": 1,
      "size": "standard-2x"
    }
  },
  "addons": [
    {
      "plan": "heroku-postgresql:essential-0"
    }
  ]
    }
