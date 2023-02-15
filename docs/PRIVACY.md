# PRIVACY

## GPG

It is a tool to encrypt and decrypt files and directories.

```
# it will create a MY_FILE.txt.gpg file
gpg -c MY_FILE.txt

# it will decrypt the file in the console
gpg -d MY_FILE.txt.gpg

# it will decrypt the file and save it in a new MY_FILE.txt file
gpg -d MY_FILE.txt.gpg > MY_FILE.txt
```

## ccrypt

```
# install ccrypt
sudo apt-get install ccrypt

# encrypt a file. It will generate a .cpt file
ccencrypt <filename>

# decrypt a file
ccdecrypt <filename.cpt>
```

## VeraCrypt

It is a unique encryption system. It creates an entire virtual volume that is encrypted. This volume, when mounted the right way, can be used like just another storage device, to copy files to and from in the usual way, but once unmounted, it is no more there. The volume exists inside a blurred binary file, which no one can read.

```
# Installation
# On all distributions, VeraCrypt needs to be downloaded and installed.

# Setup
# First an empty file needs to be created. Name it EncryptedVolume:

touch EncryptedVolume

# Then, open up VeraCrypt and follow the steps.
# Choose a volume from the list, click ‘Create Volume‘ option...
# In Volume Location, select the file EncryptedVolume we have created.
# And so on.

# To see the directory, you will have to open VeraCrypt and Mount the volume.
# To hide it you will have to Dismount it.
```
