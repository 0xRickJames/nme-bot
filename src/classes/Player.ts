import { User, GuildMember } from "discord.js";
import { Fighter } from "./Fighter";

/**
 * Player extends Fighter and it used to easily create Fighter class based on
 * discord.js User.
 * */
export class Player extends Fighter {
  id: string;
  attack = 10;
  hp = 100;
  armor = 0.1;
  critChance = 0.3;
  critDamage = 1.2;
  user: User;

  /** Creates Player instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level1 extends Fighter {
  id: string;
  attack = 5;
  hp = 75;
  armor = 0;
  critChance = 0.05;
  critDamage = 1.3;
  user: User;
  level = 1;

  /** Creates Level1 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level2 extends Fighter {
  id: string;
  attack = 6;
  hp = 100;
  armor = 0.02;
  critChance = 0.1;
  critDamage = 1.4;
  user: User;
  level = 2;

  /** Creates Level2 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}
export class Level3 extends Fighter {
  id: string;
  attack = 7;
  hp = 145;
  armor = 0.04;
  critChance = 0.15;
  critDamage = 1.6;
  user: User;
  level = 3;

  /** Creates Level3 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level4 extends Fighter {
  id: string;
  attack = 9;
  hp = 200;
  armor = 0.05;
  critChance = 0.2;
  critDamage = 1.8;
  user: User;
  level = 4;

  /** Creates Level4 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level5 extends Fighter {
  id: string;
  attack = 12;
  hp = 300;
  armor = 0.1;
  critChance = 0.25;
  critDamage = 2;
  user: User;
  level = 5;

  /** Creates Level5 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level6 extends Fighter {
  id: string;
  attack = 16;
  hp = 450;
  armor = 0.15;
  critChance = 0.3;
  critDamage = 2.3;
  user: User;
  level = 6;

  /** Creates Level6 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level7 extends Fighter {
  id: string;
  attack = 20;
  hp = 600;
  armor = 0.2;
  critChance = 0.35;
  critDamage = 2.6;
  user: User;
  level = 7;

  /** Creates Level7 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level8 extends Fighter {
  id: string;
  attack = 25;
  hp = 800;
  armor = 0.25;
  critChance = 0.4;
  critDamage = 3;
  user: User;
  level = 8;

  /** Creates Level8 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}

export class Level9 extends Fighter {
  id: string;
  attack = 30;
  hp = 1000;
  armor = 0.3;
  critChance = 0.45;
  critDamage = 3.5;
  user: User;
  level = 9;

  /** Creates Level9 instance from GuildMember */
  constructor(member: GuildMember) {
    super(member.user.username);
    this.user = member.user;
    this.id = member.user.id;
    this.imageUrl = member.displayAvatarURL();
  }
}
