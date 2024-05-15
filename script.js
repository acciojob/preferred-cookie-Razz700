//your JS code here. If required.
let inputfont=document.getElementById('fontsize');
        let inputcolor=document.getElementById('fontcolor');
        let btn=document.getElementById('submit');
        btn.addEventListener('click',(event)=>{
        event.preventDefault();
document.body.style.cssText=`font-size:${inputfont.value}px; color:${inputcolor.value};`;
document.cookie=`fontsize=${inputfont.value}px`;
document.cookie=`fontcolor=${inputcolor.value}`;
        });
        if (document.cookie!=null){
            let arr=document.cookie.split(";");
            console.log(arr);
            arr=arr.map((item)=>{
return item.split("=")[1];
            });
            console.log(arr);
        document.body.style.cssText=`font-size:${arr[0]}px; color:${arr[1]};`; 
        }