console.log("popup script running");
document.querySelectorAll('input[name="mode"]').forEach((radio)=>{
    radio.addEventListener('change',()=>{
        chrome.storage.sync.set({mode : radio.value});
        console.log("mode saved",radio.value);
        chrome.tabs.query({active : true,currentWindow:true}, (tabs)=> {
            chrome.tabs.sendMessage(tabs[0].id,{ setMode:radio.value });
            applyCurrentMode();
        });
    });
});
function applyCurrentMode(){
chrome.storage.sync.get("mode",({mode})=>{
    if(mode){
        document.querySelector('input[value="' +mode+ '"]').checked=true;
        console.log("mode is",mode);

        
    }

});
}
applyCurrentMode();