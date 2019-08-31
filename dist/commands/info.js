"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class info {
    constructor() {
        this._command = "info";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject) {
        msgObject.channel.send("https://enyalius.net/");
        msgObject.channel.send("Minecraft 1.12.2");
        msgObject.channel.send("IP: Enyalius.net");
    }
}
exports.default = info;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBaUJ0QyxDQUFDO0lBZkcsSUFBSTtRQUNBLE9BQU8sbURBQW1ELENBQUM7SUFDL0QsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDM0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUo7QUFuQkQsOEJBbUJDIn0=