#!/usr/bin/env node

import { validateArgs } from "../lib/validateArgs.js";
import { createProject } from "../lib/createProject.js";

const args = process.argv.slice(2);

const { type, name } = validateArgs(args);

createProject(type, name);
