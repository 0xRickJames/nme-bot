import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Player } from "./Player";
import { inlineCode, SILVER } from "./utils";

/**
 * Abstract weapon class to be used to increase Fighter's attack attribute. To
 * add your own weapon, extend Weapon class and change the attributes to your
 * liking.
 *
 * ```typescript
 * class Sword extends Weapon {
 *    name = "sword";
 *    id = "sword";
 *    attack = 15;
 * }
 * ```
 * */
export abstract class Weapon extends Base {
  /** References Player who owns this weapon */
  owner?: Player;
  /** Weapon image */
  imageUrl?: string;

  /** Attack attribute to be added when player equip this weapon */
  attack = 10;

  /** EmbedBuilder that represents Weapon */
  show() {
    const embed = new EmbedBuilder()
      .setTitle("Weapon")
      .setColor(SILVER)
      .addFields(
        { name: "Name", value: this.name, inline: true },
        { name: "Attack", value: inlineCode(this.attack), inline: true }
      );

    if (this.imageUrl) embed.setThumbnail(this.imageUrl);

    return embed;
  }
}

export class SteelDagger extends Weapon {
  name = "Steel Dagger";
  id = "steel_dagger";
  attack = 5;
  price = 12;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/weapons/steel_dagger.png";
}
export class HandCrossbow extends Weapon {
  name = "Hand Crossbow";
  id = "hand_crossbow";
  attack = 10;
  price = 25;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/weapons/hand_crossbow.png";
}
export class SteelMace extends Weapon {
  name = "Steel Mace";
  id = "steel_mace";
  attack = 20;
  price = 50;
  imageUrl = "https://nme-bot-images.vercel.app/images/weapons/steel_mace.png";
}
export class MusketPistol extends Weapon {
  name = "Musket Pistol";
  id = "musket_pistol";
  attack = 50;
  price = 125;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/weapons/musket_pistol.png";
}
export class SteelLongsword extends Weapon {
  name = "Steel Longsword";
  id = "steel_longsword";
  attack = 10;
  price = 25;
  levelReq = 3;
  imageUrl = "https://nme-bot-images.vercel.app/images/weapons/steel_sword.png";
}
export class HeavyCrossbow extends Weapon {
  name = "Heavy Crossbow";
  id = "heavy_crossbow";
  price = 50;
  levelReq = 3;
  attack = 20;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/weapons/heavy_crossbow.png";
}
export class SteelGreataxe extends Weapon {
  name = "Steel Greataxe";
  id = "steel_greataxe";
  attack = 40;
  price = 100;
  levelReq = 3;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/weapons/steel_greataxe.png";
}
export class MusketRifle extends Weapon {
  name = "Musket Rifle";
  id = "musket_rifle";
  attack = 100;
  price = 225;
  levelReq = 3;
  imageUrl =
    "https://nme-bot-images.vercel.app/images/weapons/musket_rifle.png";
}
