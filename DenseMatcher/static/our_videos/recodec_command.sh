for file in *.mp4; do ffmpeg -i "$file" -c:v libx264 -c:a aac "new_$file"; done
