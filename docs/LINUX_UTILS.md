# Cut videos on Linux

```
# Explanation
#    ffmpeg is the name of the app
#    input.mp4 and output.mp4 are files names
#    00:00:00 and 00:10:20 are the start time and end time
ffmpeg -i input.mp4 -ss 00:00:00 -t 00:10:20 -c copy output.mp4
```

# Merge PDF

```
pdfunite 1.pdf 2.pdf 3.pdf result.pdf
```

# Convert Image to PDF among other tools

```
# Install ImageMagick
sudo apt update & sudo apt install imagemagick

# Note
# Parsing PDF was disabled in /etc/ImageMagick-7/policy.xml due to its inherent insecurity.
# You may enable it locally by commenting or removing this line:
#
# <policy domain="coder" rights="none" pattern="PDF" />
#
# After saving that change, return to the console

# use the convert app
convert yourImage.jpg yourResult.pdf
```

# Get system information in linux

```
sudo dmidecode -t system
```

# Kill process on port

For example, supose there is a process on port 3000.

```
# On Linux/Mac OS
$ lsof -i tcp:3000
$ kill -9 PID # replace PID by the target process id

# On Windows
$ netstat -ano | findstr :3000
$ tskill typeyourPIDhere # change tskill for taskkill in git bash
```

# File System Consistency Check (fsck)

The fsck (File System Consistency Check) Linux utility checks filesystems for errors or outstanding issues. The tool is used to fix potential errors and generate reports.

Examples:

```
# run fsck in your disk placed on sdb
fsck /dev/sdb

# Fix Detected Errors Automatically
# Pass the -y option
# It is like saying "yes, try to fix all detected errors"
# without being prompted every time.
fsck -y /dev/sdb
```
