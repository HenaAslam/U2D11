
const getPinkfloydSongs=()=>{


    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd",{method:"GET" ,headers: {
		'X-RapidAPI-Key': '1a0e486a8emshc09f82e64512603p1d21fbjsnd674ceee0cc4',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'}
	})

    .then((rawsongs)=>{
        return rawsongs.json()
    }).then((jsonSongs)=>{
        
        let songsObject=jsonSongs.data
        console.log(songsObject)
        let ulNode=document.getElementById("first");
       
        for(let i=0;i<songsObject.length;i++){
            let singleSong=songsObject[i];
            ulNode.innerHTML+=`  
            
            <div class="col-6 col-md-3">
            <div class="card">
            <img src="${singleSong.album.cover_medium}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <p class="card-text">${singleSong.title}</p>
            </div>
           
            </div>
          </div>`
        }

    }).catch(err=>console.log(err))

}


const getdaftpunkSongs=()=>{


    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft punk",{method:"GET" ,headers: {
		'X-RapidAPI-Key': '1a0e486a8emshc09f82e64512603p1d21fbjsnd674ceee0cc4',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'}
	})

    .then((rawsongs)=>{
        return rawsongs.json()
    }).then((jsonSongs)=>{
        
        let songsObject=jsonSongs.data
        console.log(songsObject)
        let ulNode=document.getElementById("second");
      
        for(let i=0;i<songsObject.length;i++){
            let singleSong=songsObject[i];
            ulNode.innerHTML+=` 
            
            <div class="col-6 col-md-3">
            <div class="card" >
            <img src="${singleSong.album.cover_medium}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <p class="card-text">${singleSong.title}</p>
            </div>
            </div>
          
          </div>`
        }

    }).catch(err=>console.log(err))

}



const getMetallicaSongs=()=>{


    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica",{method:"GET" ,headers: {
		'X-RapidAPI-Key': '1a0e486a8emshc09f82e64512603p1d21fbjsnd674ceee0cc4',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'}
	})

    .then((rawsongs)=>{
        return rawsongs.json()
    }).then((jsonSongs)=>{
        
        let songsObject=jsonSongs.data
        console.log(songsObject)
        let ulNode=document.getElementById("third");
        
        for(let i=0;i<songsObject.length;i++){
            let singleSong=songsObject[i];
            ulNode.innerHTML+=` 
           
            <div class="col-6 col-md-3">
            <div class="card" >
            <img src="${singleSong.album.cover_medium}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <p class="card-text">${singleSong.title}</p>
            </div>
         
            </div>
          </div>`
        }

    }).catch(err=>console.log(err))

}
// function uniqueCount(){
//     let btn=document.getElementById('countunique')
//     let unique=[]
//     btn.addEventListener("click",function(){
//         console.log("metallica's unique albums")
//         fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica",{method:"GET" ,headers: {
//             'X-RapidAPI-Key': '1a0e486a8emshc09f82e64512603p1d21fbjsnd674ceee0cc4',
//             'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'}
//         })
//         .then((rawsongs)=>{
//             return rawsongs.json()
//         }).then((jsonSongs)=>{
            
//             let songsObject=jsonSongs.data
            
//             for(let i=0;i<songsObject.length;i++){
//                 let singleSong=songsObject[i];
//                 console.log(singleSong)
//             }
              
//         }).catch(err=>console.log(err))

//     })
// }
// uniqueCount()



   
      


function songList(){
    let btn=document.getElementById('songlist')
    let where=document.getElementById('modalbody')
    btn.addEventListener("click",function(){
       let ps=document.getElementsByTagName('p')
       for(let i=0;i<ps.length;i++){
        let p=ps[i];
        modalbody.innerText+=p.innerText
        modalbody.innerHTML+=`<br>`
   
       }

    })
}
songList()





window.onload= function(){
    getPinkfloydSongs();
    getdaftpunkSongs();
    getMetallicaSongs();
}