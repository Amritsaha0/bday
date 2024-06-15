function expandTimeline() {
    const fullscreenTimeline = document.getElementById('fullscreen-timeline');
    const expandedTimeline = document.getElementById('expanded-timeline');

    fullscreenTimeline.classList.add('hidden');
    expandedTimeline.classList.remove('hidden');

    // Show timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 500); // Adjust timing as needed
    });
}
