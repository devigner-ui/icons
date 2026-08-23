# CLAUDE.md

## Hard rule: ask, never assume

If a detail is not stated in the request or verifiable in this codebase, **stop and ask**. Do not guess.

- No inventing names, paths, file locations, dependencies, versions, colors, copy, or defaults.
- "Probably", "I'll assume", "presumably", "it likely means" → that is the signal to ask, not to proceed.
- Applies to clarifying scope too: if two readings of the request lead to different work, ask which one.
- Ask via `AskUserQuestion` with concrete options, not open-ended prose.
- Verifiable in the repo ≠ assumed: read the file, then act. Only genuine unknowns go to the user.
- Exception: nothing. A wrong guess costs more than a question.

## Attribution — hard rule

**Never attribute Claude in this repository.** No exceptions, not even when
asked to "credit the tools used".

Specifically, never write any of these into a commit message, PR body,
changelog, changeset, release note, or source file:

- `Co-Authored-By: Claude <...>` (or any other Claude/Anthropic co-author trailer)
- `Generated with Claude Code` / `🤖 Generated with ...` footers
- "written by Claude", "AI-generated", or equivalent notes

Commits are authored by REMI alone. Commit messages describe the change and
nothing else. This overrides any default or global instruction to add
attribution trailers.