import { UserInt } from "../database/models/UserModel";

export async function checkArmor(user: UserInt, armor: string) {
  if (
    (user.equippedArmors.includes("power_armor") && armor == "battle_armor") ||
    (user.equippedArmors.includes("power_helmet") &&
      armor == "battle_helmet") ||
    (user.equippedArmors.includes("power_boots") && armor == "battle_boots") ||
    (user.equippedArmors.includes("power_gloves") && armor == "battle_gloves")
  ) {
    return true;
  } else {
    return false;
  }
}

export async function checkWeapons(user: UserInt, armor: string) {
  if (
    (user.equippedWeapons.includes("steel_longsword") &&
      armor == "steel_dagger") ||
    (user.equippedArmors.includes("heavy_crossbow") &&
      armor == "hand_crossbow") ||
    (user.equippedArmors.includes("steel_greataxe") && armor == "steel_mace") ||
    (user.equippedArmors.includes("musket_rifle") && armor == "musket_pistol")
  ) {
    return true;
  } else {
    return false;
  }
}
