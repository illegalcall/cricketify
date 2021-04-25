import React, { useEffect } from 'react'

const YourTeam = ({yourTeamArr,handleButtonClickfromyourteam}) => {
    console.log("From component yourTeamarr",yourTeamArr)

    // let myTeamArrInComponent
    // useEffect(()=>{
    //     //myTeamArrInComponent =  yourTeamArr
    //     //console.log("From component myTeamArrInComponent",myTeamArrInComponent)
    //     makeMyTeamList();
    // },[yourTeamArr])
    
    return (
        <div>
            <h1>Your Team</h1>
            <div className="your-team-length">
                You have selected {yourTeamArr.length} players
            </div>

            {   
                yourTeamArr?         
                        <ul>
                            {
                                yourTeamArr.map((player,index)=>{
                                    return(
                                            <li>
                                                <button onClick={()=>{
                                                        yourTeamArr.splice(index,1)
                                                        handleButtonClickfromyourteam(player)
                                                        }
                                                    }
                                                >
                                                    <div className="player-name">{player.playerName} {player.creds}</div>
                                                    <div className="player-creds"></div>
                                                </button>
                                            </li>
                                        )
                                })
                            }
                        </ul>
                :
                <div className="">Loading..</div>
            }
        </div>
    )
}

export default YourTeam
