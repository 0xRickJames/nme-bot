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

export class GaleShortsword extends Weapon {
  name = "Gale Shortsword";
  id = "gale_shortsword";
  attack = 5;
  price = 12;
  imageUrl = "https://metadata.lootheroes.io/common/gear/wind_weapon_rare.png";
}
export class TidalSpear extends Weapon {
  name = "Tidal Spear";
  id = "tidal_spear";
  attack = 10;
  price = 25;
  imageUrl = "https://metadata.lootheroes.io/common/gear/water_weapon_rare.png";
}
export class MoltenAxe extends Weapon {
  name = "Molten Axe";
  id = "molten_axe";
  attack = 20;
  price = 50;
  imageUrl = "https://metadata.lootheroes.io/common/gear/fire_weapon_rare.png";
}
export class GaiaMace extends Weapon {
  name = "Gaia Mace";
  id = "gaia_mace";
  attack = 50;
  price = 125;
  imageUrl = "https://metadata.lootheroes.io/common/gear/earth_weapon_rare.png";
}
export class GaleLongsword extends Weapon {
  name = "Gale Longsword";
  id = "gale_longsword";
  attack = 10;
  price = 25;
  levelReq = 3;
  imageUrl = "https://metadata.lootheroes.io/common/gear/wind_weapon_epic.png";
}
export class TidalTrident extends Weapon {
  name = "Tidal Trident";
  id = "tidal_trident";
  price = 50;
  levelReq = 3;
  attack = 20;
  imageUrl = "https://metadata.lootheroes.io/common/gear/water_weapon_epic.png";
}
export class MoltenGreataxe extends Weapon {
  name = "Molten Greataxe";
  id = "molten_greataxe";
  attack = 40;
  price = 100;
  levelReq = 3;
  imageUrl = "https://metadata.lootheroes.io/common/gear/fire_weapon_epic.png";
}
export class GaiaBattlehammer extends Weapon {
  name = "Gaia Battlehammer";
  id = "gaia_battlehammer";
  attack = 100;
  price = 225;
  levelReq = 3;
  imageUrl = "https://metadata.lootheroes.io/common/gear/earth_weapon_epic.png";
}
