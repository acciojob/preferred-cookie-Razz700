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
            let b,c;
            let arr=document.cookie.split(";").map((item,i)=>{
                return [item.split("=")[0],item.split("=")[1]];
            });
           
            arr.forEach((item,i)=>{
            if(item[0]=="fontsize"){
              b=item[1];
            }
            else if(item[0]=="fontcolor"){
              c=item[1];
            }
            });
            console.log(b,c);
        document.body.style.cssText=`font-size:${b}; color:${c};`; 
        }