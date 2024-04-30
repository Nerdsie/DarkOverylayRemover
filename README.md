# Dark Overlay Remover

For some reason many videos display a large dark gradient overlay whenever you hover the video's page.  I often fast forward through shows, or go back to watch certain parts, and it just gets in my way. This addon removes them completely!  

## How it works

The addon scans for elements that have a gradient background.  It checks to see if that element is within the bounds of a video element.  If it is, the gradient background is removed.

## Installation

If you just want to use the extension, go to https://addons.mozilla.org/en-US/firefox/addon/dark-overlay-remover/ and install the extension. There is currently no setup or configuration required.

## Dev Installation

If you want to install this for development, clone the repository.  Then in Firefox go to navigate to about:debugging#/runtime/this-firefox, click "Load Temporary Add-On" and select the manifest.json file.
Whenever you update the code, you might need click "Reload".  I believe there are ways to automate this but I wrote this in 30 minutes and didn't bother figuring it out.

## Issues

If you encounter an issue, such as a background being removed when it shouldn't be, or a background not being removed when it should, please go to https://github.com/Nerdsie/DarkOverylayRemover/issues and explain what the issue is and what url it happened at.
