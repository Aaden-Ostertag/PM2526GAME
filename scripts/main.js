import Dialogue from "./dialogue.js";
import CharacterContainer from "./characters.js";    
import template_yahu_dialogue from "../resources/jsons/dialogue/template_yahu_dialogue.json" with {type: "json"};

function main() {
    const character_container = new CharacterContainer();
    character_container.load_characters();
    console.log(CharacterContainer.get_all_characters())

    const yahu_dialogue = new Dialogue("Benjamin Netanyahu", "./resources/images/netanyahu.png");
    await yahu_dialogue.conversation(template_yahu_dialogue);

    
}

main();