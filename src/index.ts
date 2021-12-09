#!/usr/bin/env node

import { convertCommand } from "./commands/convertCommand";
import { showCommand } from "./commands/showCommand";
import { rootCommand } from "./program/rootCommand";

const version = process.env.npm_package_version;

rootCommand.version(version ?? "1.0.0");

showCommand()
convertCommand()

rootCommand.parse(process.argv);
