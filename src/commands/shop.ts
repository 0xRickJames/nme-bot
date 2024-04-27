import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
//import { buyArmor } from "../buttons/buyArmor";
import { BROWN } from "../classes/utils";
import { Command } from "../interfaces/Command";

export const shop: Command = {
  data: new SlashCommandBuilder()
    .setName("shop")
    .setDescription("Displays what The Merchant has to offer!"),

  run: async (interaction) => {
    const embed = new EmbedBuilder()
      .setTitle("The Merchant's Market")
      .setDescription(
        "No more than one of each Weapon or Armor piece. No more than one Skill or Spell at a time!"
      )
      .setColor(BROWN)
      .setThumbnail("https://nme-bot-images.vercel.app/images/shop.png")
      .addFields(
        {
          name: "🛡Armor🛡",
          value:
            "-**Leather Cuirass:** +20% damage reduction - **40 Gold**\n-**Leather Boots:** +7% damage reduction - **14 Gold**\n-**Leather Helmet:** +10% damage reduction - **20 Gold**\n-**Leather Gloves:** +5% damage reduction - **10 Gold**\n-**Steel Breastplate:** +30% damage reduction - **60 Gold** - level > 3\n-**Steel Boots:** +10% damage reduction - **20 Gold** - level > 3\n-**Steel Helm:** +15% damage reduction - **30 Gold** - level > 3\n-**Steel Gauntlets:** +8% damage reduction - **16 Gold** - level > 3",
          inline: false,
        },
        {
          name: "🗡Weapons🗡",
          value:
            "-**Steel Dagger:** +5 to damage - **12 Gold**\n-**Hand Crossbow:** +10 to damage - **25 Gold**\n-**Steel Mace:** +20 to damage - **50 Gold**\n-**Musket Pistol:** +50 to damage - **125 Gold**\n-**Steel Longsword:** +10 to damage - **25 Gold** - level > 3\n-**Heavy Crossbow:** +20 to damage - **50 Gold** - level > 3\n-**Steel Greataxe:** +40 to damage - **100 Gold** - level > 3\n-**Musket Rifle:** +100 to damage - **225 Gold** - level > 3",
          inline: false,
        },
        {
          name: "🦉Spells🦉",
          value:
            "-**Fireball:** deals 25 damage - **20 Gold**\n-**Heal:** heals 25 hitpoints - **20 Gold**\n-**Divine Intervention:** deals 10 dmg and kills spells - **75 Gold** - level > 3\n-**Feeblemind:** heals 10 hp and steals armor - **75 Gold** - level > 3",
          inline: false,
        },
        {
          name: "💍Items💍",
          value:
            "-**Life Totem:** adds 333 hitpoints - **1000 Gold** - level > 3\n-**Regen Ring:** regen 20 hitpoints - **500 Gold** - level > 3\n-**Poison Vial:** +5 poison on attack - **500 Gold** - level > 3\n-**Holy Water:** +25% Crit Chance/+2 Crit Damage - **500 Gold** - level > 3",
          inline: false,
        },
        {
          name: "🧠Skills🧠",
          value:
            "-**Combat Tactics:** doubles attack and armor - **20 Gold**\n-**Stun Attack:** debuffs attack and armor 90% - **20 Gold**\n-**Disarm:** removes a weapon - **75 Gold** - level > 3\n-**Demoralize:** removes a skill - **75 Gold** - level > 3",
          inline: false,
        },
        {
          name: "⚠WARNING!⚠",
          value:
            "**NO REFUNDS!!**\nONE OF EACH **WEAPON** AND **ARMOR** PIECE AT A TIME!!.\nONE **SKILL** AND **SPELL** AT A TIME!!",
          inline: false,
        }
      );
    //const button = new ActionRowBuilder<ButtonBuilder>().setComponents(buyArmor.data);
    interaction.reply({ embeds: [embed] /*components: [button]*/ });
  },
};
