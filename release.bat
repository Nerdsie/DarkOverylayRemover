@echo off
setlocal

:: Define the path for the output zip file
set "ZIP_FILE=release.zip"

:: Use PowerShell to zip the specific files
powershell -NoProfile -Command "Compress-Archive -Path '.\content.js', '.\background.js', '.\manifest.json' -DestinationPath '.\%ZIP_FILE%' -Force"

echo Files 'content.js', 'background.js', and 'manifest.json' have been zipped into '%ZIP_FILE%'.
echo:
pause

endlocal
