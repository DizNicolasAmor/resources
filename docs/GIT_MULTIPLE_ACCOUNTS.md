# GIT: USE MULTIPLE ACCOUNTS

Sources:

- https://psychowhiz.medium.com/configuring-multiple-ssh-keys-for-git-on-the-same-device-41c29320e5fe
- https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/

Summary:

1. Generate SSH keys.
2. Add SSH keys to Git account (github, gitlab or bitbucket).
3. Register SSH keys with the ssh-agent.
4. Create SSH config File:

   ```
   Host personal.github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa

   Host work.github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_work_account2
   ```

5. Set a Git repo configuration.
   - For example if you wanna work on `https://github.com/someuser/some-repo` repository with your personal account, clone it with SSH (`git@personal.github.com:someuser/some-repo.git`). Note that *personal.github.com* matches with the info from previous `config` file. If you wanna use your work account, then clone the repo with `git@work.github.com:someuser/some-repo.git`
6. After cloning the repository, set the user name and user email you will use for that project:
   ```
   # updates git config user name and email
   $ git config user.name "User 2"
   $ git config user.email "user2@somemail.com"
   ```
