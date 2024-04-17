// 12 1 2 winter
// 345 spring
import data from "./data.json";
export default function MostSeasonListening(){
    let arrSeason = new Array(4).fill(0);
    data.forEach((el) => {
        const date =(el.ts);
        const mounth = date.split();
        if (mounth==12||mounth>=1&&mounth<=2) {
            arrSeason[0] += 1;
        }
        if (mounth==3||mounth==4||mounth==5) {
            arrSeason[1] += 1;
        }
        if (mounth==6||mounth==7||mounth==8) {
            arrSeason[2] += 1;
        }
        if (mounth==9||mounth==10||mounth==11) {
            arrSeason[3] += 1;
        }
      });
      console.log(arrSeason);
      return( 
        <div>
          {arrSeason.indexOf(Math.max(...arrSeason))}
        </div>
      )
}
