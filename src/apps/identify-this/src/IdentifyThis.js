//import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import './IdentifyThis.css';
import SelectOptionsPage from './pages/SelectOptionsPage';
import GamePlayPage from './pages/GamePlayPage';
import EndResultPage from './pages/EndResultPage';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function IdentifyThis() {
  const [optionCardselected, setOptionCardSelected] = useState(true);
  const [gamePlayPageLoaded, setGamePlayPageLoaded] = useState(false);
  const [gamePlayComplete, setGamePlayComplete] = useState(false);

  const [quizData, setQuizData] = useState([{}]);
  const [selectedQuizData, setSelectedQuizData] = useState([{}]); // to take game data

  const [endResultData, setEndResultData] = useState([{}]); // to take game data


  const OverallData = [
    {
      "id": 1,
      "gameplayTitle": "Name this flag's country",
      "quizDetails": [
        {
          "currentImage": require("./assets/images/world_flags/uk_flag.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/uk_flag.jpg"),
          "imageAnswer": "United Kingdom",
          "multipleChoices": ["Australia", "United Kingdom", "New Zealand", "United States"]
        },
        {
          "currentImage": require("./assets/images/world_flags/china.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/china.jpg"),
          "imageAnswer": "China",
          "multipleChoices": ["Japan", "China", "South Korea", "Vietnam"]
        },
        {
          "currentImage": require("./assets/images/world_flags/japan.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/japan.jpg"),
          "imageAnswer": "Japan",
          "multipleChoices": ["Japan", "China", "South Korea", "Thailand"]
        },
        {
          "currentImage": require("./assets/images/world_flags/south_africa.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/south_africa.jpg"),
          "imageAnswer": "South Africa",
          "multipleChoices": ["Kenya", "South Africa", "Ghana", "Nigeria"]
        },
        {
          "currentImage": require("./assets/images/world_flags/brazil.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/brazil.jpg"),
          "imageAnswer": "Brazil",
          "multipleChoices": ["Brazil", "Argentina", "Portugal", "Mexico"]
        },
        {
          "currentImage": require("./assets/images/world_flags/france.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/france.jpg"),
          "imageAnswer": "France",
          "multipleChoices": ["Netherlands", "Italy", "France", "Luxembourg"]
        },
        {
          "currentImage": require("./assets/images/world_flags/united_states.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/united_states.jpg"),
          "imageAnswer": "United States",
          "multipleChoices": ["United States", "Canada", "Australia", "United Kingdom"]
        },
        {
          "currentImage": require("./assets/images/world_flags/india.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/india.jpg"),
          "imageAnswer": "India",
          "multipleChoices": ["India", "Pakistan", "Bangladesh", "Nepal"]
        },
        {
          "currentImage": require("./assets/images/world_flags/nigeria.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/nigeria.jpg"),
          "imageAnswer": "Nigeria",
          "multipleChoices": ["Ghana", "South Africa", "Nigeria", "Cameroon"]
        },
        {
          "currentImage": require("./assets/images/world_flags/canada.webp"),
          "currentFallbackImage": require("./assets/images/world_flags/canada.jpg"),
          "imageAnswer": "Canada",
          "multipleChoices": ["Austria", "Switzerland", "Canada", "Denmark"]
        }
      ]
    },
    {
      "id": 2,
      "gameplayTitle": "Name this logo's company",
      "quizDetails": [
        {
          "currentImage": require("./assets/images/company_logos/apple.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/apple.jpg"),
          "imageAnswer": "Apple",
          "multipleChoices": ["Microsoft", "Apple", "Intel", "Dell"]
        },
        {
          "currentImage": require("./assets/images/company_logos/Starbucks.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/Starbucks.jpg"),
          "imageAnswer": "Starbucks",
          "multipleChoices": ["Nike", "Adidas", "Puma", "Starbucks"]
        },
        {
          "currentImage": require("./assets/images/company_logos/mc_donald.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/mc_donald.jpg"),
          "imageAnswer": "McDonald's",
          "multipleChoices": ["McDonald's", "Burger King", "KFC", "Subway"]
        },
        {
          "currentImage": require("./assets/images/company_logos/Shell.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/Shell.jpg"),
          "imageAnswer": "Shell",
          "multipleChoices": ["Google", "Facebook", "Amazon", "Shell"]
        },
        {
          "currentImage": require("./assets/images/company_logos/pepsi.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/pepsi.jpg"),
          "imageAnswer": "Pepsi",
          "multipleChoices": ["eBay", "Amazon", "Pepsi", "Walmart"]
        },
        {
          "currentImage": require("./assets/images/company_logos/facebook.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/facebook.jpg"),
          "imageAnswer": "Facebook",
          "multipleChoices": ["Facebook", "Twitter", "Instagram", "LinkedIn"]
        },
        {
          "currentImage": require("./assets/images/company_logos/toyota.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/toyota.jpg"),
          "imageAnswer": "Toyota",
          "multipleChoices": ["Honda", "Nissan", "Toyota", "Hyundai"]
        },
        {
          "currentImage": require("./assets/images/company_logos/play_station.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/play_station.jpg"),
          "imageAnswer": "Playstation",
          "multipleChoices": ["BMW", "Playstation", "Mercedes-Benz", "Volkswagen"]
        },
        {
          "currentImage": require("./assets/images/company_logos/mercedes.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/mercedes.jpg"),
          "imageAnswer": "Mercedes-Benz",
          "multipleChoices": ["Lexus", "Mercedes-Benz", "Jaguar", "Porsche"]
        },
        {
          "currentImage": require("./assets/images/company_logos/youtube.webp"),
          "currentFallbackImage": require("./assets/images/company_logos/youtube.jpg"),
          "imageAnswer": "YouTube",
          "multipleChoices": ["Netflix", "YouTube", "TikTok", "Vimeo"]
        }
      ]
    },
    {
      "id": 3,
      "gameplayTitle": "Name this American president",
      "quizDetails": [
        {
          "currentImage": require("./assets/images/us_presidents/abraham_lincoln.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/abraham_lincoln.jpg"),
          "imageAnswer": "Abraham Lincoln",
          "multipleChoices": ["Ulysses S. Grant", "Abraham Lincoln", "Andrew Jackson", "James Monroe"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/barack_obama.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/barack_obama.jpg"),
          "imageAnswer": "Barack Obama",
          "multipleChoices": ["Joe Biden", "Bill Clinton", "George W. Bush", "Barack Obama"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/bill_clinton.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/bill_clinton.jpg"),
          "imageAnswer": "Bill Clinton",
          "multipleChoices": ["Bill Clinton", "Joe Biden", "Barack Obama", "George W. Bush"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/donald_trump.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/donald_trump.jpg"),
          "imageAnswer": "Donald Trump",
          "multipleChoices": ["Ronald Reagan", "Donald Trump", "George H. W. Bush", "Joe Biden"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/franklin_roosevelt.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/franklin_roosevelt.jpg"),
          "imageAnswer": "Franklin D. Roosevelt",
          "multipleChoices": ["Theodore Roosevelt", "Harry S. Truman", "Franklin D. Roosevelt", "Woodrow Wilson"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/george_washignton.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/george_washignton.jpg"),
          "imageAnswer": "George Washington",
          "multipleChoices": ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/joe_biden.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/joe_biden.jpg"),
          "imageAnswer": "Joe Biden",
          "multipleChoices": ["Bill Clinton", "Donald Trump", "Joe Biden", "George W. Bush"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/john_f_kenedy.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/john_f_kenedy.jpg"),
          "imageAnswer": "John F. Kennedy",
          "multipleChoices": ["John F. Kennedy", "Ronald Reagan", "Richard Nixon", "Lyndon B. Johnson"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/ronald_reagan.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/ronald_reagan.jpg"),
          "imageAnswer": "Ronald Reagan",
          "multipleChoices": ["George H. W. Bush", "Ronald Reagan", "Gerald Ford", "Richard Nixon"]
        },
        {
          "currentImage": require("./assets/images/us_presidents/Thodore_roosevelt.webp"),
          "currentFallbackImage": require("./assets/images/us_presidents/Thodore_roosevelt.jpg"),
          "imageAnswer": "Theodore Roosevelt",
          "multipleChoices": ["Franklin D. Roosevelt", "William McKinley", "Theodore Roosevelt", "Woodrow Wilson"]
        }
      ]
    },
      
    {
      "id": 4,
      "gameplayTitle": "Name this celebrity",
      "quizDetails": [
        {
          "currentImage": require("./assets/images/celebrities/dwane_johnson.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/dwane_johnson.jpg"),
          "imageAnswer": "Dwayne Johnson",
          "multipleChoices": ["Vin Diesel", "Terry Crews", "Dwayne Johnson", "Jason Momoa"]
        },
        {
          "currentImage": require("./assets/images/celebrities/selena_gomez.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/selena_gomez.jpg"),
          "imageAnswer": "Selena Gomez",
          "multipleChoices": ["Ariana Grande", "Taylor Swift", "Selena Gomez", "Katy Perry"]
        },
        {
          "currentImage": require("./assets/images/celebrities/brad_pitt.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/brad_pitt.jpg"),
          "imageAnswer": "Brad Pitt",
          "multipleChoices": ["Leonardo DiCaprio", "Brad Pitt", "Matt Damon", "Chris Evans"]
        },
        {
          "currentImage": require("./assets/images/celebrities/doja_cat.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/doja_cat.jpg"),
          "imageAnswer": "Doja Cat",
          "multipleChoices": ["Rihanna", "Beyoncé", "Nicki Minaj", "Doja Cat"]
        },
        {
          "currentImage": require("./assets/images/celebrities/downey_jr.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/downey_jr.jpg"),
          "imageAnswer": "Robert Downey Jr.",
          "multipleChoices": ["Robert Downey Jr.", "Tom Holland", "Chris Pratt", "Johnny Depp"]
        },
        {
          "currentImage": require("./assets/images/celebrities/miley_cyrus.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/miley_cyrus.jpg"),
          "imageAnswer": "Miley Cyrus",
          "multipleChoices": ["Ariana Grande", "Miley Cyrus", "Dua Lipa", "Camila Cabello"]
        },
        {
          "currentImage": require("./assets/images/celebrities/keanu_reeves.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/keanu_reeves.jpg"),
          "imageAnswer": "Keanu Reeves",
          "multipleChoices": ["Keanu Reeves", "John Krasinski", "Ryan Reynolds", "Hugh Jackman"]
        },
        {
          "currentImage": require("./assets/images/celebrities/hathaway.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/hathaway.jpg"),
          "imageAnswer": "Anne Hathaway",
          "multipleChoices": ["Emma Watson", "Emma Stone", "Natalie Portman", "Anne Hathaway"]
        },
        {
          "currentImage": require("./assets/images/celebrities/denzel.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/denzel.jpg"),
          "imageAnswer": "Denzel Washington",
          "multipleChoices": ["Jamie Foxx", "Kevin Hart", "Idris Elba","Denzel Washington",]
        },
        {
          "currentImage": require("./assets/images/celebrities/rihanna.webp"),
          "currentFallbackImage": require("./assets/images/celebrities/rihanna.jpg"),
          "imageAnswer": "Rihanna",
          "multipleChoices": ["Emma Stone", "Rihanna", "Queen Latifah", "Lisa Kudrow"]
        }
      ]
    }
  ]

  useEffect(() => {
    //These will be genetrated by API call later
    //TO, add the rest of the objects later
    //embed the above data in a state variable
    setQuizData(OverallData);

  }, [])
  
  const getDataFromSelectOptionPageAndLoadGamePlayPage = (dataFromSelectOptionPage)=>{
    //load the gameplay page
    setOptionCardSelected(false)
    setGamePlayPageLoaded(true)
    setGamePlayComplete(false) // TODO - refactor this into independent method

    //then use the id data to load the content of the gameplay page
    //it will filter through the json of data using ID and then return the filtered data 
 

    //set selected Data on the filtered overall data
    setSelectedQuizData(quizData.filter(item => item.id === dataFromSelectOptionPage));

  }


  const getDataFromGamePlayPageAndLoadEndResultPage = (dataFromGamePlayPage) => {

    //console.log("dataFromGamePlayPage")
    //console.log(dataFromGamePlayPage)
    setEndResultData(dataFromGamePlayPage)
//add all the result above to a state and feed end Result comp

    //load the endResult page
    setOptionCardSelected(false)
    setGamePlayPageLoaded(false)
    setGamePlayComplete(true) // TODO - refactor this into independent method

  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={100} />

      {optionCardselected && // entry point
        <SelectOptionsPage
        sendIdDataToIdentifyThisContainer={getDataFromSelectOptionPageAndLoadGamePlayPage} />
      }
      {gamePlayPageLoaded &&
        <GamePlayPage
        filteredQuizData={selectedQuizData}
        sendEndGameData={getDataFromGamePlayPageAndLoadEndResultPage}
      />
      }
      {gamePlayComplete &&
        <EndResultPage data={endResultData} />
      }
    </>
  );
}

export default IdentifyThis;
