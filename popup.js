document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getJobDetails' }, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          document.getElementById('job-details').innerHTML = '<p>Error: Could not retrieve job details.</p>';
        } else if (response) {
          document.getElementById('location').textContent = response.location;
          document.getElementById('jobType').textContent = response.jobType;
          document.getElementById('role').textContent = response.role;
          document.getElementById('description').textContent = response.description;
        }
      });
    });
  });
  