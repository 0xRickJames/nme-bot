import { SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";
import { powerUpCheckBoss } from "../modules/powerUpCheck";

export const bossprofile: Command = {
  data: new SlashCommandBuilder()
    .setName("bossprofile")
    .setDescription("Check a boss's profile")
    .addStringOption((option) =>
      option
        .setName("boss")
        .setDescription("Boss whose profile will be shown")
        .setRequired(true)
        .addChoices(
          { name: "Warrior", value: "warrior" },
          { name: "Battlemage", value: "battlemage" },
          { name: "Shaman", value: "shaman" },
          { name: "House Laristar", value: "house_laristar" },
          { name: "Full Meta Alchemist", value: "full_meta_alchemist" }
        )
    ),

  run: async (interaction) => {
    if (interaction.options.get("boss") != null) {
      const boss_name = interaction.options.get("boss");
      if (boss_name != null) {
        const boss = await powerUpCheckBoss(boss_name.value as string);
        if (boss != undefined) {
          await interaction.reply({ embeds: [boss.showBoss()] });
        }
      }
    }
  },
};
