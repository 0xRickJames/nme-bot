import { SlashCommandBuilder, GuildMember, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { updateGold, updateXP } from "../modules/updateUserData";

const adminRole = process.env.ADMIN_ROLE || "0000000000000000000";

export const boostgold: Command = {
  data: new SlashCommandBuilder()
    .setName("boostgold")
    .setDescription("Gold Booster")
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount of gold you want to add")
        .setRequired(true)
    )
    .addUserOption((option) =>
      option
        .setName("boostie")
        .setDescription("A person to boost")
        .setRequired(false)
    ),
  run: async (interaction) => {
    const author = interaction.member as GuildMember;
    if (
      author.roles.cache.has(adminRole) ||
      author.id == "267142718856101889"
    ) {
      const gold = interaction.options.get("amount");
      if (interaction.options.getUser("boostie")) {
        if (gold != null) {
          const user = interaction.options.getUser("boostie") as User;
          const targetUser = await getUserData(user.id);
          await updateGold(targetUser, gold.value as number);
          await interaction.reply(
            `Boosted Gold ${gold.value} for ${user.username}!`
          );
        }
      } else {
        const member = interaction.member as GuildMember;
        const targetUser = await getUserData(member.id);
        if (gold != null) {
          await updateGold(targetUser, gold.value as number);
          await interaction.reply("Boosted Gold " + gold.value + "!");
        }
      }
    } else {
      interaction.reply({
        content: "This command is restricted",
        ephemeral: true,
      });
    }
  },
};
