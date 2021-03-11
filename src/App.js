import React, {useState, useEffect} from 'react';
import {Container, Snackbar} from "@material-ui/core";
// import Snackbar from '@material-ui/core/Snackbar';
import Header from "./components/header";
import SendTweet from "./components/sendTweet";
import { TWEETS_STORAGE } from "./utils/constants";
import ListTweets from "./components/listTweets";

function App() {

  const [ToastProps, setToastProps] = useState({
    open: false,
    tweet: null
  });

  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    // console.log(allTweetsStorage);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  const closeToast = () => {
    setToastProps({
      open: false,
      tweet: null
    });
  }

  const deleteTweet = index => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header/>
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} setReloadTweets={setReloadTweets}/>
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={ToastProps.open} 
        autoHideDuration={3000} 
        onClose={closeToast} 
        message={<span id="message-id">{ToastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
