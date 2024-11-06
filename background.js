let currentJobDetails = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'setJobDetails') {
    currentJobDetails = message.details;
  } else if (message.action === 'getJobDetails') {
    sendResponse(currentJobDetails);
  }
});
