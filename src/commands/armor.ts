import { EmbedBuilder, SlashCommandBuilder, User } from "discord.js";
import { RED } from "../classes/utils";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const armor: Command = {

  data: new SlashCommandBuilder()
    .setName("armor")
    .setDescription("Displays your armor, if you have any."),

  run: async (interaction) => {

    const player = interaction.user as User;

    const member = interaction.guild!.members.cache.get(player.id);
    const fighter = await powerUpCheck(member!, player.id);
    
    if (fighter.equippedArmors.length > 0){
        const equippedArmors = fighter.equippedArmors
        let embedArray: EmbedBuilder[] = [];
        equippedArmors.forEach(function (armor){
            const armorEmbed = armor.show()
            embedArray.push(armorEmbed);
        });
        interaction.reply({ embeds: [...embedArray] });
      }
      else {
        const embed = new EmbedBuilder()
          .setTitle("Armor")
          .setColor(RED)
          .addFields(
            { name: "Sorry", value: "you do not have any armor.....yet.", inline: true }
          )
    
        //return embed;
        interaction.reply({ embeds: [embed] });
      }

  },
};