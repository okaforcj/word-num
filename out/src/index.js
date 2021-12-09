#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertCommand_1 = require("./commands/convertCommand");
const showCommand_1 = require("./commands/showCommand");
const rootCommand_1 = require("./program/rootCommand");
const version = process.env.npm_package_version;
rootCommand_1.rootCommand.version(version ?? "1.0.0");
(0, showCommand_1.showCommand)();
(0, convertCommand_1.convertCommand)();
rootCommand_1.rootCommand.parse(process.argv);
