import { User, GuildMember } from "discord.js";
import { Fighter } from "../classes/Fighter";
import * as levels from "../classes/Player";
import * as skills from "../classes/Skill";
import * as weapons from "../classes/Weapon";
import * as armors from "../classes/Armor";
import * as spells from "../classes/Spell";
import * as items from "../classes/Item";
import { UserInt } from "../database/models/UserModel";
import { getUserData } from "./getUserData";

export async function powerUpCheckBoss(boss_name: string) {
  switch (boss_name as string) {
    case "warrior": {
      const boss = new Fighter("Warrior");
      boss.hp = 300;
      boss.attack = 20;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://nme-bot-images.vercel.app/images/bosses/warrior.png";
      const hand_crossbow = new weapons.HandCrossbow();
      const steel_dagger = new weapons.SteelDagger();
      const leather_helmet = new armors.LeatherHelmet();
      const leather_boots = new armors.LeatherBoots();
      boss.equipWeapon(hand_crossbow);
      boss.equipWeapon(steel_dagger);
      boss.equipArmor(leather_helmet);
      boss.equipArmor(leather_boots);
      boss.exp = 100;
      boss.gold = 35;
      return boss;
    }
    case "battlemage": {
      const boss = new Fighter("Battlemage");
      boss.hp = 700;
      boss.attack = 30;
      boss.armor = 0.3;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://nme-bot-images.vercel.app/images/bosses/battlemage.png";
      const hand_crossbow = new weapons.HandCrossbow();
      const steel_dagger = new weapons.SteelDagger();
      boss.equipWeapon(hand_crossbow);
      boss.equipWeapon(steel_dagger);
      const leather_helmet = new armors.LeatherHelmet();
      const leather_boots = new armors.LeatherBoots();
      const leather_gloves = new armors.LeatherGloves();
      const leather_cuirass = new armors.LeatherCuirass();
      boss.equipArmor(leather_helmet);
      boss.equipArmor(leather_boots);
      boss.equipArmor(leather_cuirass);
      boss.equipArmor(leather_gloves);
      const heal = new spells.Heal();
      heal.setOwner(boss);
      boss.skill = new skills.CombatTactics();

      boss.exp = 250;
      boss.gold = 105;
      return boss;
    }
    case "shaman": {
      const boss = new Fighter("Shaman");
      boss.hp = 1200;
      boss.attack = 50;
      boss.armor = 0.3;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://nme-bot-images.vercel.app/images/bosses/shaman.png";
      const hand_crossbow = new weapons.HandCrossbow();
      const steel_dagger = new weapons.SteelDagger();
      const steel_mace = new weapons.SteelMace();
      const musket_pistol = new weapons.MusketPistol();
      boss.equipWeapon(hand_crossbow);
      boss.equipWeapon(steel_dagger);
      boss.equipWeapon(steel_mace);
      boss.equipWeapon(musket_pistol);
      const leather_helmet = new armors.LeatherHelmet();
      const leather_boots = new armors.LeatherBoots();
      const leather_gloves = new armors.LeatherGloves();
      const leather_cuirass = new armors.LeatherCuirass();
      boss.equipArmor(leather_helmet);
      boss.equipArmor(leather_boots);
      boss.equipArmor(leather_cuirass);
      boss.equipArmor(leather_gloves);
      const fireball = new spells.Fireball();
      fireball.setOwner(boss);
      boss.skill = new skills.CombatTactics();
      boss.exp = 600;
      boss.gold = 200;

      return boss;
    }
    case "the_angel": {
      const boss = new Fighter("The Angel");
      boss.hp = 3000;
      boss.attack = 100;
      boss.armor = 0.37;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://nme-bot-images.vercel.app/images/bosses/angel.png";
      const heavy_crossbow = new weapons.HeavyCrossbow();
      const steel_greataxe = new weapons.SteelGreataxe();
      const musket_pistol = new weapons.MusketPistol();
      const musket_rifle = new weapons.MusketRifle();
      boss.equipWeapon(heavy_crossbow);
      boss.equipWeapon(steel_greataxe);
      boss.equipWeapon(musket_pistol);
      boss.equipWeapon(musket_rifle);
      const steel_helm = new armors.SteelHelm();
      const steel_greaves = new armors.SteelGreaves();
      const steel_gauntlets = new armors.SteelGauntlets();
      const steel_breastplate = new armors.SteelBreastplate();
      boss.equipArmor(steel_helm);
      boss.equipArmor(steel_greaves);
      boss.equipArmor(steel_breastplate);
      boss.equipArmor(steel_gauntlets);
      const smite = new spells.Smite();
      smite.setOwner(boss);
      boss.skill = new skills.Wrath();
      boss.exp = 1500;
      boss.gold = 350;

      return boss;
    }
    case "the_demon": {
      const boss = new Fighter("The Demon");
      boss.hp = 6000;
      boss.attack = 200;
      boss.armor = 0.5;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://nme-bot-images.vercel.app/images/bosses/demon.png";
      const heavy_crossbow = new weapons.HeavyCrossbow();
      const steel_longsword = new weapons.SteelLongsword();
      const steel_greataxe = new weapons.SteelGreataxe();
      const musket_rifle = new weapons.MusketRifle();
      boss.equipWeapon(heavy_crossbow);
      boss.equipWeapon(steel_longsword);
      boss.equipWeapon(steel_greataxe);
      boss.equipWeapon(musket_rifle);
      const hand_crossbow = new weapons.HandCrossbow();
      const steel_dagger = new weapons.SteelDagger();
      const steel_mace = new weapons.SteelMace();
      const musket_pistol = new weapons.MusketPistol();
      boss.equipWeapon(hand_crossbow);
      boss.equipWeapon(steel_dagger);
      boss.equipWeapon(steel_mace);
      boss.equipWeapon(musket_pistol);
      const steel_helm = new armors.SteelHelm();
      const steel_greaves = new armors.SteelGreaves();
      const steel_gauntlets = new armors.SteelGauntlets();
      const steel_breastplate = new armors.SteelBreastplate();
      boss.equipArmor(steel_helm);
      boss.equipArmor(steel_greaves);
      boss.equipArmor(steel_breastplate);
      boss.equipArmor(steel_gauntlets);
      const doom = new spells.Doom();
      doom.setOwner(boss);
      boss.skill = new skills.Vaporize();
      boss.exp = 3000;
      boss.gold = 600;

      return boss;
    }
  }
}

export async function powerUpCheck(player: GuildMember, userint: string) {
  const user = await getUserData(userint);
  let fighter: Fighter;

  if (user.exp >= 35000) {
    fighter = new levels.Level9(player);
  } else if (user.exp >= 16000) {
    fighter = new levels.Level8(player);
  } else if (user.exp >= 7000) {
    fighter = new levels.Level7(player);
  } else if (user.exp >= 3000) {
    fighter = new levels.Level6(player);
  } else if (user.exp >= 1350) {
    fighter = new levels.Level5(player);
  } else if (user.exp >= 600) {
    fighter = new levels.Level4(player);
  } else if (user.exp >= 250) {
    fighter = new levels.Level3(player);
  } else if (user.exp >= 100) {
    fighter = new levels.Level2(player);
  } else {
    fighter = new levels.Level1(player);
  }
  await skillsSpellsArmsCheck(fighter, user);
  fighter.exp = user.exp;
  fighter.gold = user.gold;
  fighter.battleWins = user.battleWins;
  fighter.raidWins = user.raidWins;
  return fighter;
}

export async function skillsSpellsArmsCheck(fighter: Fighter, user: UserInt) {
  //  Armor Check

  if (user.equippedArmors.includes("steel_breastplate")) {
    const steel_breastplate = new armors.SteelBreastplate();
    fighter.equipArmor(steel_breastplate);
  } else if (user.equippedArmors.includes("leather_cuirass")) {
    const leather_cuirass = new armors.LeatherCuirass();
    fighter.equipArmor(leather_cuirass);
  }
  if (user.equippedArmors.includes("steel_helm")) {
    const steel_helm = new armors.SteelHelm();
    fighter.equipArmor(steel_helm);
  } else if (user.equippedArmors.includes("leather_helmet")) {
    const leather_helmet = new armors.LeatherHelmet();
    fighter.equipArmor(leather_helmet);
  }
  if (user.equippedArmors.includes("steel_greaves")) {
    const steel_greaves = new armors.SteelGreaves();
    fighter.equipArmor(steel_greaves);
  } else if (user.equippedArmors.includes("leather_boots")) {
    const leather_boots = new armors.LeatherBoots();
    fighter.equipArmor(leather_boots);
  }
  if (user.equippedArmors.includes("steel_gauntlets")) {
    const steel_gauntlets = new armors.SteelGauntlets();
    fighter.equipArmor(steel_gauntlets);
  } else if (user.equippedArmors.includes("leather_gloves")) {
    const leather_gloves = new armors.LeatherGloves();
    fighter.equipArmor(leather_gloves);
  }

  // Weapons check

  if (user.equippedWeapons.includes("heavy_crossbow")) {
    const heavy_crossbow = new weapons.HeavyCrossbow();
    fighter.equipWeapon(heavy_crossbow);
  } else if (user.equippedWeapons.includes("hand_crossbow")) {
    const hand_crossbow = new weapons.HandCrossbow();
    fighter.equipWeapon(hand_crossbow);
  }
  if (user.equippedWeapons.includes("steel_greataxe")) {
    const steel_greataxe = new weapons.SteelGreataxe();
    fighter.equipWeapon(steel_greataxe);
  } else if (user.equippedWeapons.includes("steel_mace")) {
    const steel_mace = new weapons.SteelMace();
    fighter.equipWeapon(steel_mace);
  }
  if (user.equippedWeapons.includes("musket_rifle")) {
    const musket_rifle = new weapons.MusketRifle();
    fighter.equipWeapon(musket_rifle);
  } else if (user.equippedWeapons.includes("musket_pistol")) {
    const musket_pistol = new weapons.MusketPistol();
    fighter.equipWeapon(musket_pistol);
  }
  if (user.equippedWeapons.includes("steel_longsword")) {
    const steel_longsword = new weapons.SteelLongsword();
    fighter.equipWeapon(steel_longsword);
  } else if (user.equippedWeapons.includes("steel_dagger")) {
    const steel_dagger = new weapons.SteelDagger();
    fighter.equipWeapon(steel_dagger);
  }

  // Item Check

  if (user.equippedItems.includes("holy_water")) {
    const holy_water = new items.HolyWater();
    fighter.equipItem(holy_water);
  }
  if (user.equippedItems.includes("life_totem")) {
    const life_totem = new items.LifeTotem();
    fighter.equipItem(life_totem);
  }
  if (user.equippedItems.includes("regen_ring")) {
    const regen_ring = new items.RegenRing();
    fighter.equipItem(regen_ring);
  }
  if (user.equippedItems.includes("poison_vial")) {
    const poison_vial = new items.PoisonVial();
    fighter.equipItem(poison_vial);
  }

  // Spell check

  if (user.spell == "fireball") {
    const fireball = new spells.Fireball();
    fireball.setOwner(fighter);
  }
  if (user.spell == "heal") {
    const heal = new spells.Heal();
    heal.setOwner(fighter);
  }
  if (user.spell == "divine_intervention") {
    const divine_intervention = new spells.DivineIntervention();
    divine_intervention.setOwner(fighter);
  }
  if (user.spell == "feeblemind") {
    const feeblemind = new spells.Feeblemind();
    feeblemind.setOwner(fighter);
  }

  // Skill Check

  if (user.skill == "combat_tactics") {
    fighter.skill = new skills.CombatTactics();
  }
  if (user.skill == "stun_attack") {
    fighter.skill = new skills.StunAttack();
  }
  if (user.skill == "demoralize") {
    fighter.skill = new skills.Demoralize();
  }
  if (user.skill == "disarm") {
    fighter.skill = new skills.Disarm();
  }
}
