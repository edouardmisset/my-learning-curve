---
date: 2025-11-16
title: Git Bisect
excerpt: "Git bisect is a powerful debugging tool that uses binary search to help you find the exact commit that introduced a bug in your codebase."
tags: ['Git', 'Debugging', 'Binary Search', 'Version Control', 'Bug Hunting']
lastUpdated: 2025-11-16
---

## TL;DR

```bash
# Manual bisecting
git bisect start
git bisect bad              # Current commit has the bug
git bisect good v1.0.0      # Known good commit
# Test your code, then mark each commit:
git bisect good             # or 'git bisect bad'
git bisect reset            # When done

# Automated bisecting
git bisect start HEAD v1.0.0
git bisect run npm test     # Or any test script
git bisect reset
```

## The concept

> Git bisect - Use binary search to find the commit that introduced a bug.
>
> ~ Git Documentation

```bash
git bisect <subcommand> <options>
```

**Git bisect** uses binary search to efficiently find the commit that introduced
a bug. Instead of manually checking each commit one by one, bisect divides the
commit history in half with each step, greatly reducing the time needed to
locate problematic changes.

<!-- truncate -->

## How it works

Git bisect uses **binary search** to find the problematic commit:

1. Mark a "bad" commit (where the bug exists)
2. Mark a "good" commit (where the bug doesn't exist)
3. Git checks out the commit in the middle
4. You test and mark it as "good" or "bad"
5. Repeat until the culprit is found

With each step, you eliminate half of the remaining commits. For 100 commits,
you'll find the bug in ~7 steps (log₂(100) ≈ 6.64).

## Basic usage

### Manual bisecting

```bash
# Start the bisect session
git bisect start

# Mark the current commit as bad (bug exists here)
git bisect bad

# Mark a known good commit (use commit hash or tag)
git bisect good v1.2.0
# or
git bisect good a1b2c3d

# Git checks out a commit in the middle
# Test your code, then mark it:
git bisect good  # if bug doesn't exist
# or
git bisect bad   # if bug exists

# Repeat until Git finds the first bad commit
# Git will output something like:
# "abc1234 is the first bad commit"

# When done, return to your original branch
git bisect reset
```

## Automated bisecting

The real power of `git bisect` comes when you automate the testing process.

```bash
# Run bisect with a test script
git bisect start HEAD v1.0.0
git bisect run npm test
```

Git marks commits based on your script's exit code:

- Exit code **0** = good commit
- Exit code **1-127** (except 125) = bad commit
- Exit code **125** = skip this commit

### Example test script

```bash
#!/bin/bash
# test-for-bug.sh

npm install
npm run build
npm test -- --testNamePattern="user validation"

# Exit code 0 = pass (good), 1 = fail (bad)
```

```bash
chmod +x test-for-bug.sh
git bisect start HEAD v1.0.0
git bisect run ./test-for-bug.sh
```

## Useful commands

```bash
# Skip a commit that can't be tested
git bisect skip

# View bisect history
git bisect log

# Visualize remaining commits
git bisect visualize
```

## Tips

- **Use tags/branches** instead of commit hashes: `git bisect good v1.0.0`
- **Keep tests fast**: Run only what's necessary to verify the bug
- **Automate when possible**: Automated bisecting is faster and less error-prone
- **Ensure deterministic tests**: Flaky tests will give incorrect results
- **Always reset**: Run `git bisect reset` when done to avoid detached HEAD

## Resources

Official Git documentation on [git bisect](https://git-scm.com/docs/git-bisect)

Git SCM book chapter on [debugging with Git](https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git#_binary_search)

Julia Evans' zine on [git bisect](https://wizardzines.com/comics/look-at-recent-changes/)

---

## Disclaimer

_This article was drafted with the assistance of AI and reviewed/edited by the author._
