import React,{useEffect, useState} from 'react'

import YourTeam from './YourTeam'


const Players = ({players}) => {
    console.log("from player comp",players)
    const [playerstate, setPlayerstate] = useState([])
    const [dummycount, setDummycount] = useState(0)
    const [yourTeamArr, setYourTeamArr] = useState([])
    const [playerteam, setPlayerteam] = useState([])
    useEffect(()=>{
        //setPlayerstate(playerstate=>[...playerstate,players])
        
        // setPlayerstate(playerstate=>{
        //     return(
        //         playerstate.filter(p=>{
        //             return 
        //         })
        //     )
        // })

        //console.log('PlayerState',playerstate)
        //setPlayerstate(playerstate=>[...playerstate[0]])
        //setMyArray(oldArray => [...oldArray, newElement]);
    },[])
    
    //console.log('PlayerState',playerstate)
    //let yourTeamArr = []
    const handleButtonClickfromplayers = (player)=>{
        console.log('Button click from player',player.playerName)
        setDummycount(dummycount=>dummycount+1)
        console.log('count',dummycount)
        //yourTeamArr.push(player)
        setYourTeamArr(yourTeamArr => [...yourTeamArr,player])
        console.log('YourTeamArr',yourTeamArr)
    }
    const handleButtonClickfromyourteam = (player)=>{
        console.log('Button click from yourteam',player.playerName)
        setDummycount(dummycount=>dummycount+1)
        console.log('count',dummycount)
        //yourTeamArr.push(player)
        players.push(player)
        //setPlayerteam(playerteam => [...playerteam,player])
        //console.log('PlayerTeam',playerteam)
    }

    //console.log('playerstate0',playerstate[1])
    return (
        <div>
            { players?
                <div className="players-loaded">
                    <ul>
                        { players.map((player,index)=>{
                            return(
                                <li key={player.playerName}>
                                    <button onClick={()=>{
                                        //setPlayerstate(
                                            players.splice(index,1)
                                            //)
                                        handleButtonClickfromplayers(player)
                                        }}>
                                        <div className="player-name">{player.playerName} {player.creds}</div>
                                        <div className="player-creds"></div>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                     <div className="your-team-wrap">
                        {/* <div className="your-team">
                             <YourTeam yourTeamArr={yourTeamArr}/> 
                            <h1>Your Team</h1>
                            <div className="your-team-length">
                                You have selected {yourTeamArr.length} players
                            </div>
                            <ul>
                            { yourTeamArr.map(player=>{
                                return(
                                    <li key={`${player.playerName}${player.creds}`}>
                                        <button 
                                            // onClick={
                                            // ()=>{handleButtonClick(player)}
                                            // }
                                        >
                                            <div className="player-name">{player.playerName} {player.creds}</div>
                                            <div className="player-creds"></div>
                                        </button>
                                    </li>
                                    )
                                })
                            }
                            </ul>
                        </div> */}
                    </div>
                     <YourTeam yourTeamArr={yourTeamArr} handleButtonClickfromyourteam={handleButtonClickfromyourteam} /> 
                </div>
                :
                <>
                Players not loaded
                </>
                
            }
        </div>
        // <>not loaded</>
        
    )
}

export default Players
