import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  User,
} from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck, powerUpCheckBoss } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateGold, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";

const allowedAllies = 12;
const loopData = new SlashCommandBuilder()
  .setName("shaman")
  .setDescription("Fight against a Shaman!");

for (let i = 1; i <= allowedAllies; i++) {
  loopData.addUserOption((option) =>
    option
      .setName(`ally${i}`)
      .setDescription("An ally to join you.")
      .setRequired(false)
  );
}

export const shaman: Command = {
  data: loopData,

  run: async (interaction: ChatInputCommandInteraction) => {
    const player1 = interaction.user as User;
    const player1_data = await getUserData(player1.id);
    await updateXP(player1_data, 5);
    await updateGold(player1_data, 1);
    const member1 = interaction.guild!.members.cache.get(player1.id);
    const author = await powerUpCheck(member1!, player1.id);
    const allies: Fighter[] = [];
    let oppMultiplier = 1;

    for (let i = 1; i <= allowedAllies; i++) {
      if (interaction.options.getUser(`ally${i}`) != null) {
        const player = interaction.options.getUser(`ally${i}`) as User;
        if (player.id != player1.id) {
          const member = interaction.guild!.members.cache.get(player.id);
          const ally = await powerUpCheck(member!, player.id);
          const player_data = await getUserData(player.id);
          await updateXP(player_data, 5);
          await updateGold(player_data, 1);
          allies.push(ally);
          oppMultiplier += 1;
        }
      }
    }
    const uniqueAllies = Array.from(new Set(allies.map((obj) => obj.id))).map(
      (id) => allies.find((obj) => obj.id === id)
    ) as Fighter[];

    const boss = await powerUpCheckBoss("shaman");
    const [exp, gold] = [boss!.exp!, boss!.gold!].map(
      (val) => (val / oppMultiplier).toFixed(0) as unknown as number
    );

    const battle = new Battle(
      interaction,
      [boss!, author, ...uniqueAllies],
      exp,
      gold,
      player1_data,
      author
    );
    battle.setBoss(boss!);
    await battle.run();
  },
};
