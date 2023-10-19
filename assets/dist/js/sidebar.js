/* global bootstrap: false */
(() => {
    'use strict';
  
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  
    // Add click event listeners to the sidebar links
    const sidebarLinks = Array.from(document.querySelectorAll('.btn-toggle-nav a'));
    sidebarLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        // Get the clicked tab and subtab text
        const tabText = link.closest('.collapse').previousElementSibling.textContent.trim();
        const subtabText = link.textContent.trim();
  
        // Load and display the appropriate content based on the tab and subtab
        const content = getContent(tabText, subtabText);
        document.getElementById('content').innerHTML = content;
      });
    });
  
    function getContent(tab, subtab) {
    // dont judge this logic
      if (tab === 'Reports' && subtab === 'Report 1') {
        return '<h2>Report 1 Coming Soon</h2>';
      } else if (tab === 'Reports' && subtab === 'Report 2') {
        return '<h2>Report 2 Coming Soon</h2>';
      } else if (tab === 'Reports' && subtab === 'Team Charter') {
        return '<embed src="/assets/dist/docs/team_charter.pdf" type="application/pdf"/>';
      } else if (tab === 'Presentations' && subtab === 'Presentation 1') {
        return '<embed src="/assets/dist/docs/presentation_1.pdf" type="application/pdf"/>';
      } else if (tab === 'Presentations' && subtab === 'Presentation 2') {
        return '<embed src="/assets/dist/docs/presentation_2.pdf" type="application/pdf"/>';
      } else if (tab === 'Presentations' && subtab === 'Presentation 3') {
        return '<h2>Presentation 3 Coming Soon</h2>';
      } else if (tab === 'CAD' && subtab === 'Final Concept') {
        return '<h2>Content for Final Concept</h2>';
      } else if (tab === 'CAD' && subtab === 'Protoype 1') {
        return '<h2>Protoype 1 Coming Soon</h2>';
      } else if (tab === 'CAD' && subtab === 'Protoype 2') {
        return '<h2>Protoype 2 Coming Soon</h2>';
      } else if (tab === 'CAD' && subtab === 'Final Design') {
        return '<h2>Final Design Coming Soon</h2>';
      } else if (tab === 'Financial' && subtab === 'Final BOM') {
        return '<h2>Final BOM Coming Soon</h2>';
      } else if (tab === 'Financial' && subtab === 'Receipts') {
        return '<h2>Receipts Coming Soon</h2>';
      } else if (tab === 'Staff Meeting Minutes' && subtab === '09-11-2023') {
        return '<embed src="/assets/dist/docs/meeting_9_11.pdf" type="application/pdf"/>';
      } else if (tab === 'Staff Meeting Minutes' && subtab === '09-25-2023') {
        return '<embed src="/assets/dist/docs/meeting_9_25.pdf" type="application/pdf"/>';
      } else if (tab === 'Staff Meeting Minutes' && subtab === '10-02-2023') {
        return '<embed src="/assets/dist/docs/meeting_10_2.pdf" type="application/pdf"/>';
      } else if (tab === 'Staff Meeting Minutes' && subtab === '10-16-2023') {
        return '<embed src="/assets/dist/docs/meeting_10_16.pdf" type="application/pdf"/>';
      } else {
        return '<h2>Welcome to the Docs Page!</h2><p>Please select a tab and subtab to view the content.</p>';      }
    }
  })();