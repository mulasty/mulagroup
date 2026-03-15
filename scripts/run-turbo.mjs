import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const turboBinary =
  process.platform === "win32"
    ? path.join(rootDir, "node_modules", ".bin", "turbo.cmd")
    : path.join(rootDir, "node_modules", ".bin", "turbo");

const args = process.argv.slice(2);
const env = {
  ...process.env,
  PATH: `${rootDir}${path.delimiter}${process.env.PATH ?? ""}`
};

const child =
  process.platform === "win32"
    ? spawn("cmd.exe", ["/d", "/s", "/c", turboBinary, ...args], {
        cwd: rootDir,
        env,
        stdio: "inherit"
      })
    : spawn(turboBinary, args, {
        cwd: rootDir,
        env,
        stdio: "inherit"
      });

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
