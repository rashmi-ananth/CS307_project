import React, { useEffect, useState } from "react";
import { Button, Card, Grid, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteJournalEntry, searchByTitle, getMHResources} from "../firebase";
import { useHistory, useParams } from "react-router";
import ReactPDF from '@react-pdf/renderer';

import MyDocument from '../components/MyDocument.js'

const useStyles = makeStyles({
  card: {
    width: 800,
    height: 900,
    padding: 20,
    marginLeft: 150,
    marginTop: 25
  },
});

function SingleJournal() {
  const history = useHistory();

  const { title } = useParams();
  const [entry, setEntry] = useState('');
  
  useEffect(() => {
    const promise = searchByTitle(title);
    promise.then(function(result) {
      setEntry(result);
    })
  }, 
  []);

  const handleDeleteEntry = () => {
    deleteJournalEntry(entry[0].jid)
    .then(() => {
      history.push('/library');
      alert("Journal entry deleted");
    }) 
  }

  const submitExport = (entry) => {
    ReactPDF.render(<MyDocument entry={entry}/>, `${__dirname}/journal_entry.pdf`);
  }
  
  
  const classes = useStyles();
    return (
      <div>
          <Card className={classes.card}>
          <Grid container direction="column">
            <Grid container style={{marginBottom: 5}} justifyContent='end'>
              <IconButton onClick={() => handleDeleteEntry()}>
                <DeleteIcon/>
              </IconButton>
            </Grid>
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
                  {/* {entry[0].createdAt} */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs
                  style={{
                    margin:20
                  }}
            >
              {entry && entry[0].text}
            </Grid>
            <Grid item xs 
                  style={{
                    fontSize: 16,
                    margin: 20
                  }}
            >
              {entry && entry[0].status}
            </Grid>  
          </Grid>
      </Card>
      <Grid style={{marginLeft: 20}}>
        <Button variant="contained" onClick={() => submitExport(entry)}>
          Export Mood Analysis
        </Button>
      </Grid>
      </div>
    );
  }
  export default SingleJournal;