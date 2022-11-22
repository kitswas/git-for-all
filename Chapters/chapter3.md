# Checking out (Loading saves)

> Earlier, you mentioned something about `checkout` being the git equivalent of loading a save. How does that work?

`checkout` is a command that allows you to switch between different commits. It is also used to switch between branches.

## Switching branches

Each branch represents a storyline. Wheen you switch to (`checkout`) a branch, you are loading the save from the latest commit on that branch.

For those of you who have played video games, this is like continuing after switching to a different save slot.

## Checking out a commit (Detached HEAD)

When you `checkout` a commit, you are loading the save from that commit. This is called a `detached HEAD` state. You are not on any branch. You are on a commit.

Each commit is assigned a unique name called a `hash`. You can use this hash to load a specific commit.

> But you said that messages are like commit names. Why do we need hashes?

Because you can have multiple commits with the same message. Hashes are (effectively) unique.  
Messages are for humans. Hashes are for computers.  
You can search for a commit by message and then get its hash.

Hashes also provide security. A file will have a different hash if it is tampered with.

See [this discussion](https://stackoverflow.com/q/2444321/8659747) for some mathematical details.

[Previous](./chapter2.md){: .btn} [Next](./chapter4.md){: .btn}
