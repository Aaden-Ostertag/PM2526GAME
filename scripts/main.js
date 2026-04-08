import Dialogue from "./dialogue.js";

const yahu_dialogue = new Dialogue("Benjamin Netanyahu", "../resources/images/netanyahu.png");

await yahu_dialogue.show();
await yahu_dialogue.reveal_multiple_texts(30, 1000, [
    "Hi! Im your boss, Bejamin Netanyahu.",
    "I have a very important task for you.",
    "I need you to sell potions and make money for me.",
    "Thanks brojob"
]);
yahu_dialogue.hide();