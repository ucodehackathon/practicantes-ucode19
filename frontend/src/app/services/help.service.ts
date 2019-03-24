import { Injectable } from '@angular/core';
import Speech from 'speak-tts';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  
  helpDisplayed:boolean = false;
  speech = new Speech();
  

  constructor() {
    this.speech.init(
      {
        'onVoicesLoaded': (data) => {console.log('voices', data.voices)},
        'volume': 1,
        'lang': 'en-GB',
        'rate': 1,
        'pitch': 1,
        'voice':'Microsoft Zira Desktop - English (United States)',
        'splitSentences': true,
    
      }
    ).then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data)
    }).catch(e => {
        console.error("An error occured while initializing : ", e)
    })
  }

  displayHelp(){
    this.helpDisplayed = true;
    this.speech.speak({
      text: 'Now you are in the help menu. \
      To start recording, swipe up your finger on the screen. \
      To finish recording, swipe down your finger on the screen.\
      When you are playing, you can get the time you\'ve spent swiping up;\
      you can stop the time swiping right and resume time swiping left.',
      listeners: {
        onend: () => {
          console.log("finished");
          this.helpDisplayed = false;
        },
        
      }
      //TODO TUTORIAL
    })
  }

  speak(text:String){
    this.speech.speak({text});
  }

  cancelSpeech(){
    this.speech.cancel();
    this.setHelpDisplayed(false);
  }

  public setHelpDisplayed(displayed:boolean){
    this.helpDisplayed = displayed;
  }

  public getHelpDisplayed(){
    return this.helpDisplayed;
  }
}
