// Parse the CSV data
const witchData = [
{firstName: "Agatha", surname: "Ashroot", witchType: "Stormsayer", magicalAbility: "Brews storm-tea from thunderclouds"},
{firstName: "Brona", surname: "Toadvine", witchType: "Bonekeeper", magicalAbility: "Whispers to bones, hears their secrets"},
{firstName: "Clotilde", surname: "Spellhook", witchType: "Webwitch", magicalAbility: "Heals with spider silk and lullabies"},
{firstName: "Drusilla", surname: "Briarveil", witchType: "Silence Collector", magicalAbility: "Steals voices from liars"},
{firstName: "Edda", surname: "Grimsnap", witchType: "Midnight Mender", magicalAbility: "Binds wounds with shadow thread"},
{firstName: "Freydis", surname: "Cragthorn", witchType: "Cupseer", magicalAbility: "Tells time using teacup cracks"},
{firstName: "Gilda", surname: "Wickmire", witchType: "Greenwarden", magicalAbility: "Summons nettles for protection"},
{firstName: "Hester", surname: "Nightknot", witchType: "Doorwitch", magicalAbility: "Charms locks open with humming"},
{firstName: "Jezebel", surname: "Bonebell", witchType: "Mistmother", magicalAbility: "Breathes fog that makes men forget"},
{firstName: "Lavinia", surname: "Dreadcup", witchType: "Truthrot Weaver", magicalAbility: "Turns gossip into truth-rot"},
{firstName: "Maud", surname: "Cobwebb", witchType: "Nightstepper", magicalAbility: "Dreamwalks into enemies' regrets"},
{firstName: "Nanna", surname: "Sootlace", witchType: "Crownbreaker", magicalAbility: "Curses kings with their own guilt"},
{firstName: "Sibyl", surname: "Grumblegrove", witchType: "Weatherstitch", magicalAbility: "Knits weather into cloaks"},
{firstName: "Tamsin", surname: "Stircrow", witchType: "Liecatcher", magicalAbility: "Hears lies before they're spoken"},
{firstName: "Umbra", surname: "Bitterthorn", witchType: "Kettle Seer", magicalAbility: "Plucks memories from steam"},
{firstName: "Vervain", surname: "Briarhex", witchType: "Pactwitch", magicalAbility: "Swaps pain for peace (at a price)"},
{firstName: "Winifred", surname: "Sootmirth", witchType: "Threadmother", magicalAbility: "Animates dolls with protective rage"},
{firstName: "Zillah", surname: "Twistfang", witchType: "Murdermaiden", magicalAbility: "Calls crows to testify"},
{firstName: "Vervain", surname: "Snaptoad", witchType: "Ailreader", magicalAbility: "Reads omens in cracked heels and bad backs"},
{firstName: "Sage", surname: "Bindneedle", witchType: "Promisebinder", magicalAbility: "Mends broken promises with wax"},
{firstName: "Rowan", surname: "Dreadroot", witchType: "Dream Harvester", magicalAbility: "Harvests nightmares for power"},
{firstName: "Juniper", surname: "Grumblewood", witchType: "Truthbloomer", magicalAbility: "Grows thorns in liars' mouths"},
{firstName: "Briar", surname: "Flintborn", witchType: "Nameweaver", magicalAbility: "Stitches together stolen names"},
{firstName: "Fern", surname: "Crumb", witchType: "Moment Keeper", magicalAbility: "Builds safehouses between heartbeats"},
{firstName: "Nocturne", surname: "Snatchroot", witchType: "Ghostnana", magicalAbility: "Tames feral ghosts with lullabies"},
{firstName: "Morwen", surname: "Widdersnap", witchType: "Finderwitch", magicalAbility: "Finds lost things — especially people"},
{firstName: "Nyx", surname: "Gloommother", witchType: "Griefgardener", magicalAbility: "Grows bitter herbs in empty shoes"},
{firstName: "Morgana", surname: "Ashbell", witchType: "Sootsayer", magicalAbility: "Paints prophecies in smoke"},
{firstName: "Tempest", surname: "Wyrmwillow", witchType: "Crustwitch", magicalAbility: "Wards doorways with burnt bread and string"},
{firstName: "Nixie", surname: "Redhook", witchType: "Edgeforger", magicalAbility: "Steals fear and sharpens it"},
{firstName: "Bellara", surname: "Frostcup", witchType: "Nightnagger", magicalAbility: "Haunts dreams of bad men"},
{firstName: "Wrenna", surname: "Ironlace", witchType: "Combseer", magicalAbility: "Hears dead women's stories through combs"},
{firstName: "Mosswyn", surname: "Hailveil", witchType: "Burdenbinder", magicalAbility: "Shields others by taking their shame"},
{firstName: "Thistle", surname: "Goldtooth", witchType: "Weepwright", magicalAbility: "Can turn tears to gold (but only hers)"},
{firstName: "Mabel", surname: "Whisperthorn", witchType: "Crackwitch", magicalAbility: "Finds the weak spot in any fortress or man"},
{firstName: "Edna", surname: "Knotwitch", witchType: "Beastfriend", magicalAbility: "Heals animals, but hexes hunters"},
{firstName: "Dorothy", surname: "Stormvine", witchType: "Patchsister", magicalAbility: "Sews silence into quilts for survivors"},
{firstName: "Nellie", surname: "Gravemoss", witchType: "Brothcaller", magicalAbility: "Summons wind with soup steam"},
{firstName: "Hattie", surname: "Cinderskein", witchType: "Scarecrone", magicalAbility: "Animates coats to walk in her place"},
{firstName: "Bessie", surname: "Wyrmwhistle", witchType: "Swarmcaster", magicalAbility: "Turns guilt into locusts"},
{firstName: "Alma", surname: "Thornlick", witchType: "Hourwitch", magicalAbility: "Freezes time with a sigh"},
{firstName: "Marjorie", surname: "Blackthimble", witchType: "Crumbkeeper", magicalAbility: "Hides secrets in bread crusts"},
{firstName: "Ethel", surname: "Fennlock", witchType: "Unseen Sister", magicalAbility: "Shapeshifts only when no one's watching"},
{firstName: "Gladys", surname: "Mirebriar", witchType: "Hexdevourer", magicalAbility: "Eats curses like candy"},
{firstName: "Irene", surname: "Sootwhisper", witchType: "Willsister", magicalAbility: "Makes potions from weeping willow sap"},
{firstName: "Millie", surname: "Gloomfern", witchType: "Gonewitch", magicalAbility: "Knows a thousand ways to vanish"},
{firstName: "Elsie", surname: "Crookwisp", witchType: "Dustmother", magicalAbility: "Cleans houses so well it banishes spirits"},
{firstName: "Winnie", surname: "Snarlroot", witchType: "Songwitch", magicalAbility: "Turns lullabies into battle cries"},
{firstName: "Thelma", surname: "Fallowitch", witchType: "Petalbinder", magicalAbility: "Buries injustice under roses"},
{firstName: "Dottie", surname: "Dreadwillow", witchType: "Memorymiller", magicalAbility: "Harvests forgotten dreams"},
{firstName: "Pearl", surname: "Mournhook", witchType: "Shadewhisper", magicalAbility: "Speaks fluently with shadows"},
{firstName: "Gertie", surname: "Skeltervine", witchType: "Threadjudge", magicalAbility: "Traps guilt in silver thimbles"},
{firstName: "Myrtle", surname: "Hexleech", witchType: "Bitterblossom", magicalAbility: "Grows poisons only she can cure"},
{firstName: "Lottie", surname: "Foglace", witchType: "Kindlecrone", magicalAbility: "Raises fire from still ashes"},
{firstName: "Fannie", surname: "Ruinwell", witchType: "Scentwitch", magicalAbility: "Mixes beauty and rot into perfumes of power"},
{firstName: "Ruthie", surname: "Tallowitch", witchType: "Wordweaver", magicalAbility: "Turns insults into armor"},
{firstName: "Birdie", surname: "Ragthorn", witchType: "Harshnamer", magicalAbility: "Can only tell the truth—but painfully"},
{firstName: "Brenda", surname: "Eldergrin", witchType: "Hearthearth", magicalAbility: "Tends the fire that never dies"}
];

// Create random stars
//function createStars() {
//const container = document.querySelector('.container');
//for (let i = 0; i < 30; i++) {
//const star = document.createElement('div');
//star.classList.add('stars');
//star.style.left = Math.random() * 100 + '%';
//star.style.top = Math.random() * 100 + '%';
//star.style.opacity = Math.random() * 0.8 + 0.2;
//container.appendChild(star);
//}
//}

// Generate a random witch
function generateWitch() {
// Remove existing fade-in classes
document.getElementById('witch-name').classList.remove('fade-in');
document.getElementById('witch-type').classList.remove('fade-in');
document.getElementById('magical-ability').classList.remove('fade-in');

// Force a reflow
void document.getElementById('witch-name').offsetWidth;

// Get random first name
const firstNameIdx = Math.floor(Math.random() * witchData.length);
const firstName = witchData[firstNameIdx].firstName;

// Get random surname (independent from first name)
const surnameIdx = Math.floor(Math.random() * witchData.length);
const surname = witchData[surnameIdx].surname;

// Get random witch type and corresponding ability
const typeIdx = Math.floor(Math.random() * witchData.length);
const witchType = witchData[typeIdx].witchType;
const magicalAbility = witchData[typeIdx].magicalAbility;

// Apply with animation
setTimeout(() => {
document.getElementById('witch-name').textContent = `${firstName} ${surname}`;
document.getElementById('witch-name').classList.add('fade-in');

setTimeout(() => {
document.getElementById('witch-type').textContent = witchType;
document.getElementById('witch-type').classList.add('fade-in');

setTimeout(() => {
document.getElementById('magical-ability').textContent = magicalAbility;
document.getElementById('magical-ability').classList.add('fade-in');
}, 200);
}, 200);
}, 100);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
//createStars();
document.getElementById('generate-btn').addEventListener('click', generateWitch);
});
