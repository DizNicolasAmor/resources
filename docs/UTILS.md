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
