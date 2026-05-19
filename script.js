        // Prevent event propagation for share buttons
        function openShareInterface(event) {
    event.stopPropagation();

    // Find the parent .social-link (if exists)
    const socialLinkContainer = event.target.closest('.social-link');
    if (socialLinkContainer) {
        const anchor = socialLinkContainer.querySelector('a');
        if (anchor) {
            document.getElementById('linkToCopy').value = anchor.href;
        }
    }

    document.getElementById('shareOverlay').style.display = 'block';
    document.getElementById('shareInterface').style.display = 'block';
}

        
        function closeShareInterface() {
            document.getElementById('shareOverlay').style.display = 'none';
            document.getElementById('shareInterface').style.display = 'none';
        }
        
        function shareOnPlatform(platform) {
            const link = document.getElementById('linkToCopy').value;
            let shareURL = '';

            switch (platform) {
                case 'facebook':
                    shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
                break;
                case 'whatsapp':
                    shareURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
                break;
                case 'linkedin':
                    shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
                break;
                case 'messenger':
                    shareURL = `https://xexanterxcin.github.io/Project-NFC-HUNT/404/`;
                break;
                }

            if (shareURL) {
                window.open(shareURL, '_blank');
            }

            closeShareInterface();
            }

        
        function copyLink() {
            const copyText = document.getElementById('linkToCopy');
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand('copy');
            alert('Link copied to clipboard: ' + copyText.value);
        }
        
        function openNotification() {
            const terminal = document.getElementById('notificationTerminal');
            terminal.style.display = terminal.style.display === 'block' ? 'none' : 'block';
        }
        
        function makeCall() {
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                window.location.href = 'tel:+0001234567890';
            } else {
                alert('Calling: +0001234567890 (This would dial on a mobile device)');
            }
        }
        
        // Close interfaces when clicking outside
        document.getElementById('shareOverlay').addEventListener('click', closeShareInterface);
        
        // Prevent closing when clicking inside the interface
        document.getElementById('shareInterface').addEventListener('click', function(e) {
            e.stopPropagation();
        });