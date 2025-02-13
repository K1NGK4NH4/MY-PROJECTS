console.log("Its Working")

//Add to the list
let addbutton = document.querySelector('.btn-add')
let isTrue = true



//Delete button



addbutton.addEventListener('click', () => {
    let input = document.querySelector('.list-input').value
    if (input !== "") {
        let list = document.createElement('li')
        list.className = "list-item"

        let delbtn = document.createElement('button')
        delbtn.className = "btn-delete"
        delbtn.innerHTML = "Delete"

        let upbtn = document.createElement('button')
        upbtn.className = "btn-updown"
        upbtn.innerHTML = "👆"

        let downbtn = document.createElement('button')
        downbtn.className = "btn-updown"
        downbtn.innerHTML = "👇"

        list.innerHTML = input
        document.querySelector(".list-items").append(list)
        list.append(delbtn)
        list.append(upbtn)
        list.append(downbtn)

        document.querySelector('.list-input').value = ""

        delbtn.addEventListener('click',(e)=>{
           delbtn.parentElement.remove()
        })

        // upbtn.addEventListener('click',(e)=>{
            
        //  })

        //  downbtn.addEventListener('click',(e)=>{
           
        //  })
    }
})




