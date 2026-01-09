// lib/validateArgs.js
export function validateArgs(args) {
  const [command, type, name] = args;

  if (command !== "init") {
    console.log("Comando inválido");
    console.log("Uso: scaffold init <react|express|vanilla> <nombre>");
    process.exit(1);
  }

  if (!type) {
    console.log("Debes indicar el tipo de proyecto");
    process.exit(1);
  }

  return {
    type,
    name: name || "my-project"
  };
}
