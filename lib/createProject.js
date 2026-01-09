// lib/createProject.js
import fs from "fs";
import path from "path";
import { copyTemplate } from "./copyTemplate.js";

export function createProject(type, name) {
  const targetPath = path.resolve(process.cwd(), name);
  const templatePath = path.resolve("templates", type);

  if (!fs.existsSync(templatePath)) {
    console.log(`Template "${type}" no existe`);
    process.exit(1);
  }

  if (fs.existsSync(targetPath)) {
    console.log("La carpeta ya existe");
    process.exit(1);
  }

  fs.mkdirSync(targetPath);
  copyTemplate(templatePath, targetPath);

  console.log("✅ Proyecto creado correctamente");
}
