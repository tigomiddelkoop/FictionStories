import {httpServer, httpsServer} from "../connectors";
import * as config from "./config"

export async function boot() {

    // const options = commandLineArgs([
    //     {name: 'help', alias: 'h'},
    //     {name: 'install', alias: 'i', type: Boolean, defaultValue: false},
    //     {name: 'noauth', type: Boolean, defaultValue: false},
    //     {name: 'nologo', type: Boolean, defaultValue: false},
    // ]);
    //

    //await migrate(); // We first migrate the DB before showing the installer or booting the engine
    //if (options.install) await installer();
    //await queue();

    httpServer.listen(config.http.port, config.http.host);
    httpsServer.listen(config.https.port, config.https.host);
    await graphqlServer();
}


// @TODO WILL GET REMOVED AFTER I HAVE A "UPDATER"
// updateDebug(`---
//
// ⬆ New update available
// ⬆ Newest version is Version 0.0.2
//
// ---`);
