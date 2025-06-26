// Put all the javascript code here, that you want to execute in background.
chrome.runtime.onStartup.addListener(()=>{
    chrome.storage.sync.set({mode:"habit"});
    console.log("default mode set to habit on startup");
});
chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({mode:"habit"});

    console.log("default mode set to habit on installation");
    
});
chrome.commands.onCommand.addListener((command)=>{
    if(command==="set-habit-mode"){
        chrome.storage.sync.set({mode:"habit"});
        console.log("habit mode set with key command");
        activelysendmode("habit");
    }
    else if(command==="set-advanced-mode"){
        chrome.storage.sync.set({mode:"advanced"});
        console.log("advanced mode set with key command");
        activelysendmode("advanced");
    }
});
function activelysendmode(mode){
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id,{setMode:mode});
    })
}