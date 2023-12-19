# gitflow branching strategy

For feature branches:

- May branch off from `develop` branch.
- Branch naming convention: `feature/*`.
- Commit some changes in the feature branch and then push it.
- In gihub/gitlab/bitbucket make a PR from your branch to `develop`.
- After the PR is merged, delete your feature branch.

For releases:

- May branch off from `develop` branch.
- Branch naming convention: `release/*`.
- For example, git checkout -b `release/1.1.0`.
- Commit some changes (for example the changelog and the version) and then push it.
- In gihub/gitlab/bitbucket make PR to `develop` and `master` branches.
- After the PR is merged, delete the branch in the remote repository.
- After the merge in `master`, create a tag. For example `git tag -a 1.1.0`.
- Push the tag.

For hotfixes:

- May branch off from `master` branch.
- Branch naming convention: `hotfix/*`.
- Commit some changes and then push it.
- In gihub/gitlab/bitbucket make PR to `develop` and `master` branches. Make sure there are no merge conflicts. If there are merge conflicts for example in the PR that points to `master`, solve them by merging `master` in your release branch.
- After the PR is merged, delete the branch in the remote repository.
- After the merge in `master`, create a tag. For example `git tag -a 1.1.0`.
- Push the tag.
