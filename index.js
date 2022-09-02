const buttons = document.getElementsByClassName("button")
if(buttons){
    buttons[0].addEventListener("click",()=>{
        //take input from using  box
        const text=document.getElementsByClassName("text")[0].value;
        // console.log(text);
        // create a new list instance 
        const li=document.createElement("li");
        //Add text to the list
        li.innerText=text;
        let listelement=document.querySelector(".list")
        listelement.appendChild(li);//appending all list item in ol available in index.html
      //  clear input box
      document.getElementsByClassName("text")[0].value="";
      })
}
