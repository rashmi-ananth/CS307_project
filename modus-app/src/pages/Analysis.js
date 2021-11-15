import React from "react";
import {Grid, Divider} from '@mui/material'
import MoodResources from "../components/MoodResources";
import graph_1 from '../imgs/graph_1.png';
import graph_2 from '../imgs/graph_2.png';
import {getrecommendedMHResources} from "../firebase";
import { useEffect } from "react";

function Analysis() {
  // var [entries, setEntries] = React.useState(null);
  // useEffect(() => {
  //   const promise = getrecommendedMHResources();
  //   promise.then(function(result) {
  //     setEntries(result);
  //   })
  // }, 
  // []);

    return (
        <div>
          <Grid container style={{margin: '5rem'}}>
            <Grid item xs={10}>
                <h1 
                  style={{
                    marginTop: "5rem"
                  }}>
                    Mood Analysis Board
                </h1>
                <Divider style={{width: "50rem"}}/>
                <Grid container item>
                  <Grid item>
                    <img style={{width: 400, marginTop: 40}} src={graph_1} alt="graph_1" />
                  </Grid>
                  <Grid item>
                    <img style={{width: 400, marginTop: 40, marginLeft: 15}} src={graph_2} alt="graph_2" />
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
          {/* <Grid item>
          {entries && entries.map((entry) => {
            return (<MoodResources entry={entry}/>)
          })}
          </Grid> */}
          <MoodResources />
        </div>
      );

} export default Analysis;