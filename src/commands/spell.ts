import { EmbedBuilder, SlashCommandBuilder, User } from "discord.js";
import { RED } from "../classes/utils";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const spell: Command = {
  data: new SlashCommandBuilder()
    .setName("spell")
    .setDescription("Displays your spell, if you have one."),

  run: async (interaction) => {
    const player = interaction.user as User;

    const member = interaction.guild!.members.cache.get(player.id);
    const fighter = await powerUpCheck(member!, player.id);

    if (fighter.spell) {
      const spell = fighter.spell;
      const spellEmbed = spell.show();

      interaction.reply({ embeds: [spellEmbed] });
    } else {
      const embed = new EmbedBuilder()
        .setTitle("Spell")
        .setColor(RED)
        .addFields({
          name: "Sorry",
          value: "you do not have a spell.....yet.",
          inline: true,
        });

      interaction.reply({ embeds: [embed] });
    }
  },
};
