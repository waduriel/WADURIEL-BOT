exports.run = async (client, message, args, color) => {
    let start = Date.now();
    message.channel.send("Pinging...").then(m => {
       let end = Date.now();
       m.edit(`:signal_strength: Pong! ${Math.round(start - end)} ms`)
    })
          
} 

exports.help = {
    name: "ping"
}
