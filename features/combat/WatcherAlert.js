import settings from "../../settings";
import { AMOGUS, BOLD, GOLD, GREEN } from "../../utils/constants";
import { playSound } from "../../utils/functions/misc";
import { registerWhen } from "../../utils/variables";


/**
 * Tracks chat messages from "The Watcher" to call an emergency meeting whenever he finishes spawning (meant for f11 blood camps).
 * Includes two messages since messages glitch out if mobs are killed too fast.
 */
registerWhen(register("chat", () => {
    if (cd) return;
    Client.showTitle(`${GREEN + BOLD}BLOOD COMPLETE!`, "", 0, 25, 5);
    playSound(AMOGUS, 3000);
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass."), () => settings.watcherAlert);
registerWhen(register("chat", () => {
    if (cd) return;
    Client.showTitle(`${GOLD + BOLD}BLOOD SPAWNED!`, "", 0, 25, 5);
    playSound(AMOGUS, 3000);
}).setCriteria("[BOSS] The Watcher: That will be enough for now."), () => settings.watcherAlert);
