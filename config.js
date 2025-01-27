

module.exports = {
  TOKEN: "mongodb+srv://jasper:toto11223344551@cluster0.zcbwt.mongodb.net/?retryWrites=true&w=majority",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    },
    {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
