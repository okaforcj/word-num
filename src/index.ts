#!/usr/bin/env node

import { convertCommand } from "./commands/ConvertCommand";
import { showCommand } from "./commands/ShowCommand";
import { rootCommand } from "./program/rootCommand";

const version = process.env.npm_package_version;

rootCommand.version(version ?? "1.0.0");

showCommand()
convertCommand()

rootCommand.parse(process.argv);
