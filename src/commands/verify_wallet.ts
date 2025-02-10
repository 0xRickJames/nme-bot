import { SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";
import dotenv from "dotenv";

dotenv.config();

const REDIRECT_URL = process.env.REDIRECT_URL!;

export const verify_wallet: Command = {
  data: new SlashCommandBuilder()
    .setName("verify_wallet")
    .setDescription("Get a link to verify your wallet"),
  run: async (interaction) => {
    const userId = interaction.user.id;
    const verificationLink = `${REDIRECT_URL}/verify?user=${userId}`;

    await interaction.reply({
      content: `Click the link below to verify your wallet:\n${verificationLink}`,
      ephemeral: true, // Private message
    });
  },
};
