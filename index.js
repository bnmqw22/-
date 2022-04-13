const { Client , Intents , Collection}  = require('discord.js')
const client = new Client({intents:32767})
const fs = require('fs')
const {prefix , token} = require('./config.json')
const { DiscordTogether } = require('discord-together')
client.discordTogether = new DiscordTogether(client);

client.once('ready',()=>{
    console.log("봇이 준비되었습니다")
})

client.on('messageCreate' , message=>{
    if(message.content == "김청일"){
        message.reply("ㅇ...야 야 자리에 앉아 문닫고")
    }
})

client.on('messageCreate' , message=>{
    if(message.content == "효근아"){
        message.reply("아야 쌤을 그렇게 부르냐~!")
    }
})

client.on('messageCreate' , message=>{
    if(message.content == "씨발"){
        message.reply("개새끼가?")
    }
})

client.on('messageCreate' , message=>{
    if(message.content == "멍충이"){
        message.reply("응 니얼굴")
    }
})

client.on('messageCreate' , message=>{
    if(message.content == "박시우"){
        message.reply("일로와바야~!")
    }
})

client.on('messageCreate' , message=>{
    if(message.content == "내가 소속된 팀"){
        message.reply("https://open.kakao.com/o/gksERwyd")
    }
})

client.on('messageCreate' , message=>{
    if(message.content == "아야"){
        message.reply("일로와바야~")
    }
})

client.on('messageCreate' , message=>{
    if(message.content == "응애"){
        message.reply("뭐여")
    }
})


client.commands = new Collection()

const commandsFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandsFile){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name , command)
}

client.on('messageCreate' , message=>{
    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if (!command) return
    try{
        command.execute(message,args)
    } catch (error) {
        console.error(error)
    }
})

client.on('messageCreate',message=>{
    if(message.content == `${prefix}유튜브`){
        const channel = message.member.voice.channel
        if(!channel) return message.reply("음성채널에 접속해주세요!")
        client.discordTogether.createTogetherCode(channel.id, 'youtube').then(invite =>{
            return message.channel.send(invite.code)
        })
    }
})

client.login("OTYyNjc4Njc3MzY2MjU1NjE2.YlLCYg.162NsR4GySxtOlON2OpRx1cHnHY")