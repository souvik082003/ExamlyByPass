document.addEventListener('DOMContentLoaded', async function () {

    const INTEGRATED_API_KEY = "AIzaSyBBhGwfA3UC1iI90yLYGpxJcs44IC-4XZM";
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
