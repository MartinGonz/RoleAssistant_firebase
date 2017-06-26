import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }


public STATS = {INT:0,AGI:0,PRE:0,CON:0,I:0,STR:0};

public PERCEPTION = {PR:0,BPR:0,RPR:0};	

public HEALTH = {HP:0,BHP:0,RHP:0};	

public MOVEMENT = {NA:0,BNA:0,RNA:0,
				   LE:0,BLE:0,RLE:0,
				   HL:0,BHL:0,RHL:0,
				   CM:0,BCM:0,RCM:0,
				   PL:0,BPL:0,RPL:0, };

public WEAPONS = { ED:0,ED2:0,BMED:0,BIED:0,RED:0,
				   BL:0,BL2:0,BMBL:0,BIBL:0,RBL:0,
				   TH:0,TH2:0,BMTH:0,BITH:0,RTH:0,
				   THR:0,THR2:0,BMTHR:0,BITHR:0,RTHR:0,
				   PRO:0,PRO2:0,BMPRO:0,BIPRO:0,RPRO:0,
				   PO:0,PO2:0,BMPO:0,BIPO:0,RPO:0};

public GENERALS = {CL:0,CL2:0,BMCL:0,BICL:0,RCL:0,
				   RD:0,RD2:0,BMRD:0,BIRD:0,RRD:0,
				   SW:0,SW2:0,BMSW:0,BISW:0,RSW:0,
				   TR:0,TR2:0,BMTR:0,BITR:0,RTR:0};

public SUBTREFUGE = {AM:0,AM2:0,BMAM:0,BIAM:0,RAM:0,
				     SH:0,SH2:0,BMSH:0,BISH:0,RSH:0,
					 LP:0,LP2:0,BMLP:0,BILP:0,RLP:0,
					 DT:0,DT2:0,BMDT:0,BIDT:0,RDT:0};

public MAGIC ={RN:0,RN2:0,BMRN:0,BIRN:0,RRN:0,
			   UMO:0,UMO2:0,BMUMO:0,BIUMO:0,RUMO:0,
			   DS:0,DS2:0,BMDS:0,BIDS:0,RDS:0};
public DEFENSE = { DB:0,BDB:0,RDB:0};


public rolls=[{name:'hundred',value:0},
                   {name:'twenty',value:0},
                   {name:'twelve',value:0},
                   {name:'ten',value:0},
                   {name:'eigth',value:0},
                   {name:'four',value:0},
                   {name:'two',value:0}];

public coin = [{state:''},
					{state:'Fail'},
					{state:'Succes'}];

public result =	   [{attr:'noArmour',ability5:this.MOVEMENT.NA,ability2:0,reduction:this.MOVEMENT.RNA,bonusItem:0,bonusMix:this.MOVEMENT.BNA,stat:this.STATS.AGI},
					{attr:'leather',ability5:this.MOVEMENT.LE,ability2:0,reduction:this.MOVEMENT.RLE,bonusItem:0,bonusMix:this.MOVEMENT.BLE,stat:this.STATS.AGI},
					{attr:'hardenLeather',ability5:this.MOVEMENT.HL,ability2:0,reduction:this.MOVEMENT.RHL,bonusItem:0,bonusMix:this.MOVEMENT.BHL,stat:this.STATS.AGI},
					{attr:'chainMail',ability5:this.MOVEMENT.CM,ability2:0,reduction:this.MOVEMENT.RCM,bonusItem:0,bonusMix:this.MOVEMENT.BCM,stat:this.STATS.STR,},
					{attr:'plate',ability5:this.MOVEMENT.PL,ability2:0,reduction:this.MOVEMENT.RPL,bonusItem:0,bonusMix:this.MOVEMENT.BPL,stat:this.STATS.STR},
					{attr:'health',ability5:this.HEALTH.HP,ability2:0,reduction:this.HEALTH.RHP,bonusItem:0,bonusMix:this.HEALTH.BHP,stat:this.STATS.CON},
					{attr:'perception',ability5:this.PERCEPTION.PR,ability2:0,reduction:this.PERCEPTION.RPR,bonusItem:0,bonusMix:this.PERCEPTION.BPR,stat:0},
					{attr:'edge',ability5:this.WEAPONS.ED,ability2:this.WEAPONS.ED2,reduction:this.WEAPONS.RED,bonusItem:this.WEAPONS.BIED,bonusMix:this.WEAPONS.BMED,stat:this.STATS.STR},
					{attr:'blunt',ability5:this.WEAPONS.BL,ability2:this.WEAPONS.BL2,reduction:this.WEAPONS.RBL,bonusItem:this.WEAPONS.BIBL,bonusMix:this.WEAPONS.BMBL,stat:this.STATS.STR},
					{attr:'twoHanded',ability5:this.WEAPONS.TH,ability2:this.WEAPONS.TH2,reduction:this.WEAPONS.RTH,bonusItem:this.WEAPONS.BITH,bonusMix:this.WEAPONS.BMTH,stat:this.STATS.STR},
					{attr:'throw',ability5:this.WEAPONS.THR,ability2:this.WEAPONS.THR2,reduction:this.WEAPONS.RTHR,bonusItem:this.WEAPONS.BITHR,bonusMix:this.WEAPONS.BMTHR,stat:this.STATS.AGI},
					{attr:'projectile',ability5:this.WEAPONS.PRO,ability2:this.WEAPONS.PRO2,reduction:this.WEAPONS.RPRO,bonusItem:this.WEAPONS.BIPRO,bonusMix:this.WEAPONS.BMPRO,stat:this.STATS.AGI},
					{attr:'pole',ability5:this.WEAPONS.PO,ability2:this.WEAPONS.PO2,reduction:this.WEAPONS.RPO,bonusItem:this.WEAPONS.BIPO,bonusMix:this.WEAPONS.BMPO,stat:this.STATS.STR},
					{attr:'climbing',ability5:this.GENERALS.CL,ability2:this.GENERALS.CL2,reduction:this.GENERALS.RCL,bonusItem:this.GENERALS.BICL,bonusMix:this.GENERALS.BMCL,stat:this.STATS.AGI},
					{attr:'riding',ability5:this.GENERALS.RD,ability2:this.GENERALS.RD2,reduction:this.GENERALS.RRD,bonusItem:this.GENERALS.BIRD,bonusMix:this.GENERALS.BMRD,stat:this.STATS.I},
					{attr:'swiming',ability5:this.GENERALS.SW,ability2:this.GENERALS.SW2,reduction:this.GENERALS.RSW,bonusItem:this.GENERALS.BISW,bonusMix:this.GENERALS.BMSW,stat:this.STATS.AGI},
					{attr:'tracking',ability5:this.GENERALS.TR,ability2:this.GENERALS.TR2,reduction:this.GENERALS.RTR,bonusItem:this.GENERALS.BITR,bonusMix:this.GENERALS.BMTR,stat:this.STATS.INT},
					{attr:'ambush',ability5:this.SUBTREFUGE.AM,ability2:this.SUBTREFUGE.AM2,reduction:this.SUBTREFUGE.RAM,bonusItem:this.SUBTREFUGE.BIAM,bonusMix:this.SUBTREFUGE.BMAM,stat:0},
					{attr:'stalk',ability5:this.SUBTREFUGE.SH,ability2:this.SUBTREFUGE.SH2,reduction:this.SUBTREFUGE.RSH,bonusItem:this.SUBTREFUGE.BISH,bonusMix:this.SUBTREFUGE.BMSH,stat:this.STATS.PRE},
					{attr:'lockpicking',ability5:this.SUBTREFUGE.LP,ability2:this.SUBTREFUGE.LP2,reduction:this.SUBTREFUGE.RLP,bonusItem:this.SUBTREFUGE.BILP,bonusMix:this.SUBTREFUGE.BMLP,stat:this.STATS.INT},
					{attr:'disarmTraps',ability5:this.SUBTREFUGE.DT,ability2:this.SUBTREFUGE.DT2,reduction:this.SUBTREFUGE.RDT,bonusItem:this.SUBTREFUGE.BIDT,bonusMix:this.SUBTREFUGE.BMDT,stat:this.STATS.I},
					{attr:'runes',ability5:this.MAGIC.RN,ability2:this.MAGIC.RN2,reduction:this.MAGIC.RRN,bonusItem:this.MAGIC.BIRN,bonusMix:this.MAGIC.BMRN,stat:this.STATS.INT},
					{attr:'useObject',ability5:this.MAGIC.UMO,ability2:this.MAGIC.UMO2,reduction:this.MAGIC.RUMO,bonusItem:this.MAGIC.BIUMO,bonusMix:this.MAGIC.BMUMO,stat:this.STATS.I},
					{attr:'directedSpell',ability5:this.MAGIC.DS,ability2:this.MAGIC.DS2,reduction:this.MAGIC.RDS,bonusItem:this.MAGIC.BIDS,bonusMix:this.MAGIC.BMDS,stat:this.STATS.AGI},
					{attr:'defense',ability5:this.DEFENSE.DB,ability2:0,reduction:this.DEFENSE.RDB,bonusItem:0,bonusMix:this.DEFENSE.BDB,stat:this.STATS.AGI}];
    
public equipedArmour = 'NA';

public getDiceRoll(dice:number,max:number) {
    this.rolls[dice].value = Math.floor(Math.random() * max)+1 ;
	};
    
public  armourType(type:string) {
      return (type==this.equipedArmour);
    }
public setEquipedArmour(armour:string){
      this.equipedArmour = armour;
    }
public setStats(ability5:number,ability2:number,bonusMix:number,bonusItem:number,reduction:number, response:number){
		this.result[response].ability5 = ability5;
		this.result[response].ability2 = ability2;
		this.result[response].bonusMix = bonusMix;
		this.result[response].bonusItem = bonusItem;
		this.result[response].reduction =reduction;
		};
public updateResutls(value:number,stat:string){
		switch (stat) {
			case "INT":
				this.result[16].stat = value; 
				this.result[19].stat = value; 
				this.result[21].stat = value; 
				break;
			case "STR":
				this.result[3].stat = value; 
				this.result[4].stat = value; 
				this.result[7].stat = value; 
				this.result[8].stat = value; 
				this.result[9].stat = value; 
				this.result[12].stat = value; 
				break;	
			case "CON":
				this.result[5].stat =value; 
				break;
			case "AGI":

				this.result[0].stat = value; 
				this.result[1].stat = value; 
				this.result[2].stat = value;
				this.result[10].stat = value; 
				this.result[11].stat = value; 
				this.result[13].stat = value; 
				this.result[15].stat = value; 
				this.result[23].stat = value; 
				this.result[24].stat = value;  
				break;
			case "PER":
				this.result[6].stat= value; 
				this.result[18].stat= value; 
				break;
			case "I":
				this.result[14].stat = value; 
				this.result[20].stat = value; 
				this.result[22].stat = value; 
				break;
			default:
				break;
		}

	};



}
