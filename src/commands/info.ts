import * as Discord from "discord.js";

export class info {

    private readonly _command = "info";
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message): void {

        msgObject.channel.send("https://enyalius.net/");
        msgObject.channel.send("Minecraft 1.12.2");
        msgObject.channel.send("IP: Enyalius.net");
    }

}
