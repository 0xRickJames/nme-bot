import { Command } from "../interfaces/Command";
import { boost } from "./boost";
import { profile } from "./profile";
import { battle } from "./battle";
import { boostxp } from "./boostxp";
import { boostgold } from "./boostgold";
import { armor } from "./armor";
import { weapon } from "./weapon";
import { spell } from "./spell";
import { skill } from "./skill";
import { shop } from "./shop";
import { buy } from "./buy";
import { info } from "./info";
import { bossprofile } from "./bossprofile";
import { bossfight } from "./bossfight";
import { warrior } from "./warrior";
import { battlemage } from "./battlemage";
import { shaman } from "./shaman";
import { the_angel } from "./the_angel";
import { the_demon } from "./the_demon";

export const CommandList: Command[] = [
  boost,
  profile,
  battle,
  boostxp,
  boostgold,
  armor,
  weapon,
  spell,
  skill,
  shop,
  buy,
  info,
  bossprofile,
  bossfight,
  warrior,
  battlemage,
  shaman,
  the_angel,
  the_demon,
];
