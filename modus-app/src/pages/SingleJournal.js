import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {searchByTitle} from "../firebase";
import { useParams } from "react-router";
import { PDFDownloadLink } from "@react-pdf/renderer";

import MyDocument from '../components/MyDocument.js'

const useStyles = makeStyles({
  card: {
    width: 800,
    height: 900,
    padding: 20,
    marginLeft: 150,
    marginTop: 25
  },
  exportButton: {
    width: 200,
    marginTop: "3rem",
    marginBottom: "5rem"
  }
});

function getDate(timestamp) {
  var date = new Date(timestamp)
  return ((date.getMonth()+1)+
  "/"+date.getDate()+
  "/"+date.getFullYear())
}

function SingleJournal() {
  
  const { title } = useParams();
  const [entry, setEntry] = useState('');
  
  useEffect(() => {
    const promise = searchByTitle(title);
    promise.then(function(result) {
      setEntry(result);
      console.log(result);
    })
  }, 
  []);

  const classes = useStyles();
    return (
      <div>
        <Grid container direction="column">
          <Card className={classes.card}>
          <Grid container direction="column">
            <Grid container>
              <Grid container item>
                <Grid item xs 
                  style={{
                    fontSize: 24,
                    margin: 20
                  }}
                >
                  {entry && entry[0].title}
                </Grid>
                <Grid item 
                  style={{
                    fontSize: 18,
                    margin:20
                  }}
                >
                  {entry && getDate(entry[0].createdAt)}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs
                  style={{
                    margin:20
                  }}
            >
              {entry && <div  dangerouslySetInnerHTML={{__html: entry[0].text}} />}
            </Grid>
          </Grid>
      </Card>
      <Grid container item justifyContent="flex-end">
        <Grid item>
          {entry && 
            <PDFDownloadLink
            document={<MyDocument data={entry[0]} />}
            fileName="journal.pdf"
          > 
            <button className={classes.exportButton}>
              Export journal entry
            </button> 
          </PDFDownloadLink>
          }
        </Grid>
        </Grid>
      </Grid>
    </div>
    );
  }
  export default SingleJournal;