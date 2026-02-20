document.addEventListener('DOMContentLoaded', async function () {

    const INTEGRATED_API_KEY = "enter your api key...you are very chalak bro";
    const INTEGRATED_PROVIDER = "google";
    const INTEGRATED_MODEL = "gemini-1.5-flash";


    await chrome.storage.local.set({
        isUnlocked: true,
        useCustomAPI: true,
        aiProvider: INTEGRATED_PROVIDER,
        customAPIKey: INTEGRATED_API_KEY,
        customModelName: INTEGRATED_MODEL
    });

    // GitHub Link Logic
    const githubLink = document.getElementById('github-link');
    if (githubLink) {
        githubLink.addEventListener('click', () => {
            chrome.tabs.create({ url: 'https://github.com/souvik082003/ExamlyPass' });
        });
    }
});
