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
        const box=document.getElementById("adv-input-box");
           if(box) {box.remove();
         console.log("box removed in habit mode ");}
        const buttons=document.querySelector('.my-container');
        if(buttons) buttons.remove();
        console.log("buttons removed");
        const self_box=document.getElementById("smart-input-box");
        if(self_box) {self_box.remove();
            console.log("selfbox removed");}

    }
    else if(currentMode==="advanced"){
        console.log("mode changed to advanced");
        const input_box=document.getElementById("smart-input-box" );
    if(input_box) {input_box.remove();
        console.log("text box removed on advanced mode");}
        const buttons=document.querySelector('.my-container');
        if(buttons) {buttons.remove();
        console.log("buttons removed");}
        const self_box=document.getElementById("adv-input-box");
        if(self_box) {self_box.remove();
            console.log("selfbox removed");}
        const adv_input=document.createElement("textarea");
        adv_input.placeholder="Type here in advanced  mode...";
        adv_input.id="adv-input-box";
        document.body.appendChild(adv_input);
        console.log("text box added in advanced  mode");
        const targetElement=document.getElementById("adv-input-box");
        const rect=targetElement.getBoundingClientRect();
        const container =document.createElement("div");
        container.className='my-container';
        
        const copy_button=document.createElement("button");
        copy_button.textContent="copy_text";
        copy_button.id="copy";
        const send_text=document.createElement("button");
        send_text.textContent="send_text";
        const summ=document.createElement("button");
        summ.textContent="Summarize";
        
       container.appendChild(copy_button);
        container.appendChild(send_text);
        container.appendChild(summ);
        document.body.appendChild(container);
        console.log("buttons added in adv mode");
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
    floating_input.value=clickede.value;
    floating_input.addEventListener("input",()=>{
         
        if(page_input){
            page_input.value=floating_input.value;
        }
        else{
            console.warn("No input field found on the page");
        }
    });
        }
       else if(currentMode==="advanced"){
            if(clickede.id==="copy"){
                console.log("copy button selected");
             const textbox=document.getElementById("adv-input-box");
             textbox.select();
             textbox.setSelectionRange(0,9999)
             try{
                 const success=document.execCommand("copy");
                 if(success) console.log("text copied");
                 else console.log("text could not be copied");
                }
                catch(err){
                    console.error("error:",err);
                }
            }
        }
    
    
});