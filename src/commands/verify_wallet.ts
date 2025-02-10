import { SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";

export const verify_wallet: Command = {
  data: new SlashCommandBuilder()
    .setName("verify_wallet")
    .setDescription("Get a link to verify your wallet"),
  run: async (interaction) => {
    const userId = interaction.user.id;
    const verificationLink = `http://localhost:3000/verify?user=${userId}`;

    await interaction.reply({
      content: `Click the link below to verify your wallet:\n${verificationLink}`,
      ephemeral: true, // Private message
    });
  },
};
