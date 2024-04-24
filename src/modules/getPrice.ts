export async function getPrice(Item: string) {
  let price: number;
  switch (Item) {
    case "power_armor": {
      price = 60;
      return price;
    }
    case "power_helmet": {
      price = 30;
      return price;
    }
    case "power_boots": {
      price = 20;
      return price;
    }
    case "power_gloves": {
      price = 16;
      return price;
    }
    case "battle_armor": {
      price = 40;
      return price;
    }
    case "battle_helmet": {
      price = 20;
      return price;
    }
    case "battle_boots": {
      price = 14;
      return price;
    }
    case "battle_gloves": {
      price = 10;
      return price;
    }
    case "gale_shortsword": {
      price = 12;
      return price;
    }
    case "tidal_spear": {
      price = 25;
      return price;
    }
    case "molten_axe": {
      price = 50;
      return price;
    }
    case "gaia_mace": {
      price = 125;
      return price;
    }
    case "gale_longsword": {
      price = 25;
      return price;
    }
    case "tidal_trident": {
      price = 50;
      return price;
    }
    case "molten_greataxe": {
      price = 100;
      return price;
    }
    case "gaia_battlehammer": {
      price = 225;
      return price;
    }
    case "fireball": {
      price = 20;
      return price;
    }
    case "heal": {
      price = 20;
      return price;
    }
    case "feeblemind": {
      price = 75;
      return price;
    }
    case "divine_intervention": {
      price = 75;
      return price;
    }
    case "combat_tactics": {
      price = 20;
      return price;
    }
    case "stun_attack": {
      price = 20;
      return price;
    }
    case "disarm": {
      price = 75;
      return price;
    }
    case "demoralize": {
      price = 75;
      return price;
    }
    case "life_totem": {
      price = 1000;
      return price;
    }
    case "regen_ring": {
      price = 500;
      return price;
    }
    case "poison_vial": {
      price = 500;
      return price;
    }
    case "holy_water": {
      price = 500;
      return price;
    }
    default: {
      price = 0;
      return price;
    }
  }
}
