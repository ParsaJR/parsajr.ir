---
title: Obscure Git commands: reflog
date: 2026-07-05
description: 
image: /blog-images/cows.jpg
alt: ""
tags:
  - coding
draft: false



## Reflog
I wanna explain the reflog command by going into a familar scenario.

What happens when you accidentaly delete a local branch or overwrite a
commit. For beginner and intermediate users like me, it can seem like there is a
no way to recover.

Git has a less known command called `reflog`.

```sh
git reflog
```

git `reflog` is a command that gives you access to a log of previous Git
operations. The `reflog` command is like a time machine view into your Git
workflow: it effectively gives you the history of everything that has changed
HEAD, a special name that points to the commit that represents the current state
of your local repository. 

It even tracks changes that may not appear in the typical commit history:

- Creating commits
- Switching branches
- Resetting branches
- Amending commits
- Merges and rebases
- Reverting a commit
- Stashing changes
- Pulls and fetches
- Force pushes

Think of the `git reflog` command as a Git's version of shell history. Its also
similar to the `history` command in a way that, it shows only the logs that are
happened into your own, local session. 

Now how is that relates to our disaster despair scenario?

Let's create a branch, create a file and commit that.
```sh
$ git checkout -b big-feature
Switched to a new branch 'big-feature'

$ git commit -m 'big-change'
[big-feature a400869] big-change
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 content/en/biiiiiiiiiiiiiiiiiiiiiiiigggggg


$ git checkout main
Switched to branch 'main'

$ git branch -D big-feature
Deleted branch big-feature (was a400869).


$ git branch -v
* main 8c76b1d update post
```

Oops... You get that? we lost our branch!

Let's see what `reflog` has for us:

```sh
git reflog

8c76b1d (HEAD -> main, origin/main) HEAD@{0}: checkout: moving from big-feature to main
a400869 HEAD@{1}: commit: big-change
8c76b1d (HEAD -> main, origin/main) HEAD@{2}: checkout: moving from main to big-feature
8c76b1d (HEAD -> main, origin/main) HEAD@{3}: commit: update post

```

::info
Everything in Git is checksummed before it is stored and is then referred to by
that checksum. However, Git usually displays only an abbreviated hash, often
7–12 characters.
::

We can see that there is a log entry for a commit that moved the commit hash to
`a400869`. 

Then, to get our `big-change` branch back, we simply use the `git checkout -b`
command to create a new `big-change` branch with the commit hash as its most
recent commit:

```sh
git checkout -b big-change a400869
```

Now, our `big-feature` branch is exactly where it was before. Cool.



