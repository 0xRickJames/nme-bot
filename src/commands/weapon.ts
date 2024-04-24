import { EmbedBuilder, SlashCommandBuilder, User } from "discord.js";
import { RED } from "../classes/utils";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const weapon: Command = {

  data: new SlashCommandBuilder()
    .setName("weapon")
    .setDescription("Displays your weapons, if you have any."),

  run: async (interaction) => {

    const player = interaction.user as User;
    const member = interaction.guild!.members.cache.get(player.id);
    const fighter = await powerUpCheck(member!, player.id);
    
    if (fighter.equippedWeapons.length > 0){
        const equippedWeapons = fighter.equippedWeapons
        let embedArray: EmbedBuilder[] = [];
        equippedWeapons.forEach(function (weapon){
            const weaponEmbed = weapon.show()
            embedArray.push(weaponEmbed);
        });
        interaction.reply({ embeds: [...embedArray] });
      }
      else {
        const embed = new EmbedBuilder()
          .setTitle("Weapon")
          .setColor(RED)
          .addFields(
            { name: "Sorry", value: "you do not have any weapon.....yet.", inline: true }
          )
    
        //return embed;
        interaction.reply({ embeds: [embed] });
      }

  },
};