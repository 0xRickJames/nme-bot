import {
  ChatInputCommandInteraction,
  CommandInteraction,
  EmbedBuilder,
  User,
} from "discord.js";
import { Fighter } from "./Fighter";
import { BaseBattle } from "./BaseBattle";
import cloneDeep from "lodash.clonedeep";
import { GOLD, isEven, random } from "./utils";
import {
  updateBattleWins,
  updateGold,
  updateRaidWins,
  updateXP,
} from "../modules/updateUserData";
import { UserInt } from "../database/models/UserModel";
/*
interface Team {
  name: string;
  fighters: Fighter[];
}
*/
/**
 * TeamBattle handles team battle simulation
 * */
export class BossTeamBattle extends BaseBattle {
  private teamA: Fighter[];
  private teamB: Fighter[];
  onFighterDead?: (fighter: Fighter) => void;
  interval = 4000; // reduce the time interval

  setOnFighterDead(cb: (fighter: Fighter) => void) {
    this.onFighterDead = cb;
  }

  /**
   * @param {CommandInteraction} i - Discord.js CommandInteraction
   * @param {Team} teamA - team
   * @param {Team} teamB - team
   * */
  constructor(
    i: ChatInputCommandInteraction,
    teamA: Fighter[],
    teamB: Fighter[],
    exp: number,
    gold: number,
    user_int: UserInt,
    author: Fighter,
    boss: Fighter
  ) {
    super(i, [...teamA, ...teamB], exp, gold, user_int, author);

    this.teamA = teamA.map((x) => cloneDeep(x));
    this.teamB = teamB.map((x) => cloneDeep(x));
  }

  /**
   * Starts the battle simulation. It will throw error if the array of
   * Fighters is less than 2. This method will return the Fighter object who won
   * the battle.
   *
   * @returns Team
   *
   * */
  async run() {
    if (this.fighters.length <= 1)
      throw new Error("cannot battle with 1 or less player");

    await this.reply("Starting battle");
    const battleQueue = [...this.teamA, ...this.teamB];
    const fighters = [...this.teamA, ...this.teamB];

    while (this.teamA.length !== 0 && this.teamB.length !== 0) {
      this.round++;

      const playerShadow = battleQueue.shift()!;

      const attackTeam = playerShadow.bossTeam ? this.teamA : this.teamB;
      const defendTeam = playerShadow.bossTeam ? this.teamB : this.teamA;

      const player = attackTeam.shift()!;
      let opponent = random.pick(defendTeam);

      if (player.regen) player.hp += player.regen;
      if (player.poisoned) player.hp -= player.poisoned;
      if (player.poisons) opponent.poisoned += player.poisons;

      const playerSkillIntercept = player.skill?.intercept();
      const opponentSkillIntercept = opponent.skill?.intercept();

      if (playerSkillIntercept) {
        const skillEmbed = player.skill!.use(player, opponent);
        await this.updateEmbed(skillEmbed);
        this.showBattle && (await this.sleep());
      }

      if (opponentSkillIntercept) {
        const skillEmbed = opponent.skill!.use(opponent, player);
        await this.updateEmbed(skillEmbed);
        this.showBattle && (await this.sleep());
      }

      if (player.spell?.isIntercept()) {
        const spellEmbed = player.spell.intercept(opponent, player);
        await this.updateEmbed(spellEmbed);
        this.showBattle && (await this.sleep());
      }

      const battleEmbed = this.attack(player, opponent);
      //battleEmbed.setTitle(`${attackTeam.name} is attacking`);
      if (this.showBattle) {
        for (let i = 0; i < this.fighters.length; i++) {
          const p1 = this.fighters[i];
          //if (this.teamA.find((x) => x.id === p1.id)) {
          const currHealth = [player, ...this.teamA, ...this.teamB].find(
            (x) => x.id === p1.id
          )?.hp;
          const updatePoison = [player, ...this.teamA, ...this.teamB].find(
            (x) => x.id === p1.id
          )?.poisoned;
          const updateRegen = [player, ...this.teamA, ...this.teamB].find(
            (x) => x.id === p1.id
          )?.regen;
          if (
            currHealth !== undefined &&
            updatePoison !== undefined &&
            updateRegen !== undefined
          ) {
            this.progressBar(
              battleEmbed,
              p1.name,
              currHealth,
              p1.hp,
              updatePoison,
              updateRegen
            );
          }
          /*} else {
          const currHealth = [player, ...this.teamB].find((x) => x.id === p1.id)?.hp;
          const updatePoison = [player, ...this.teamB].find((x) => x.id === p1.id)?.poisoned;
          if (currHealth !== undefined && updatePoison !== undefined) {
            this.progressBar(
              battleEmbed,
              p1.name,
              currHealth,
              p1.hp,
              updatePoison,
              p1.regen
            );
          }
        }*/

          /* 
        if (i === 0) {
          battleEmbed.addFields({ name: "\u200b", value: "\u200b" });
        } else if (i === teamAlength) {
          battleEmbed.addFields({ name: "\u200b", value: "\u200b" });
        }
*/
        }
      }

      await this.updateEmbed(battleEmbed);

      attackTeam.push(player);
      battleQueue.push(playerShadow);

      if (opponent.hp <= 0) {
        const index = defendTeam.findIndex((x) => x.id === opponent.id);
        defendTeam.splice(index, 1);

        let text = `${opponent.name} has died in the battle`;
        if (this.playerDiedText) {
          text = this.playerDiedText(opponent);
        }

        this.onFighterDead && this.onFighterDead(opponent);
        this.reply(text);
        this.logBattle && console.log(text);

        if (defendTeam.length === 0) break;
      }
      if (player.hp <= 0) {
        const index = attackTeam.findIndex((x) => x.id === player.id);
        const index2 = battleQueue.findIndex((x) => x.id === player.id);
        battleQueue.splice(index2, 1);
        attackTeam.splice(index, 1);

        let text = `${player.name} has died in the battle`;
        if (this.playerDiedText) {
          text = this.playerDiedText(player);
        }

        this.onFighterDead && this.onFighterDead(player);
        this.reply(text);
        this.logBattle && console.log(text);

        if (attackTeam.length === 1) break;
      }

      if (playerSkillIntercept) {
        player.skill!.close(player, opponent);
      }

      if (opponentSkillIntercept) {
        opponent.skill!.close(opponent, player);
      }

      this.showBattle && (await this.sleep());
    }

    const winner = this.teamA.length > 0 ? this.teamA[0] : this.teamB[0];

    const winEmbed = new EmbedBuilder()
      .setColor(GOLD)
      .setTitle("Battle Winner")
      .setDescription(
        `${winner.name} has won the battle and earned ${this.exp} EXP and ${this.gold} Gold! `
      );
    if (winner.id === this.author.id) {
      if (winner.imageUrl) winEmbed.setThumbnail(winner.imageUrl);

      await updateXP(this.user_int, this.exp);
      await updateGold(this.user_int, this.gold);
      await updateBattleWins(this.user_int);
      await this.reply(winEmbed);
      return this.fighters.find((x) => x.id === winner.id)!;
    } else {
      const winEmbed = new EmbedBuilder()
        .setColor(GOLD)
        .setTitle("Battle Winner")
        .setDescription(`${winner.name} has won the battle! `);

      if (winner.imageUrl) winEmbed.setThumbnail(winner.imageUrl);

      await this.reply(winEmbed);
      return this.fighters.find((x) => x.id === winner.id)!;
    }
  }
}
