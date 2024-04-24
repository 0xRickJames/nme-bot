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

export class RareArmor extends Armor {
  name = "Rare Armor";
  id = "rare_armor";
  armor = 0.2;
  price = 40;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_chest_rare.png";
}
export class RareHelmet extends Armor {
  name = "Rare Helmet";
  id = "rare_helmet";
  price = 20;
  armor = 0.1;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_helm_epic.png";
}
export class RareBoots extends Armor {
  name = "Rare Boots";
  id = "rare_boots";
  price = 14;
  armor = 0.07;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_legs_rare.png";
}
export class RareGloves extends Armor {
  name = "Rare Gloves";
  id = "rare_gloves";
  price = 10;
  armor = 0.05;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_hands_rare.png";
}
export class EpicArmor extends Armor {
  name = "Epic Armor";
  id = "epic_armor";
  armor = 0.3;
  price = 60;
  levelReq = 3;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_chest_epic.png";
}
export class EpicHelmet extends Armor {
  name = "Epic Helmet";
  id = "epic_helmet";
  armor = 0.15;
  price = 30;
  levelReq = 3;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_helm_epic.png";
}
export class EpicBoots extends Armor {
  name = "Epic Boots";
  id = "epic_boots";
  armor = 0.1;
  price = 20;
  levelReq = 3;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_legs_epic.png";
}
export class EpicGloves extends Armor {
  name = "Epic Gloves";
  id = "epic_gloves";
  armor = 0.08;
  price = 16;
  levelReq = 3;
  imageUrl = "https://metadata.lootheroes.io/common/gear/ice_hands_epic.png";
}
