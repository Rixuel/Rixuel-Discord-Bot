const { EmbedBuilder } = require("discord.js")

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};

function showRegion(preferredLocale){
    let region = {
        "id": ":flag_id: Indonesia",
        "da": ":flag_dk: Denmark",
        "de": ":flag_de: Germany",
        "en-GB": ":flag_gb: United Kingdom",
        "en-US": ":flag_us: America",
        "es-ES": ":flag_es: Spain",
        "fr": ":flag_fr: France",
        "hr": ":flag_hr: Croatia",
        "it": ":flag_it: Italia",
        "lt": ":flag_lt: Lithuania",
        "hu": ":flag_hu: Hungaria",
        "nl": ":flag_nl: Netherlands",
        "no": ":flag_no: Norway",
        "pl": ":flag_pl: Poland",
        "pt-BR": ":flag_br: Brazil",
        "ro": ":flag_ro: Romania",
        "fi": ":flag_fi: Finland",
        "sv-SE": ":flag_se: Sweden",
        "vi": ":flag_vn: Vietnam",
        "tr": ":flag_tr: Turkey",
        "cs": ":flag_cz: Czechia",
        "el": ":flag_gr: Greece",
        "bg": ":flag_bg: Bulgaria",
        "ru": ":flag_ru: Russia",
        "uk": ":flag_ua: Ukraine",
        "hi": ":flag_in: India",
        "th": ":flag_th: Thailand",
        "zh-CN": ":flag_cn: China",
        "ja": ":flag_jp: Japan",
        "zh-TW": ":flag_tw: Taiwan",
        "ko": ":flag_kr: Korea"
    };

    if(preferredLocale in region){
        return region[preferredLocale]
    } else {
        return "N/A"
    }
}


function serverinfo(arguments, receivedMessage) {
    const memberCount = receivedMessage.guild.members.cache.filter(member => !member.user.bot).size;
    const botCount = receivedMessage.guild.members.cache.filter(member => member.user.bot).size;
    const totalCount = receivedMessage.guild.memberCount;
    const ownerId = receivedMessage.guild.ownerId;
    
    const embed = new EmbedBuilder()
        .setAuthor({ 
            name: receivedMessage.guild.name, 
            iconURL: receivedMessage.guild.iconURL()
        })
        .addFields([
            {
                name: "Region",
                value: showRegion(receivedMessage.guild.preferredLocale),
                inline: true
            },
            {
                name: "Owner",
                value: receivedMessage.guild.members.cache.get(ownerId).user.tag,
                inline: true
            },
            {
                name: "ID",
                value: receivedMessage.guild.id,
                inline: true
            },
            {
                name: "Total | Users | Bots",
                value: `${totalCount} | ${memberCount} | ${botCount}`,
                inline: true
            },
            {
                name: "Channels",
                value: receivedMessage.guild.channels.cache.filter((c) => c.type !== 'category').size.toString(),
                inline: true
            },
            {
                name: "Roles",
                value: receivedMessage.guild.roles.cache.size.toString(),
                inline: true
            },
            {
                name: "Creation Date",
                value: `${receivedMessage.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(receivedMessage.channel.guild.createdAt)})`,
                inline: false
            }
        ])
        .setThumbnail(receivedMessage.guild.iconURL())

    receivedMessage.channel.send({ embeds : [embed] })
}

module.exports.serverinfo = serverinfo;
