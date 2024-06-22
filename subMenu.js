
export function buildSubmenu(sLinks,subMenuEl){
let anchor;
let obj;
for(let i=0;i<sLinks.length;i++){
    
    anchor= document.createElement("a");
    obj=new Object();
    obj=sLinks[i];
    //console.log(obj);
   
    Object.entries(obj).forEach(([key, value]) => {
        if(key=='href')
        anchor.setAttribute(key,value);
        if(key=='text')
        anchor.textContent=value;
       
      });
   
      subMenuEl.appendChild(anchor);
   
}
}