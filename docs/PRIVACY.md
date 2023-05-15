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

## Verify PGP signature

1. Download the public key (`.asc` file) of the software author. Example: `wget https://www.someresource.xyz/my-file_public_key.asc`.
1. Check the public key’s fingerprint. Example: `gpg --show-keys my-file_public_key.asc`. Then compare the key with the one shown in the author's website.
1. Import the correct public key to your GPG public keyring. Example: `gpg --import my-file_public_key.asc`.
1. Download the PGP signature file (`.sig`) of the software.
1. Use public key to verify PGP signature. Example: `gpg --verify my-file.deb.sig my-file.deb`.
