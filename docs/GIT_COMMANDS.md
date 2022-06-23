# GIT COMMANDS

## CREATE A BUNDLE AND THEN UNBUNDLE IT

```
# bundle
$ git bundle create mybundle HEAD master

# verify result
$ git bundle verify mybundle

# unbundle
$ mkdir newrepo
$ cd newrepo
$ paste mybundle here
$ git init
$ git pull mybundle
```

## TEMPORARY STORE PASSWORDS IN MEMORY

```
git config credential.helper 'cache --timeout=600'
```

## SET PROJECT TO REMOTE PROJECT

```
# inside your repo delete old git data
$ rm -rf .git*

# initialize new git and set remote direction
$ git init
$ git add .
$ git commit -m "First commit"
$ git remote add origin your-remote-url
$ git push -u origin master
```

## SYNC FORK WITH ORIGINAL REPO

```
# 1. show the remote repos. If you already have the upstream ok, go to 4.
git remote -v

# 2. supose the original repo is git@github.com:johndoe/original-repo.git
# to add it as upstream, write
git remote add upstream git@github.com:johndoe/original-repo.git

# 3. confirm the upstream is added
git remote -v

# 4. now sync your local repo with upstream
git fetch upstream

git merge upstream/master

# 5. push your local changes into your remote fork
git push origin master
```

## CLEAN REPO

```
$ git clean -Xdf
```

## RESETTING LAST COMMITS

```
# Remove last commit and leave the changes in staging area
$ git reset --soft HEAD~1

# Remove last commit entirely
$ git reset --hard HEAD~1
```
