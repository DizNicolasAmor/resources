# FORMAT_USB

```
# list the disks, so you can identify the usb
$ lsblk

# format the disk with fat32. Replace sdxx with the name of your target disk
$ sudo mkdosfs -F 32 -I /dev/sdxx
```