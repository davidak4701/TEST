# Review instructions

## What Important means here
Reserve Important for findings that would break behavior, leak data,
or block a rollback. Style, naming, and refactoring are Nit at most.

## Cap the nits
Report at most five Nits per review.

## Do not report
- Anything CI already enforces: lint, formatting, type errors
- Generated files under `dist/` and any `*.lock` file

## Always check
- New API routes have an integration test
- Log lines don't include email addresses or tokens

## Evidence
Behavior claims need a `file:line` citation, not an inference from naming.
Start the summary with the number of findings. Say plainly when there is nothing to fix.
