// Put all the javascript code here, that you want to execute after page load.
console.log("contentscript is running");
let currentMode=null;
chrome.storage.sync.get("mode",({mode})=>{
    currentMode=mode;
})
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    currentMode=request.setMode;
   
    if(request.setMode==="habit"){
//normal habit mode
console.log("mode is habit");
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
    
    else if(request.setMode==="advanced"){
        console.log("mode is advanced");
        const existingblock=document.getElementById("smart-input-box");
        if(existingblock){
            existingblock.remove();
            console.log("block removed as mode changed");
        }
    }
    
});
 
document.addEventListener("click", function (event){
    const clickede=event.target;
    
    if(clickede.tagName==="INPUT"||clickede.tagName==="TEXTAREA"){
        const input_box=document.getElementById("smart-input-box");
        if(input_box &&!input_box.contains(event.target)){
            input_box.remove();
            console.log("text box removed on outside click");
        }
        if(currentMode==="habit"){
          
            console.log("mode is habit");
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
        else if (mode==="advanced"){
            console.log("mode is advanced");
            const existingblock=document.getElementById("smart-input-box");
            if(existingblock){
                existingblock.remove();
                console.log("block removed as mode changed");
            }
        }
    }
    const input_box=document.getElementById("smart-input-box");
    if(input_box &&!input_box.contains(event.target)){
        input_box.remove();
        console.log("text box removed on outside click");
    }
});