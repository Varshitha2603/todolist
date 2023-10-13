let content = document.getElementById("btn");
const input = document.querySelector("#inp");
const parent = document.querySelector("#demo");
const cler = document.querySelector("#clearbtn");
content.addEventListener("click", myFunction);
function myFunction()
{
    if(input.value === "")
    {
        alert("input box is empty")
        
    }
    else
    {
        const subDiv = document.createElement("div");
        subDiv.setAttribute("id","lide")


        let Listitem = document.createElement("li");
        Listitem.innerText = input.value;
        input.value = "";
    
        const deteteBtn = document.createElement("button");
        deteteBtn.innerHTML = `<i id="icon" class="fa-solid fa-trash-can"></i>`;
        subDiv.append(Listitem);
        subDiv.append(deteteBtn);
        parent.append(subDiv)

        deteteBtn.addEventListener("click",delFunction)
        function delFunction()
        {
            console.log(deteteBtn)
            deteteBtn.parentElement.remove();
        }
        cler.addEventListener("click", clearFunction)
        function clearFunction()
        {
            console.log(parent)
            parent.innerHTML = "";
        }
    }
}