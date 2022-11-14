# Working remotely

Now that you have a basic understanding of Git, you are probably feeling like a shark in a fishbowl.

![Shark in a fishbowl](images/shark_in_a_fishbowl.svg)

> I have heard of people using Git to contribute to open source projects and for collaboration, but am not sure how to do that.

Till now, you have been learning how to work with Git on your local machine.  
In this chapter, you will learn how to work with remote repositories.

## Remote repositories

Remote repositories (`remotes`) are the repositories you don't have on your local device. You can push to remote repositories to share your work with others and pull from them to get work from others.

When you clone a repository, you get a local repository with the remote repository added as a remote named `origin`. You can also add remotes to a local repository.

Git supports the following operations on remotes:

- `fetch` - Downloads the latest changes from the remote repository.
- `pull` - Downloads the latest changes from the remote repository and merges them into the current branch. It is a combination of `fetch` and `merge`.
- `push` - Sends the latest changes from the current branch to the remote repository.
