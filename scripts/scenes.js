import { SceneManager, Scene } from "./scene_manager.js";


SceneManager.add_scene(new Scene("Main Menu", () => {
    console.log("Welcome to the Main Menu!");
},
() => {
    console.log("Exiting Main Menu...");
}));


SceneManager.add_scene(new Scene("Yahu Intro", async () => {
    const template_yahu_dialogue = await fetch("../resources/jsons/dialogue/template_yahu_dialogue.json"); 

    const yahu_dialogue = document.querySelector("#yahu_dialogue");
    await yahu_dialogue.conversation(template_yahu_dialogue);
}));