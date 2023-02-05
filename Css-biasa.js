import "./styles.css";

import axios from 'axios'
import {useEffect, useState} from 'react'

export default function App() {
  let [data,setData] = useState([])

  let getData = async()=>{
    try {
      let response = await axios.get('https://football-api-git-master-vero8090.vercel.app/data ')
      // console.log(response.data.football.liga1.season.standings)
      setData(response.data.football.liga1.season.standings)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  }, [])
  return (
    <div className='App' >
         <table>
           <thead>
             <tr>
                <th>Rank</th>
                <th>Team Name</th>
                <th>Played</th>
                <th>Win</th>
                <th>Draw</th>
                <th>Lose</th>
                <th>Goal Scored</th>
                <th>Goal Conceded</th>
                <th>Different Goald</th>
                <th>Total Points</th>
             </tr>
           </thead>
           <tbody>
             {
               data.length==0?
               null
               :
               data.map((item,index)=>{
                 return(
                  <tr>
                  <th>
                    {index+1}
                  </th>
                  <td>
                    {item.teamName}
                  </td>
                  {
                    item.tables.split(",").map((item,index)=>{
                      return(
                       <td className='tdDalem'>
                         {item.split('|')[1]}
                       </td>
                      )
                    })
                  }
   
                </tr>
                 )
               })
               }
           </tbody>
         </table>
    </div>
  );
}
