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
        "https://metadata.lootheroes.io/common/hero/warriorSoldier-square.png";
      const tidal_spear = new weapons.TidalSpear();
      const gale_shortsword = new weapons.GaleShortsword();
      const rare_helmet = new armors.RareHelmet();
      const rare_boots = new armors.RareBoots();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      boss.equipArmor(rare_helmet);
      boss.equipArmor(rare_boots);
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
        "https://metadata.lootheroes.io/common/hero/battlemageSoldier-square.png";
      const tidal_spear = new weapons.TidalSpear();
      const gale_shortsword = new weapons.GaleShortsword();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      const rare_helmet = new armors.RareHelmet();
      const rare_boots = new armors.RareBoots();
      const rare_gloves = new armors.RareGloves();
      const rare_armor = new armors.RareArmor();
      boss.equipArmor(rare_helmet);
      boss.equipArmor(rare_boots);
      boss.equipArmor(rare_armor);
      boss.equipArmor(rare_gloves);
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
        "https://metadata.lootheroes.io/common/hero/shamanKnight-square.png";
      const tidal_spear = new weapons.TidalSpear();
      const gale_shortsword = new weapons.GaleShortsword();
      const molten_axe = new weapons.MoltenAxe();
      const gaia_mace = new weapons.GaiaMace();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      boss.equipWeapon(molten_axe);
      boss.equipWeapon(gaia_mace);
      const rare_helmet = new armors.RareHelmet();
      const rare_boots = new armors.RareBoots();
      const rare_gloves = new armors.RareGloves();
      const rare_armor = new armors.RareArmor();
      boss.equipArmor(rare_helmet);
      boss.equipArmor(rare_boots);
      boss.equipArmor(rare_armor);
      boss.equipArmor(rare_gloves);
      const fireball = new spells.Fireball();
      fireball.setOwner(boss);
      boss.skill = new skills.CombatTactics();
      boss.exp = 600;
      boss.gold = 200;

      return boss;
    }
    case "house_laristar": {
      const boss = new Fighter("House Laristar");
      boss.hp = 3000;
      boss.attack = 100;
      boss.armor = 0.37;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://metadata.lootheroes.io/common/hero/archangelLord-square.png";
      const tidal_trident = new weapons.TidalTrident();
      const molten_greataxe = new weapons.MoltenGreataxe();
      const gaia_mace = new weapons.GaiaMace();
      const gaia_battlehammer = new weapons.GaiaBattlehammer();
      boss.equipWeapon(tidal_trident);
      boss.equipWeapon(molten_greataxe);
      boss.equipWeapon(gaia_mace);
      boss.equipWeapon(gaia_battlehammer);
      const epic_helmet = new armors.EpicHelmet();
      const epic_boots = new armors.EpicBoots();
      const epic_gloves = new armors.EpicGloves();
      const epic_armor = new armors.EpicArmor();
      boss.equipArmor(epic_helmet);
      boss.equipArmor(epic_boots);
      boss.equipArmor(epic_armor);
      boss.equipArmor(epic_gloves);
      const smite = new spells.Smite();
      smite.setOwner(boss);
      boss.skill = new skills.Wrath();
      boss.exp = 1500;
      boss.gold = 350;

      return boss;
    }
    case "full_meta_alchemist": {
      const boss = new Fighter("Full Meta Alchemist");
      boss.hp = 6000;
      boss.attack = 200;
      boss.armor = 0.5;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://metadata.lootheroes.io/common/hero/necromancerLord-square.png";
      const tidal_trident = new weapons.TidalTrident();
      const gale_longsword = new weapons.GaleLongsword();
      const molten_greataxe = new weapons.MoltenGreataxe();
      const gaia_battlehammer = new weapons.GaiaBattlehammer();
      boss.equipWeapon(tidal_trident);
      boss.equipWeapon(gale_longsword);
      boss.equipWeapon(molten_greataxe);
      boss.equipWeapon(gaia_battlehammer);
      const tidal_spear = new weapons.TidalSpear();
      const gale_shortsword = new weapons.GaleShortsword();
      const molten_axe = new weapons.MoltenAxe();
      const gaia_mace = new weapons.GaiaMace();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      boss.equipWeapon(molten_axe);
      boss.equipWeapon(gaia_mace);
      const epic_helmet = new armors.EpicHelmet();
      const epic_boots = new armors.EpicBoots();
      const epic_gloves = new armors.EpicGloves();
      const epic_armor = new armors.EpicArmor();
      boss.equipArmor(epic_helmet);
      boss.equipArmor(epic_boots);
      boss.equipArmor(epic_armor);
      boss.equipArmor(epic_gloves);
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

  if (user.equippedArmors.includes("epic_armor")) {
    const epic_armor = new armors.EpicArmor();
    fighter.equipArmor(epic_armor);
  } else if (user.equippedArmors.includes("rare_armor")) {
    const rare_armor = new armors.RareArmor();
    fighter.equipArmor(rare_armor);
  }
  if (user.equippedArmors.includes("epic_helmet")) {
    const epic_helmet = new armors.EpicHelmet();
    fighter.equipArmor(epic_helmet);
  } else if (user.equippedArmors.includes("rare_helmet")) {
    const rare_helmet = new armors.RareHelmet();
    fighter.equipArmor(rare_helmet);
  }
  if (user.equippedArmors.includes("epic_boots")) {
    const epic_boots = new armors.EpicBoots();
    fighter.equipArmor(epic_boots);
  } else if (user.equippedArmors.includes("rare_boots")) {
    const rare_boots = new armors.RareBoots();
    fighter.equipArmor(rare_boots);
  }
  if (user.equippedArmors.includes("epic_gloves")) {
    const epic_gloves = new armors.EpicGloves();
    fighter.equipArmor(epic_gloves);
  } else if (user.equippedArmors.includes("rare_gloves")) {
    const rare_gloves = new armors.RareGloves();
    fighter.equipArmor(rare_gloves);
  }

  // Weapons check

  if (user.equippedWeapons.includes("tidal_trident")) {
    const tidal_trident = new weapons.TidalTrident();
    fighter.equipWeapon(tidal_trident);
  } else if (user.equippedWeapons.includes("tidal_spear")) {
    const tidal_spear = new weapons.TidalSpear();
    fighter.equipWeapon(tidal_spear);
  }
  if (user.equippedWeapons.includes("molten_greataxe")) {
    const molten_greataxe = new weapons.MoltenGreataxe();
    fighter.equipWeapon(molten_greataxe);
  } else if (user.equippedWeapons.includes("molten_axe")) {
    const molten_axe = new weapons.MoltenAxe();
    fighter.equipWeapon(molten_axe);
  }
  if (user.equippedWeapons.includes("gaia_battlehammer")) {
    const gaia_battlehammer = new weapons.GaiaBattlehammer();
    fighter.equipWeapon(gaia_battlehammer);
  } else if (user.equippedWeapons.includes("gaia_mace")) {
    const gaia_mace = new weapons.GaiaMace();
    fighter.equipWeapon(gaia_mace);
  }
  if (user.equippedWeapons.includes("gale_longsword")) {
    const gale_longsword = new weapons.GaleLongsword();
    fighter.equipWeapon(gale_longsword);
  } else if (user.equippedWeapons.includes("gale_shortsword")) {
    const gale_shortsword = new weapons.GaleShortsword();
    fighter.equipWeapon(gale_shortsword);
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
