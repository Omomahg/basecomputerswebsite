const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);

function shareFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank');
}

function shareWhatsApp() {
    window.open(`https://wa.me/?text=${pageTitle}%20${pageUrl}`, '_blank');
}

function shareTwitter() {
    window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`, '_blank');
}

function shareEmail() {
    window.location.href = `mailto:?subject=${pageTitle}&body=${pageTitle}%20${pageUrl}`;
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => alert("Failed to copy link"));
}

