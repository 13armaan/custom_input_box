// Put all the javascript code here, that you want to execute after page load.
console.log("contentscript is running");
chrome.storage.sync.get("mode",({mode})=>{
    console.log("mode is",mode);
    if(mode==="habit"){
      
        const floating_input=document.createElement("textarea");
        floating_input.placeholder="Type here...";
        floating_input.id="smart-input-box";
        document.body.appendChild(floating_input);
        
        floating_input.addEventListener("input",()=>{
            const page_input=document.querySelector("input[type='text'],textarea");
            if(page_input){
                page_input.value=floating_input.value;
            }
            else{
                console.warn("No input field found on the page");
            }
        });
    }
    else if(mode==="advanced"){

    }
});
