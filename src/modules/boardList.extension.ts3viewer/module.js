"use strict";

import {DefaultModule} from "../../api";
import React from "react";
import ReactDOM from "react-dom";
const debug = require("debug")("B++:module:boardList.extension.ts3viewer");
import TS3ViewerTemplate from "./Template.jsx";

export default class Module extends DefaultModule {
    constructor() {
        super();
        debug("Wird geladen...");

        this.register({
            "key": "option.boardList.extension.ts3viewer.enabled",
            "name": "Teamspeak 3 Anzeige",
            "tab": "Einstellungen",
            "subtab": "Startseite",
            "category": "Erweiterungen",
            "type": "toggle",
            "default": false,
            "description": "Fügt auf der Startseite eine Infobox hinzu, welche anzeigt wer gerade auf dem Teamspeak Server ist."
        });
        this.register({
            "key": "option.boardList.extension.ts3viewer.refreshInterval",
            "type": "invis",
            "default": 60000
        });

        if (!this.isTemplate("boardList")) {
            debug("Falsches template -> SKIP");
            return;
        }

        if (!this.storage.get("option.boardList.extension.ts3viewer.enabled", false)) {
            debug("Deaktiviert -> SKIP");
            return;
        }

        //const infobox = document.querySelector(".infoBoxList");
        const container = document.createElement("li");
        //container.className = "box32";
        document.querySelector(".infoBoxList").insertBefore(container, document.querySelector(".box32.statsInfoBox"));
        ReactDOM.render(<TS3ViewerTemplate
            cacheLifetime={300000} // https://github.com/BreadfishPlusPlus/Teamspeak-Info#cache_lifetime
            debug={debug}
            nickname={this.userName}
            refreshInterval={this.storage.get("option.boardList.extension.top5box.refreshInterval", 60000)}
        />, container);
    }
}
