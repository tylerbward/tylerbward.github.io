// Toggle news items visibility
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-news');
    const hiddenNews = document.querySelectorAll('.hidden-news');
    let isExpanded = false;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;
            
            hiddenNews.forEach(function(newsItem) {
                if (isExpanded) {
                    newsItem.style.display = 'block';
                } else {
                    newsItem.style.display = 'none';
                }
            });
            
            // Update button text
            toggleBtn.textContent = isExpanded ? 'Less news...' : 'More news...';
        });
    }
});
