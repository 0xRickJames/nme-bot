import { oneLine } from "common-tags";
import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Fighter } from "./Fighter";
import {
  bold,
  BROWN,
  formatPercent,
  getRandomArmorIndex,
  inlineCode,
  random,
} from "./utils";

/**
 * Spell is a companion for Player which can be used in a battle. Spell will attack
 * during battle based on it's own attribute. To add your own spell, extend Spell
 * class and change the attributes to your liking.
 *
 * ```typescript
 *
 * export class Dragon extends Spell {
 *   name = "dragon";
 *   id = "dragon";
 *   attack = 20;
 *   interceptRate = 0.4;
 * }
 * ```
 * */
export abstract class Spell extends Base {
  /** Spell's owner name */
  ownerName: string = "";
  /** Image to represent this Spell */
  imageUrl?: string;
  /** Frequency to intercept and attack in battle in the form of percentage */
  interceptRate = 0.05;
  /** Damage dealt when attack */
  attack = 5;
  /** Can spell eat other spells */
  canEat: boolean = false;
  /** Amount of healing the spell provides */
  healing = 0;
  /** Can steal ARMOR */
  stealsArmor: boolean = false;
  price = 0;
  levelReq = 0;

  /** Returns true if intercept */
  isIntercept() {
    return random.bool(this.interceptRate);
  }

  /** Sets the spell ownership */
  setOwner(player: Fighter) {
    player.spell = this;
    this.ownerName = player.name;
    player.hasSpell = true;
  }

  /** EmbedBuilder that represents having no Spell */
  no() {
    const embed = new EmbedBuilder()
      .setTitle("Spell")
      .setColor(BROWN)
      .addFields({
        name: "Sorry",
        value: "you do not have a spell.....yet.",
        inline: true,
      });

    return embed;
  }
  /** EmbedBuilder that represents Spell */
  show() {
    if (this.canEat) {
      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Spell")
        .setColor(BROWN)
        .addFields(
          { name: "Name", value: this.name, inline: true },
          {
            name: "Intercept Rate",
            value: inlineCode(interceptRate),
            inline: true,
          },
          { name: "Attack", value: inlineCode(this.attack), inline: true },
          { name: "Special", value: "Removes other spellss!", inline: true }
        );

      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    } else if (this.stealsArmor) {
      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Spell")
        .setColor(BROWN)
        .addFields(
          { name: "Name", value: this.name, inline: true },
          {
            name: "Intercept Rate",
            value: inlineCode(interceptRate),
            inline: true,
          },
          { name: "Healing", value: inlineCode(this.healing), inline: true },
          {
            name: "Special",
            value: "Steals armor pieces from other players!",
            inline: true,
          }
        );

      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    } else if (this.healing > 0) {
      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Spell")
        .setColor(BROWN)
        .addFields(
          { name: "Name", value: this.name, inline: true },
          {
            name: "Intercept Rate",
            value: inlineCode(interceptRate),
            inline: true,
          },
          { name: "Healing", value: inlineCode(this.healing), inline: true }
        );

      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    } else {
      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Spell")
        .setColor(BROWN)
        .addFields(
          { name: "Name", value: this.name, inline: true },
          {
            name: "Intercept Rate",
            value: inlineCode(interceptRate),
            inline: true,
          },
          { name: "Attack", value: inlineCode(this.attack), inline: true }
        );

      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    }
  }
  /** Action to take by Spell when in Battle */
  intercept(opponent: Fighter, player: Fighter) {
    //const armorProtection = opponent.armor * this.attack;
    //const damageDealt = this.attack - armorProtection;

    opponent.hp -= this.attack;

    if (this.stealsArmor == true && opponent.equippedArmors.length > 0) {
      var randomArmorIndex = getRandomArmorIndex(opponent.equippedArmors);
      var randomArmor = opponent.equippedArmors[randomArmorIndex];
      opponent.armor -= randomArmor.armor;
      opponent.equippedArmors.splice(randomArmorIndex, 1);
      const embed = new EmbedBuilder()
        .setTitle("Divine Intervention Cast")
        .setColor(BROWN)
        .setDescription(
          oneLine`${this.ownerName}'s ${this.name} HEALS them for 
      ${this.healing} and steals ${opponent.name}'s ${randomArmor.name}!`
        );
      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    } else if (this.canEat == true && opponent.spell != undefined) {
      opponent.spell = undefined;
      const embed = new EmbedBuilder()
        .setTitle("Feeblemind Cast")
        .setColor(BROWN)
        .setDescription(
          oneLine`${this.ownerName}'s ${this.name} ATTACKS ${opponent.name} for
      ${bold(Math.round(this.attack))} damage and removes their spell!`
        );

      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    } else if (this.healing > 0) {
      player.hp += this.healing;
      const embed = new EmbedBuilder()
        .setTitle("Heal Cast")
        .setColor(BROWN)
        .setDescription(
          oneLine`${this.ownerName}'s ${this.name} HEALS ${this.ownerName} for
      ${bold(Math.round(this.healing))} Hit Points!`
        );

      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    } else {
      //const armorProtection = opponent.armor * this.attack;
      //const damageDealt = this.attack - armorProtection;

      opponent.hp -= this.attack;
      const embed = new EmbedBuilder()
        .setTitle("Fireball Cast")
        .setColor(BROWN)
        .setDescription(
          oneLine`${this.ownerName}'s ${this.name} ATTACKS ${opponent.name} for
      ${bold(Math.round(this.attack))} damage!`
        );

      if (this.imageUrl) embed.setThumbnail(this.imageUrl);

      return embed;
    }
  }
}

export class Fireball extends Spell {
  name = "Fireball";
  id = "fireball";
  attack = 25;
  interceptRate = 0.2;
  price = 20;
  imageUrl =
    "https://cdn.discordapp.com/attachments/939309405227339776/1157377014257422346/fireball.png";
}
export class Heal extends Spell {
  name = "Heal";
  id = "heal";
  healing = 25;
  attack = 0;
  interceptRate = 0.2;
  price = 20;
  imageUrl =
    "https://cdn.discordapp.com/attachments/939309405227339776/1157377014802690058/heal.png";
}
export class Feeblemind extends Spell {
  name = "Feeblemind";
  id = "feeblemind";
  attack = 10;
  interceptRate = 0.2;
  imageUrl =
    "https://cdn.discordapp.com/attachments/939309405227339776/1157378723570536448/feeblemind.png";
  canEat = true;
  price = 75;
  levelReq = 3;
}
export class DivineIntervention extends Spell {
  name = "Divine Intervention";
  id = "divine_intervention";
  healing = 10;
  attack = 0;
  interceptRate = 0.2;
  imageUrl =
    "https://cdn.discordapp.com/attachments/939309405227339776/1157378723310481489/divine_intervention.png";
  stealsArmor = true;
  price = 75;
  levelReq = 3;
}
export class Doge extends Spell {
  name = "Doge";
  id = "doge";
  attack = 20;
  interceptRate = 0.5;
  canEat = true;
  imageUrl =
    "https://i1.kym-cdn.com/photos/images/facebook/000/581/273/6aa.png";
}
export class Kraken extends Spell {
  name = "Kraken";
  id = "kraken";
  attack = 1000;
  healing = 0;
  interceptRate = 0.25;
  imageUrl =
    "https://cdn.discordapp.com/attachments/983738763668770878/983738999157981264/island_assets_final_v4_seamonsters_kraken.png";
  canEat = false;
}
export class Dead extends Spell {
  name = "Dead";
  id = "dead";
  attack = 0;
  healing = 0;
  interceptRate = 0;
  canEat = false;
}
export class Doom extends Spell {
  name = "Doom";
  id = "doom";
  attack = 500;
  healing = 0;
  interceptRate = 0.5;
  imageURL =
    "https://cdn.discordapp.com/attachments/939309405227339776/1157387002572984350/doom.png";
  canEat = true;
}
export class Smite extends Spell {
  name = "Smite";
  id = "smite";
  attack = 300;
  interceptRate = 0.5;
  canEat = true;
  imageUrl =
    "https://cdn.discordapp.com/attachments/939309405227339776/1157387002929479760/smite.png";
}
