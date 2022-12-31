import React, { useEffect, useState } from "react";
import styles from "../styles/Team.module.css";
import dta from "./team.json"
const Team = () => {
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     // Fetch team data from JSON file
//     fetch(dta)
//       .then((res) => res.json())
//       .then((data) => {
//         setMembers(data.members);
//         console.log(data.members)
//       });
//   }, []);

const members = dta.members;
  return (
    <div className={styles.team}>
      <div className={styles.Stats__head}>Our Team</div>
     
      <div>
     	{members.map((teams)=>{
            <h1>
                {teams.name}
            </h1>
        })}
      </div>
    </div>
  );
};

export default Team;
