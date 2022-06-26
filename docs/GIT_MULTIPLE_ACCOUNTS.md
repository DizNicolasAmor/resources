# GIT: USE MULTIPLE ACCOUNTS

Sources:

- https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/

Summary:

1. Generate SSH keys.
2. Add SSH keys to Git account (github, gitlab or bitbucket).
3. Register SSH keys with the ssh-agent.
4. Create SSH config File:

   ```
   Host user1 github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa

   Host user2 github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_work_account2
   ```

5. Set a Git repo configuration.
   - For example if you wanna work on `https://github.com/someuser/some-repo` repository, clone it with SSH (`git@github.com:someuser/some-repo.git`), but replace the `github.com` part with the username you wanna use. This should match with the info from previous `config` file. if you will use `user2`, then clone the repo with `git@user2:someuser/some-repo.git`
6. After cloning the repository, set the user name and user email you will use for that project:
   ```
   # updates git config user name and email
   $ git config user.name "User 2"
   $ git config user.email "user2@somemail.com"
   ```
