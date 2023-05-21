commands = [{
    name: "wtf",
    description: "Custom commands on the modded server",
    alias: "wtf",
    permission: "SeniorAdmin",
    targetRequired: true,
    arguments: [{
        name: 'player',
        required: true
    }],
    execute: (gameEvent) => {
        var server = gameEvent.Owner;
        var cid = gameEvent.Origin.ClientNumber;
        server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd wtf:${cid}`).Result;
	    }
	},
    {
        name: "jump",
        description: "Custom commands on the modded server",
        alias: "jump",
        permission: "SeniorAdmin",
        execute: (gameEvent) => {
            var server = gameEvent.Owner;
            var cid = gameEvent.Origin.ClientNumber;
            server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd jump:${cid}`).Result;
            }
     },
     {
         name: "jumpoff",
         description: "Custom commands on the modded server",
         alias: "jumpoff",
         permission: "SeniorAdmin",
         execute: (gameEvent) => {
            var server = gameEvent.Owner;
            var cid = gameEvent.Origin.ClientNumber;
            server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd jumpoff:${cid}`).Result;
            }

     },
     {
         name: "fov",
         description: "Custom commands on the modded server",
         alias: "fov",
         permission: "SeniorAdmin",
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
         permission: "SeniorAdmin",
         execute: (gameEvent) => {
             var server = gameEvent.Owner;
             var cid = gameEvent.Origin.ClientNumber;
             server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd fps:${cid}`).Result;
         }
     },
     {
         name: "panel",
         description: "Custom commands on the modded server",
         alias: "panel",
         permission: "SeniorAdmin",
         execute: (gameEvent) => {
            var server = gameEvent.Owner;
            var cid = gameEvent.Origin.ClientNumber;
            server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd panel:${cid}`).Result;
            }   
     }, 
     {
         name: "leader",
         description: "Custom commands on the modded server",
         alias: "leader",
         permission: "SeniorAdmin",
         targetRequired: true,
         arguments: [{
             name: 'player',
             required: true
         }],
         execute: (gameEvent) => {
            var server = gameEvent.Owner;
            var cid = gameEvent.Origin.ClientNumber;
            server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd leader:${cid}`).Result;
         }
     },
     {
        name: "spawn",
        description: "Custom commands on the modded server",
        alias: "spawn",
        permission: "SeniorAdmin",
        targetRequired: true,
        arguments: [{
            name: 'player',
            required: true
        }],
        execute: (gameEvent) => {
           var server = gameEvent.Owner;
           var cid = gameEvent.Origin.ClientNumber;
           server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd spawn:${cid}`).Result;
        }
    },
    {
        name: "spect",
        description: "Custom commands on the modded server",
        alias: "spect",
        permission: "SeniorAdmin",
        targetRequired: true,
        arguments: [{
            name: 'player',
            required: true
        }],
        execute: (gameEvent) => {
           var server = gameEvent.Owner;
           var cid = gameEvent.Origin.ClientNumber;
           server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd spect:${cid}`).Result;
        }
    }, 
    {
        name: "flash",
        description: "Custom commands on the modded server",
        alias: "flash",
        permission: "SeniorAdmin",
        targetRequired: true,
        arguments: [{
            name: 'player',
            required: true
        }],
        execute: (gameEvent) => {
           var server = gameEvent.Owner;
           var cid = gameEvent.Origin.ClientNumber;
           server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd flash:${cid}`).Result;
        }
    }, 
    {
        name: "r700",
        description: "Custom commands on the modded server",
        alias: "r700",
        permission: "SeniorAdmin",
        targetRequired: true,
        arguments: [{
            name: 'player',
            required: true
        }],
        execute: (gameEvent) => {
           var server = gameEvent.Owner;
           var cid = gameEvent.Origin.ClientNumber;
           server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `cmd r700:weapon${cid}`).Result;
        }
    } 
];


plugin = {
    author: 'DeeP',
    version: 1.1,
    name: 'CustomCMD',
};