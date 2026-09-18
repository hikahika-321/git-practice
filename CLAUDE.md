# Project Instructions

## Development workflow

- Before making changes, inspect the relevant files and run `git status`.
- Keep changes focused on the current task.
- Stage only files related to the task. Do not use `git add .`.
- Do not push, merge, or force-push unless explicitly requested.
- Never force-push `main`.

## Quality checks

After changing JavaScript or project configuration, run:

- `npm run lint`
- `npm run format:check`

Fix failures before reporting the task as complete.

Do not run repository-wide `npm run format` unless the task explicitly requires broad formatting changes.

## Git

- `main` is protected.
- Development changes should be made on a feature or chore branch and merged through a pull request.
- Preserve unrelated working-tree changes.