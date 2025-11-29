# LegalPlace Take-Home Test

This document provides a concise description of the project's tooling and configuration.

## Scripts

* **dev** — Runs the TypeScript source using `ts-node` in ESM mode.
* **build** — Compiles the TypeScript codebase to JavaScript using `tsc`.
* **start** — Executes the compiled application from `dist/`. Used to generate `output.json`.
* **typecheck** — Performs type-checking without emitting output.
* **lint** — Runs ESLint across the project.
* **lint:fix** — Applies automatic fixes using ESLint.
* **format** — Formats files using Prettier.
* **test** — Executes the Jest test suite without cache.

## Main development dependencies

* **typescript**, **ts-node**, **@types/node** — TypeScript compiler, runtime support, and Node.js types.
* **jest**, **ts-jest**, **@types/jest** — Testing framework with TypeScript integration.
* **eslint**, **@typescript-eslint/***, **prettier** — Linting and formatting utilities.
