commands = [{
         name: "fov",
         description: "Custom commands on the modded server",
         alias: "fov",
         permission: "User",
         execute: (gameEvent) => {
             var server = gameEvent.Owner;
             var cid = gameEvent.Origin.ClientNumber;
             server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd fov:${cid}`).Result;
             }
     },
     {
         name: "fps",
         description: "Custom commands on the modded server",
         alias: "fps",
         permission: "User",
         execute: (gameEvent) => {
             var server = gameEvent.Owner;
             var cid = gameEvent.Origin.ClientNumber;
             server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd fps:${cid}`).Result;
         }
     },
     {
        name: "music",
        description: "Custom commands on the modded server",
        alias: "music",
        permission: "User",
        execute: (gameEvent) => {
            var server = gameEvent.Owner;
            var cid = gameEvent.Origin.ClientNumber;
            server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd killcammusic:${cid}`).Result;
        }
    },
    {
        name: "kmusic",
        description: "Custom commands on the modded server",
        alias: "kmusic",
        permission: "User",
        execute: (gameEvent) => {
            var server = gameEvent.Owner;
            var cid = gameEvent.Origin.ClientNumber;
            server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd knifemusic:${cid}`).Result;
        }
    },
     {
        name: "promod",
        description: "Custom commands on the modded server",
        alias: "promod",
        permission: "User",
        execute: (gameEvent) => {
            var server = gameEvent.Owner;
            var cid = gameEvent.Origin.ClientNumber;
            server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd promod:${cid}`).Result;
        }
    },
];


plugin = {
    author: 'DeeP',
    version: 1.1,
    name: 'CustomCMD',
};
