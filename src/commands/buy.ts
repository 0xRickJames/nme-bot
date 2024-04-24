import {
  CommandInteraction,
  GuildMember,
  SlashCommandBuilder,
  User,
} from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { getPrice } from "../modules/getPrice";
import { checkArmor, checkWeapons } from "../modules/checkItems";
import {
  updateArmor,
  updateItems,
  updateGold,
  updateSpell,
  updateSkill,
  updateWeapons,
} from "../modules/updateUserData";
import { powerUpCheck } from "../modules/powerUpCheck";
import {
  checkItemLevel,
  checkName,
  checkPlayerLevel,
} from "../modules/checkLevel";
import {
  alreadyOwned,
  goodBuySkill,
  hasBetter,
  lessGold,
  lessLevels,
  goodBuyArmorWeaponItem,
  goodBuySpell,
} from "../modules/shopEmbeds";

export const buy: Command = {
  data: new SlashCommandBuilder()
    .setName("buy")
    .setDescription("Buy items from House Laristar's Market!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("armor")
        .setDescription("Buy a piece of armor")
        .addStringOption((option) =>
          option
            .setName("piece")
            .setDescription("piece of armor")
            .setRequired(true)
            .addChoices(
              { name: "Rare Armor", value: "rare_armor" },
              { name: "Rare Helmet", value: "rare_helmet" },
              { name: "Rare Boots", value: "rare_boots" },
              { name: "Rare Gloves", value: "rare_gloves" },
              { name: "Epic Armor", value: "epic_armor" },
              { name: "Epic Helmet", value: "epic_helmet" },
              { name: "Epic Boots", value: "epic_boots" },
              { name: "Epic Gloves", value: "epic_gloves" }
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("weapon")
        .setDescription("Buy a weapon")
        .addStringOption((option) =>
          option
            .setName("type")
            .setDescription("type of weapon")
            .setRequired(true)
            .addChoices(
              { name: "Gale Shortsword", value: "gale_shortsword" },
              { name: "Tidal Spear", value: "tidal_spear" },
              { name: "Molten Axe", value: "molten_axe" },
              { name: "Rockegt Launcher", value: "gaia_mace" },
              { name: "Gale Longsword", value: "gale_longsword" },
              { name: "Tidal Trident", value: "tidal_trident" },
              { name: "Molten Greataxe", value: "molten_greataxe" },
              { name: "Gaia Battlehammer", value: "gaia_battlehammer" }
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("item")
        .setDescription("Buy an item")
        .addStringOption((option) =>
          option
            .setName("swag")
            .setDescription("type of item")
            .setRequired(true)
            .addChoices(
              { name: "Life Totem", value: "life_totem" },
              { name: "Regen Ring", value: "regen_ring" },
              { name: "Poison Vial", value: "poison_vial" },
              { name: "Holy Water", value: "holy_water" }
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("skill")
        .setDescription("Buy a skill")
        .addStringOption((option) =>
          option
            .setName("training")
            .setDescription("type of training")
            .setRequired(true)
            .addChoices(
              { name: "Combat Tactics", value: "combat_tactics" },
              { name: "Stun Attack", value: "stun_attack" },
              { name: "Disarm", value: "disarm" },
              { name: "Demoralize", value: "demoralize" }
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("spell")
        .setDescription("Buy a spell")
        .addStringOption((option) =>
          option
            .setName("knowledge")
            .setDescription("type of knowledge")
            .setRequired(true)
            .addChoices(
              { name: "Fireball", value: "fireball" },
              { name: "Heal", value: "heal" },
              { name: "Divine Intervention", value: "divine_intervention" },
              { name: "Feeblemind", value: "feeblemind" }
            )
        )
    ),

  run: async (interaction: CommandInteraction) => {
    const player = interaction.member as GuildMember;
    const user = await getUserData(player.id);
    const fighter = await powerUpCheck(player, player.id);
    const level = fighter.level as number;

    if (interaction.options.get("piece")) {
      const armor = interaction.options.get("piece");
      if (armor != null) {
        const armor_piece = armor.value as string;
        const player_above3 = await checkPlayerLevel(level, armor_piece);
        const item_above3 = await checkItemLevel(armor_piece as string);
        const price = await getPrice(armor_piece);
        const armor_name = await checkName(armor_piece);
        const cost = 0 - price;
        const has_better_armor = await checkArmor(user, armor_piece);

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if item is owned
        else if (user.equippedArmors.includes(armor_piece)) {
          const embed = await alreadyOwned();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if a better item is already owned
        else if (has_better_armor == true) {
          const embed = await hasBetter();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateArmor(user, armor_piece);
          await updateGold(user, cost);
          const embed = await goodBuyArmorWeaponItem(
            price,
            armor_name as string
          );
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else if (interaction.options.get("type")) {
      const weapon = interaction.options.get("type");
      if (weapon != null) {
        const weapon_type = weapon.value as string;
        const player_above3 = await checkPlayerLevel(level, weapon_type);
        const item_above3 = await checkItemLevel(weapon_type);
        const price = await getPrice(weapon_type);
        const weapon_name = await checkName(weapon_type);
        const cost = 0 - price;
        const has_better_weapon = await checkWeapons(user, weapon_type);

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if a better item is already owned
        else if (has_better_weapon == true) {
          const embed = await hasBetter();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if item is owned
        else if (user.equippedWeapons.includes(weapon_type)) {
          const embed = await alreadyOwned();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateWeapons(user, weapon_type);
          await updateGold(user, cost);
          const embed = await goodBuyArmorWeaponItem(
            price,
            weapon_name as string
          );
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else if (interaction.options.get("swag")) {
      const item = interaction.options.get("swag");
      if (item != null) {
        const item_type = item.value as string;
        const player_above3 = await checkPlayerLevel(level, item_type);
        const item_above3 = await checkItemLevel(item_type);
        const price = await getPrice(item_type);
        const item_name = await checkName(item_type);
        const cost = 0 - price;

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateItems(user, item_type);
          await updateGold(user, cost);
          const embed = await goodBuyArmorWeaponItem(
            price,
            item_name as string
          );
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else if (interaction.options.get("training")) {
      const skill = interaction.options.get("training");
      if (skill != null) {
        const skill_type = skill.value as string;
        const player_above3 = await checkPlayerLevel(level, skill_type);
        const item_above3 = await checkItemLevel(skill_type);
        const price = await getPrice(skill_type);
        const skill_name = await checkName(skill_type);
        const cost = 0 - price;

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateSkill(user, skill_type);
          await updateGold(user, cost);
          const embed = await goodBuySkill(price, skill_name as string);
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else if (interaction.options.get("knowledge")) {
      const spell = interaction.options.get("knowledge");
      if (spell != null) {
        const spell_type = spell.value as string;
        const player_above3 = await checkPlayerLevel(level, spell_type);
        const item_above3 = await checkItemLevel(spell_type);
        const price = await getPrice(spell_type);
        const spell_name = await checkName(spell_type);
        const cost = 0 - price;

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateSpell(user, spell_type);
          await updateGold(user, cost);
          const embed = await goodBuySpell(price, spell_name as string);
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else {
      interaction.reply("failed");
    }
  },
};
