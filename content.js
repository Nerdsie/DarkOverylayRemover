function isOverlayWithinVideo(videoRect, overlayRect) {
    return (
        overlayRect.top >= videoRect.top &&
        overlayRect.left >= videoRect.left &&
        overlayRect.bottom <= videoRect.bottom &&
        overlayRect.right <= videoRect.right
    );
}

function isOverlayWithinAnyVideo(overlayRect, videoBoundingBoxes) {
    for (let videoRect of videoBoundingBoxes) {
        if (isOverlayWithinVideo(videoRect, overlayRect)) {
            return true;
        }
    }
    return false;
}

function removeLinearGradients() {
    // Remove gradients from inline styles
    const elements = document.querySelectorAll('*');
    const videoElements = document.querySelectorAll('video');

    const videoBoundingBoxes = [];
    videoElements.forEach(video => {
        const boundingBox = video.getBoundingClientRect();
        videoBoundingBoxes.push(boundingBox);
    });

    elements.forEach(el => {
        if(!isOverlayWithinAnyVideo(el.getBoundingClientRect(), videoBoundingBoxes)) {
            return;
        }

        const style = el.style;
        if (style.backgroundImage.includes('linear-gradient') || style.background.includes('linear-gradient')) {
            if (style.backgroundImage.includes('linear-gradient')) {
                style.backgroundImage = 'none';
            }
            if (style.background.includes('linear-gradient')) {
                style.background = 'none';
            }
        }
    });

    // Modify CSS stylesheets
    for (let sheet of document.styleSheets) {
        try {
            if (sheet.cssRules) {
                for (let rule of sheet.cssRules) {
                    if (rule.style && (rule.style.backgroundImage.includes('linear-gradient') || rule.style.background.includes('linear-gradient'))) {
                        if (rule.style.backgroundImage.includes('linear-gradient')) {
                            rule.style.backgroundImage = 'none';
                        }
                        if (rule.style.background.includes('linear-gradient')) {
                            rule.style.background = 'none';
                        }
                    }
                }
            }
        } catch (e) {
            console.log('Cannot edit styles from other domains: ', e);
        }
    }
}

// Run the function when the script is loaded
removeLinearGradients();
