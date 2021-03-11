import React, {useState} from 'react'
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./sendTweet.scss";
import ModalContainer from "../modalContainer";
import FormSendTweet from "../formSendTweet";
import moment from 'moment';
import { TWEETS_STORAGE } from "../../utils/constants"; // No es export default, debemos utilizar llaves

export default function SendTweet(props) {

  const{setToastProps, allTweets, setReloadTweets} = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  
  const SendTweet = (event, formValue) => {
    event.preventDefault();
    // console.log(formValue);
    const {name, tweet} = formValue;
    let allTweetsArray = [];

    if (allTweets) {
      allTweetsArray = allTweets;
    }

    if (!name || !tweet) {
      // console.log('Todos los campos obligatosrios');
      setToastProps({
        open: true,
        text: "Todos los campos son obligatorios"
      })
    }
    else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray)); // TWEETS_STORAGE es la key y value el array allTweetsArray
      // console.log('Tweet enviado');
      setToastProps({
        open: true,
        text: "Tweet enviado"
      })
      closeModal();
      setReloadTweets(true);
      
    }
    allTweetsArray = [];
  };

  return(

    <div className="send-tweet">
      <Fab 
      className="send-tweet__open-modal"
      color="primary"
      aria-label="add"
      onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpen={isOpenModal} close={closeModal}>
        <FormSendTweet sendTweet={SendTweet}/>
      </ModalContainer>
    </div>
  );
}