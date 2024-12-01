---
title: Chapter 1
description: Introduction to Git. How to save your work in Git.
---

# Git - an introduction

First let's enjoy a story - [Git is like many pots of soup](https://zmcartor.github.io/git/2013/07/13/git-for-everyone).

I hope the story gave you an idea of how it works.

## History of Git

The development of Git began on 3 April 2005. It was originally authored by Linus Torvalds, the creator of Linux, to help him manage the development of the Linux kernel. It was initially released in 2005, under the GNU General Public License version 2.

## Scope of this resource

Instead of teaching you how to work with git on the command line, we will be discussing the concepts and the workflow.

If this is not what you are looking for, you can find other resources [here](https://git-scm.com/doc).

## How it works

Suppose you have a folder (a.k.a. directory) named `MyProject` with some files in it. You want git to manage it.  
For this you need to tell git to create (`initialize`) a git repository in the folder.

![Git init](./images/git_init.svg)

This will create a hidden folder named `.git` in the folder. This is the repository and it contains _almost_ everything git needs to know.

> Great! What now?

Have you ever played video games? Remember the save button?

Make whatever changes you want to the files in the folder. When you are done ~~playing~~, press the save (`commit`) button.

> ???! That's...

That's it. A couple of points:

1. You need to preview (`stage`) the changes before you can commit them.
2. You need to provide a name (`message`) for the save.

> And how do I load a save?

The git equivalent of loading a save is called `checkout`.

### The three sections of a git project

1. Working directory - This is the folder (`MyProject`) that you see in your file explorer. It contains all the files that you are working on.  
2. Staging area - This is the preview area where you can select the changes that you want to commit.
3. Repository - This is the hidden folder `.git` that contains all the information about the project.

[Previous](../README.md){: .btn} [Next](./chapter2.md){: .btn}
