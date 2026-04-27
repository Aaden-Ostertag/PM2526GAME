import Dialogue from "./dialogue.js";
import CharacterContainer from "./characters.js";    
import template_yahu_dialogue from "../story/dialogue/template_yahu_dialogue.json" with {type: "json"};


console.log("All Characters Loaded:")
console.log(CharacterContainer.get_all_character_names())

const yahu_dialogue = new Dialogue("Benjamin Netanyahu", "./resources/images/netanyahu.png");
await yahu_dialogue.conversation(template_yahu_dialogue);