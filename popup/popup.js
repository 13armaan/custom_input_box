document.querySelectorAll('input[name="mode').forEach((radio)=>{
    radio.addEventListener('change',()=>{
        chrome.storage.sync.set({mode:radio.value});
    });
});

chrome.storage.sync.get("mode",({mode})=>{
    if(mode){
        document.querySelector('input[value="${mode}"]').checked=true;
    }
});

