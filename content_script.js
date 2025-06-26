// Put all the javascript code here, that you want to execute after page load.
console.log("contentscript is running");
let currentMode=null;
chrome.storage.sync.get("mode",({mode})=>{
    currentMode=mode;
})
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    currentMode=request.setMode;
   
    if(currentMode==="habit"){
//normal habit mode
        console.log("mode changed to habit");
    }
    else if(currentMode==="advanced"){
        console.log("mode changed to advanced");
        const input_box=document.getElementById("smart-input-box");
    if(input_box) {input_box.remove();
        console.log("text box removed on advanced mode");}
    }
    });

 
document.addEventListener("click", function (event){
    const clickede=event.target;
    const istext=clickede.tagName==="INPUT"||clickede.tagName==="TEXTAREA";
    const input_box=document.getElementById("smart-input-box");
    if(input_box && !input_box.contains(event.target) && !istext){
      
            input_box.remove();
            console.log("text box removed on outside click");
        
    }
    else if(istext && currentMode==="habit"){
        if(input_box) input_box.remove();
       
          page_input=clickede;
            console.log("mode is habit");
    const floating_input=document.createElement("textarea");
    floating_input.placeholder="Type here...";
    floating_input.id="smart-input-box";
    document.body.appendChild(floating_input);
    floating_input.focus();
    console.log("text box added");
    floating_input.addEventListener("input",()=>{
         
        if(page_input){
            page_input.value=floating_input.value;
        }
        else{
            console.warn("No input field found on the page");
        }
    });
        }
       
    
    
});