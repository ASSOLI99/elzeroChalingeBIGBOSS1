let myInp=document.querySelector(".classes-to-add");
let myRem=document.querySelector(".classes-to-remove");
let current=document.querySelector("[title='Current']");
let div=document.querySelector(".assign .classes-list div");
if(div.children.length===0){
    div.textContent="No Classes to show";
}
myInp.onblur=function(){
    let newInp=myInp.value.toLowerCase();
    if(newInp!==""){
        if(div.children.length===0){
            div.textContent="";
        }
        if(newInp.includes(" ")){
            let myArr=newInp.split(" ");
            for(let i=0;i<myArr.length;i++){
                current.classList.add(myArr[i]);
                let span=document.createElement("span");
                span.className=myArr[i];
                span.textContent=myArr[i];
                div.appendChild(span);
                myInp.value="";

            };
        }else{
            current.classList.add(newInp);
            let span=document.createElement("span");
            span.className=newInp;
            span.textContent=newInp;
            div.appendChild(span);
            myInp.value="";
        };
    };
};
myRem.onblur=function(){
    if(myRem.value!==""){
        let myInp2=myRem.value;
        if(myInp2.includes(" ")){
            let myArr2=myInp2.split(" ");
            for(let i=0;i<myArr2.length;i++){
                current.classList.remove(myArr2[i]);
                let span=document.getElementsByClassName(myArr2[i])[0];
                span.remove();
                myRem.value="";
            };
        }else{
            current.classList.remove(myInp2);
            let span=document.getElementsByClassName(myInp2)[0];
            span.remove();
            myRem.value="";
        }
    }
}