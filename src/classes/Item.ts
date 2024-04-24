import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Player } from "./Player";
import { formatPercent, inlineCode, SILVER } from "./utils";
/**
 * Abstract item class to be used to increase Fighter's attributes. To add
 * your own items, extend Item class and change the attributes to your liking.
 * */
export abstract class Item extends Base {
  // References Player who owns this item
  owner?: Player;
  // Item image
  imageUrl?: string;
  // Item desription
  description?: string;
  // Items's effect specific stats.
  boostAttack?: number;
  boostHp?: number;
  boostArmor?: number;
  boostCritChan?: number;
  boostCritDam?: number;
  regen?: number;
  poisons?: number;
  // Shop price for Item
  price = 1;
  // Level required
  levelReq = 0;
  // EmbedBuilder that represents Item
  show() {
    const embed = new EmbedBuilder()
      .setTitle("Item")
      .setColor(SILVER)
      .addFields({ name: "Name", value: this.name, inline: true });
    if (this.imageUrl) embed.setThumbnail(this.imageUrl);
    if (this.description) embed.setDescription(this.description);
    return embed;
  }
}

export class HolyWater extends Item {
  name = "Holy Water";
  id = "holy_water";
  boostCritChan = 0.25;
  boostCritDam = 2;
  price = 50;
  levelReq = 2;
}

export class LifeTotem extends Item {
  name = "Life Totem";
  id = "life_totem";
  boostHp = 333;
  price = 100;
  levelReq = 2;
}

export class RegenRing extends Item {
  name = "Regen Ring";
  id = "regen_ring";
  regen = 20;
  price = 50;
  levelReq = 4;
}

export class PoisonVial extends Item {
  name = "Poison Vial";
  id = "poison_vial";
  poisons = 5;
  price = 50;
  levelReq = 4;
}
