import React from 'react'

const Matchinfo = ({match}) => {
    console.log("Match from comp",match[0])
    return (
        <div>
            {/* {match} */}
            { match[0] ? 
                <div className="after-match-loaded">
                    <div className="teams">
                    {match[0]["info"]['teams'][0]} vs {match[0]["info"]['teams'][1]} 
                    </div> 
                    <div className="match-city">
                        City:{match[0]["info"]["city"]} 
                    </div>       
                </div>
            :<>Please choose a match</>}
            
        </div>
    )
}
        
export default Matchinfo
