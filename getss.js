commands = [{
       name: "getss",
       description: "Custom commands on the modded server",
       alias: "getss",
       permission: "User",
       targetRequired: true,
       arguments: [{
       name: 'player',
       required: true
    }],

    execute: (gameEvent) => {

        var server = gameEvent.Owner;
        var cid = gameEvent.Target.ClientNumber;
        var name = gameEvent.Target.CleanedName;
        
        server.RconParser.ExecuteCommandAsync(server.RemoteConnection, `getss ${cid}`).Result;
        gameEvent.Origin.Tell(`Screenshot of ${name} will be taken soon.`);
	    }
	},
];


plugin = {
    author: 'DeeP',
    version: 1,
    name: 'CustomCMD',
};

