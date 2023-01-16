let songs=[];
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a0e486a8emshc09f82e64512603p1d21fbjsnd674ceee0cc4',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};


const getSongs=(search,id)=>{


    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search ,options)

    .then((rawsongs)=>{
        return rawsongs.json()
    }).then((jsonSongs)=>{
        
        let songsObject=jsonSongs.data
        console.log(songsObject)
        let place=document.getElementById(id);
       
        for(let i=0;i<songsObject.length;i++){
            let singleSong=songsObject[i];
            songs.push(singleSong)
           
            place.innerHTML+=`  
            
            <div class="col-6 col-md-3 mb-3 ">
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
window.onload= function(){
getSongs("pink floyd","first")

getSongs("daft punk","second")
getSongs("metallica","third")
}

 console.log(songs)

function uniqueCounter(){
    let btn=document.getElementById("countunique")
    btn.addEventListener("click",function(){
        let array=[]
        for(i=0;i<songs.length;i++){
            let song=songs[i]
            // console.log(song.album.title)
            if(!array.includes(song.album.id)){
                
                array.push(song.album.id)
            }
        }
        console.log(array.length)
    
        
    })
}


uniqueCounter()

function songList(){
    let btn=document.getElementById('songlist')
    let where=document.getElementById('modalbody')
   
    btn.addEventListener("click",function(){
        for(i=0;i<songs.length;i++){
                 let song=songs[i];
                 where.innerHTML+=`<div class="text-left" style="border:1px solid black">
                 <span>${i+1}</span>
                 <span>${song.title_short}</span>
                 </div>`
              
        }
    })
}
songList();




// function valuefunction(eventData){
//     if(eventData.key==="Enter"){
//       let val=document.getElementById("inp").value
//     }
//     return val
//    }


// function searchBar(){

// search=valuefunction()
// console.log(search)

      
//         fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search ,options)
    
//         .then((rawsongs)=>{
//             return rawsongs.json()
//         }).then((jsonSongs)=>{
            
//             let songsObject=jsonSongs.data
//             console.log(songsObject)
//             let place=document.getElementById("seachresult");
           
//             for(let i=0;i<songsObject.length;i++){
//                 let singleSong=songsObject[i];
              
               
//                 place.innerHTML+=`  
                
//                 <div class="col-6 col-md-3 mb-3 ">
//                 <div class="card">
//                 <img src="${singleSong.album.cover_medium}" class="card-img-top img-fluid" alt="...">
                
//                 <div class="card-body">
//                   <p class="card-text">${singleSong.title}</p>
//                 </div>
               
//                 </div>
//               </div>`
//             }
    
//         }).catch(err=>console.log(err))
    
    
// }
// searchBar();