// Put all the javascript code here, that you want to execute in background.
chrome.runtime.onStartup.addListener(()=>{
    chrome.storage.sync.set({mode:"habit"});
    console.log("default mode set to habit on startup");
});
chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({mode:"habit"});

    console.log("default mode set to habit on installation");
    
});