import { SlashCommandBuilder, GuildMember, User, Guild } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import {
  updateArmor,
  updateSpell,
  updateSkill,
  updateWeapons,
} from "../modules/updateUserData";

const adminRole = process.env.ADMIN_ROLE || "0000000000000000000";

export const boost: Command = {
  data: new SlashCommandBuilder()
    .setName("boost")
    .setDescription("Booster")
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
      if (interaction.options.getUser("boostie")) {
        const user = interaction.options.getUser("boostie") as User;
        const targetUser = await getUserData(user.id);
        await updateArmor(targetUser, "steel_breastplate");
        await updateArmor(targetUser, "steel_helm");
        await updateArmor(targetUser, "steel_greaves");
        await updateArmor(targetUser, "steel_gauntlets");
        await updateWeapons(targetUser, "steel_longsword");
        await updateWeapons(targetUser, "heavy_crossbow");
        await updateWeapons(targetUser, "steel_greataxe");
        await updateWeapons(targetUser, "musket_rifle");
        await updateSpell(targetUser, "feeblemind");
        await updateSkill(targetUser, "demoralize");
        await interaction.reply(`${user.username} has been Boosted`);
      } else {
        const member = interaction.member as GuildMember;
        const targetUser = await getUserData(member.id);
        await updateArmor(targetUser, "steel_breastplate");
        await updateArmor(targetUser, "steel_helm");
        await updateArmor(targetUser, "steel_greaves");
        await updateArmor(targetUser, "steel_gauntlets");
        await updateWeapons(targetUser, "steel_longsword");
        await updateWeapons(targetUser, "heavy_crossbow");
        await updateWeapons(targetUser, "steel_greataxe");
        await updateWeapons(targetUser, "musket_rifle");
        await updateSpell(targetUser, "feeblemind");
        await updateSkill(targetUser, "demoralize");
        await interaction.reply("Self Boosted");
      }
    } else {
      interaction.reply({
        content: "This command is restricted",
        ephemeral: true,
      });
    }
  },
};
