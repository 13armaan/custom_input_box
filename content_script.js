// Put all the javascript code here, that you want to execute after page load.
const floating_input=document.createElement("textarea");
floating_input.placeholder="Type here...";
floating_input.id="smart-inpu-box";
document.body.appendChild(floating_input);

floating_input.addEventListener("input",()=>{
    const page_input=document.querySelector("input[type='text'],textarea");
    if(page_input){
        page_input.value=floating_input.value;
    }
});