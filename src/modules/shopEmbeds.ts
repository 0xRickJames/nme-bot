import { EmbedBuilder } from "discord.js";
import { BROWN } from "../classes/utils";

const shop_keeper_image =
  "https://www.loot-heroes-dev.lol/img/models/angel.png";

export async function goodBuyArmorWeaponItem(price: number, item: string) {
  const embed = new EmbedBuilder()
    .setTitle("House Laristar's Market")
    .setDescription(
      `That will cost ${price} Gold! Thank you for your patronage! You are now the proud owner of our finest ${item}!`
    )
    .setColor(BROWN)
    .setThumbnail(shop_keeper_image);

  return embed;
}

export async function goodBuySpell(price: number, item: string) {
  const embed = new EmbedBuilder()
    .setTitle("House Laristar's Market")
    .setDescription(
      `That will cost ${price} Gold! Thank you for your patronage! You can now use the ${item} Spell!`
    )
    .setColor(BROWN)
    .setThumbnail(shop_keeper_image);

  return embed;
}

export async function goodBuySkill(price: number, item: string) {
  const embed = new EmbedBuilder()
    .setTitle("House Laristar's Market")
    .setDescription(
      `That will cost ${price} Gold! Thank you for your patronage! You can now use the ${item} Skill!`
    )
    .setColor(BROWN)
    .setThumbnail(shop_keeper_image);

  return embed;
}

export async function lessGold() {
  const embed = new EmbedBuilder()
    .setTitle("House Laristar's Market")
    .setDescription(
      `You cannot afford that right now, come back when you've earned some more Gold!`
    )
    .setColor(BROWN)
    .setThumbnail(shop_keeper_image);

  return embed;
}

export async function lessLevels() {
  const embed = new EmbedBuilder()
    .setTitle("House Laristar's Market")
    .setDescription(
      "You are too low in level! Go get some experience and come back when you are at least Level 4!"
    )
    .setColor(BROWN)
    .setThumbnail(shop_keeper_image);

  return embed;
}

export async function hasBetter() {
  const embed = new EmbedBuilder()
    .setTitle("House Laristar's Market")
    .setDescription(
      `Heh, your equipment is already better than that! Save you Gold!`
    )
    .setColor(BROWN)
    .setThumbnail(shop_keeper_image);

  return embed;
}

export async function alreadyOwned() {
  const embed = new EmbedBuilder()
    .setTitle("House Laristar's Market")
    .setDescription(`You've already got that! Leave some for the others!`)
    .setColor(BROWN)
    .setThumbnail(shop_keeper_image);

  return embed;
}
