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
    (user.equippedWeapons.includes("gale_longsword") &&
      armor == "gale_shortsword") ||
    (user.equippedArmors.includes("tidal_trident") && armor == "tidal_spear") ||
    (user.equippedArmors.includes("molten_greataxe") &&
      armor == "molten_axe") ||
    (user.equippedArmors.includes("gaia_battlehammer") && armor == "gaia_mace")
  ) {
    return true;
  } else {
    return false;
  }
}
