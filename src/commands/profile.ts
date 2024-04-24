import { SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const profile: Command = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Check character's stats")
    .addUserOption((option) =>
    option
      .setName("user")
      .setDescription("View the profile of this user")
      .setRequired(false)
  ),
  run: async (interaction) => {
    const player = interaction.options.getUser("user") != null ? interaction.options.getUser("user") as User : interaction.user as User;
    const member = interaction.guild!.members.cache.get(player.id);
    const fighter = powerUpCheck(member!, player.id); 
    await interaction.reply({ embeds: [(await fighter).show()] });
  },
};