import { UserInt } from "../database/models/UserModel";

export const updateXP = async (User: UserInt, Exp: number) => {
  User.exp += +Exp;
  await User.save();
  return User;
};

export const updateGold = async (User: UserInt, Gold: number) => {
  User.gold += +Gold;
  await User.save();
  return User;
};

export const updateArmor = async (User: UserInt, armor: string) => {
  User.equippedArmors.push(armor);
  await User.save();
  return User;
};

export const updateWeapons = async (User: UserInt, weapon: string) => {
  User.equippedWeapons.push(weapon);
  await User.save();
  return User;
};

export const updateItems = async (User: UserInt, item: string) => {
  User.equippedItems.push(item);
  await User.save();
  return User;
};

export const updateSkill = async (User: UserInt, skill: string) => {
  User.skill = skill;
  await User.save();
  return User;
};

export const updateSpell = async (User: UserInt, spell: string) => {
  User.spell = spell;
  await User.save();
  return User;
};

export const updateBattleWins = async (User: UserInt) => {
  User.battleWins += 1;
  await User.save();
  return User;
};

export const updateRaidWins = async (User: UserInt) => {
  User.raidWins += 1;
  await User.save();
  return User;
};
