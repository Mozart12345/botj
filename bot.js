const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

//Iniciando
client.on("ready", () => {
  console.log(`Bot Foi Iniciado, com ${client.users.size} usuarios, em ${client.channels.size}canais`)
  client.user.setGame(`Estou Em ${client.guilds.size} servidores`);  
});

client.on("guildCreate", guild => {
    console.log(`O Bot entrou nos servidor:${guild.name} (id: ${guild.id}).`);
    client.user.setActivity(`Estou Em ${Client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`Bot Foi Removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds} servers`);
});

//Ping!
    client.on("message", async message => {

        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const comando = args.shift().toLocaleLowerCase();

        if(comando === "ping") {
            const m = await message.channel.send("Ping?");
            m.edit(`Pong! A Latencia e ${m.createTimestamp - message.createdTimetamp}ms. A Latencia do API e ${Math.round(client.ping)}ms`);

    }
});
    
//Guild!
    client.on("message", async message => {

        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
    
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const comando = args.shift().toLocaleLowerCase();
    
        if(comando === "guilds") {
            const m = await message.channel.send("Guilds?");
            m.edit(`Estou em ${client.guilds.size} Servidores!`);
    
        }
});

client.login(config.token);
