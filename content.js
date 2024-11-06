// Content script to fetch job details
function fetchJobDetails() {
  const jobDetails = {};

  const location = document.querySelector('.job-details-jobs-unified-top-card__primary-description-container');
  const jobType = document.querySelector('.job-details-preferences-and-skills');
  const role = document.querySelector('.job-details-jobs-unified-top-card__job-title');
  const description = document.querySelector('.jobs-description__content');

  jobDetails.location = location ? location.innerText : 'N/A';
  jobDetails.jobType = jobType ? jobType.innerText : 'N/A';
  jobDetails.role = role ? role.innerText : 'N/A';
  jobDetails.description = description ? description.innerText : 'N/A';

  return jobDetails;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getJobDetails') {
    const details = fetchJobDetails();
    sendResponse(details);
  }
});
