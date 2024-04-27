import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Player } from "./Player";
import { formatPercent, inlineCode, SILVER } from "./utils";
import fs from "fs";

/**
 * Abstract armor class to be used to increase Fighter's armor attribute. To add
 * your own armor, extend Armor class and change the attributes to your liking.
 *
 * ```typescript
 * class Chest extends Armor {
 *    name = "chest";
 *    id = "chest";
 *    armor = 0.08; // 8%
 * }
 * ```
 * */
export abstract class Armor extends Base {
  /** References Player who owns this armor */
  owner?: Player;
  /** Armor image */
  imageUrl?: string;
  /**
   * Armor's effectiveness in the form of percentage.
   * The percentage represents how much of damage will be blocked when opponent
   * attacks you.
   * */
  armor = 0.05;
  price = 0;
  levelReq = 0;

  /** EmbedBuilder that represents Armor */
  show() {
    const armorRate = formatPercent(this.armor);

    const embed = new EmbedBuilder()
      .setTitle("Armor")
      .setColor(SILVER)
      .addFields(
        { name: "Name", value: this.name, inline: true },
        { name: "Armor", value: inlineCode(armorRate), inline: true }
      );

    if (this.imageUrl) embed.setThumbnail(this.imageUrl);

    return embed;
  }
}

export class LeatherCuirass extends Armor {
  name = "Leather Cuirass";
  id = "leather_cuirass";
  armor = 0.2;
  price = 40;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/armor/leather_cuirass.png";
}
export class LeatherHelmet extends Armor {
  name = "Leather Helmet";
  id = "leather_helmet";
  price = 20;
  armor = 0.1;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/armor/leather_helmet.png";
}
export class LeatherBoots extends Armor {
  name = "Leather Boots";
  id = "leather_boots";
  price = 14;
  armor = 0.07;
  imageUrl = "https://nme-bot-images.vercel.app/images/armor/leather_boots.png";
}
export class LeatherGloves extends Armor {
  name = "Leather Gloves";
  id = "leather_gloves";
  price = 10;
  armor = 0.05;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/armor/leather_gloves.png";
}
export class SteelBreastplate extends Armor {
  name = "Steel Breastplate";
  id = "steel_breastplate";
  armor = 0.3;
  price = 60;
  levelReq = 3;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/armor/steel_breastplate.png";
}
export class SteelHelm extends Armor {
  name = "Steel Helm";
  id = "steel_helm";
  armor = 0.15;
  price = 30;
  levelReq = 3;
  imageUrl = "https://nme-bot-images.vercel.app/images/armor/steel_helm.png";
}
export class SteelGreaves extends Armor {
  name = "Steel Greaves";
  id = "steel_greaves";
  armor = 0.1;
  price = 20;
  levelReq = 3;
  imageUrl = "https://nme-bot-images.vercel.app/images/armor/steel_greaves.png";
}
export class SteelGauntlets extends Armor {
  name = "Steel Gauntlets";
  id = "steel_gauntlets";
  armor = 0.08;
  price = 16;
  levelReq = 3;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/armor/steel_gauntlets.png";
}
