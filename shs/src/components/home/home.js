import '../home/home.css';
import data from '../home/data.json'

let myData=data.length



function Card(props){
    return(
        <>
            <div className='Card'>
                <p>{props.qu}</p>
                <span>{props.v} </span>
                <span> {props.m}</span>
            </div>
        </>
    )
} 
function SmallCard(){
    return(
        <>
            <div className='SmallCard'>
                <p>hii</p>
            </div>
        </>
    )
} 
function Search(){
    return (
        <>
            <input className='search' placeholder='Search'></input>

        </>
    )
}
function SideBar(){
    return (
        <>
            <aside>
                <div className='side' >
                    <p>All</p>
                    <p>search</p>
                    <p>musics</p>
                    <p>podcasts</p>
                    <p>favorite</p>
                </div>
            </aside>
        </>
    )
}
function Box(){
    return (
        <>
            <div className='box'>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </>
    )
}

function Body(){
    
    // let nams=dat.map(el=>!arr[el.name]?arr.push(el.name):null)
    // let uniqueArray = [...new Set(dat)];
    return(
        <>
            <div className='body'>
                <div className='sections'>
                    <p>Your Musics</p>
                    <div className='row'>
                        {/* {
                            dat.map(
                                elm=><Card qus={elm.qus} name={elm.name} lastname={elm.lastname} />
                            )
                        } */}
                        <Card qu="how many plays" v={myData}/>
                        <Card qu="How many diffrent tracks?" v={singlSong.length}/>
                        <Card qu="How much time spent listening ?" v={ex3} m="secund" />
                        <Card qu="Daily avarage time listening?" v={ex4}/>
                    </div>
                </div>
                <div className='rows'>
                    <div className='columns'>
                    <Search />
                    <Box />
                    </div>
                    <div className='play'>
                        <p>qqq</p>
                    </div>
                </div>
            </div>
        </>
    )
}







function Home (){
    return(
        <>
            <div className='row2'>
                <SideBar/>
                <Body />
            </div>
        </>
    )
}


let singlSong=[]
  data.map(el=>!singlSong.includes(el.master_metadata_track_name) ?singlSong.push(el.master_metadata_track_name):null)

  //general 3
  let allListingTime=0
  data.map(el=>allListingTime+=el.ms_played)

  let ex3=Math.trunc(allListingTime/1000 )

  //general 4
  let numberDayListing=[]

  data.map(el=>!numberDayListing.includes(el.ts.split('T')[0])&&el.skipped===null?numberDayListing.push((el.ts.split('T')[0])):null)
  console.log(numberDayListing);
  let ex4=Math.trunc(allListingTime/1000/numberDayListing.length)


  let houer=[]
  // data.map(el=>houer.push(el.ts.getHours()))
  console.log(houer);
  const date = new Date(data.ts);

// الحصول على الساعة والدقائق من التاريخ
const hour = date.getHours();
const minutes = date.getMinutes();

// // ترتيب البيانات بناءً على الساعة
// jsonData.sort((a, b) => {
//   const dateA = new Date(a.date);
//   const dateB = new Date(b.date);
//   return dateA.getHours() - dateB.getHours();
// });

// الآن يمكنك استخدام البيانات المرتبة بناءً على الساعة
console.log(data);

//   return <div>
//     {/* {Prod} */}
    
//     <p>Counter Plays:  <span style={{ color:'red' }}>{data.length} </span>song</p>
//     <p>diffrent tracks: <span style={{ color:'red' }}>{singlSong.length}</span> secand</p>
//     <p>Time listing:  <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000 )}</span> secand</p>
//     <p>Daily avg: <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000)/numberDayListing.length}</span> secund</p>
//     </div>;


export default (Home)



// let singlSong=[]
//   data.map(el=>!singlSong.includes(el.master_metadata_track_name) ?singlSong.push(el.master_metadata_track_name):null)

//   //general 3
//   let allListingTime=0
//   data.map(el=>allListingTime+=el.ms_played)

//   //general 4
//   let numberDayListing=[]
//   data.map(el=>!numberDayListing.includes(el.ts.split('T')[0])&&el.skipped===null?numberDayListing.push((el.ts.split('T')[0])):null)
//   console.log(numberDayListing);


//   let houer=[]
//   // data.map(el=>houer.push(el.ts.getHours()))
//   console.log(houer);
//   const date = new Date(data.ts);

// // الحصول على الساعة والدقائق من التاريخ
// const hour = date.getHours();
// const minutes = date.getMinutes();

// // ترتيب البيانات بناءً على الساعة
// jsonData.sort((a, b) => {
//   const dateA = new Date(a.date);
//   const dateB = new Date(b.date);
//   return dateA.getHours() - dateB.getHours();
// });

// // الآن يمكنك استخدام البيانات المرتبة بناءً على الساعة
// console.log(data);

//   return <div>
//     {/* {Prod} */}
    
//     <p>Counter Plays:  <span style={{ color:'red' }}>{data.length} </span>song</p>
//     <p>diffrent tracks: <span style={{ color:'red' }}>{singlSong.length}</span> secand</p>
//     <p>Time listing:  <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000 )}</span> secand</p>
//     <p>Daily avg: <span style={{ color:'red' }}>{Math.trunc(allListingTime/1000)/numberDayListing.length}</span> secund</p>
//     </div>;