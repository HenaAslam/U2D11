let songs=[]


const getSongs=(search,id)=>{
    let node=document.getElementById(id)
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((songs)=>{
        return songs.json()
    })
    .then((jsonSongs)=>{
        let songsArray=jsonSongs.data
       
        songsArray.forEach(song => {
            const{album,title}=song
            songs.push(song)
            node.innerHTML+=`<div class="col-6 col-md-3">
            <div class="card" >
            <img src="${album.cover_medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4>${title}</h4>
            </div>
            </div>
          </div>`
        });
    })
    .catch((err)=>{
        console.log(err)
    })
}


window.onload=()=>{
    getSongs("metallica","first")
    getSongs("pink floyd","second")
    getSongs("daft punk","third")
    //console.log(songs)
}

const songList=()=>{
    let node=document.querySelector(".modal-body")
    let btn=document.querySelector("#clickforsongs")
    btn.addEventListener("click",function(){
        songs.forEach(song => {
         
            node.innerHTML+=`<h5 class="text-left" style="border-bottom:1px solid black">${song.title}</h5><br>`
          
        });
     
    })
}

songList()

const uniqueCounter=()=>{
    let btn=document.querySelector("#clickforuniques")
    let unique=[]
    btn.addEventListener("click",()=>{
        songs.forEach(song => {
            let id=song.album.id
            if(!unique.includes(id)){
                unique.push(id)
            }
            
        });
        console.log(unique.length)
    })
}

uniqueCounter()

