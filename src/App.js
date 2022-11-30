import "./App.css";
import "./components/Metronome.css";
import Metronome from "./components/Metronome";
import { useEffect, useState } from "react";

function App() {
  // desde aqui me traje esto del componente Metronome xd pa globalizarlo
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [tempoExpression, setTempoExpression] = useState("allegro");

  useEffect(() => {
    if (bpm < 20) {
      setTempoExpression("Larghissimo");
    } else if (bpm == 20) {
      setTempoExpression("Largo");
    } else if (bpm < 40) {
      setTempoExpression("Lento moderato");
    } else if (bpm == 40) {
      setTempoExpression("Grave");
    } else if (bpm < 60) {
      setTempoExpression("Lento");
    } else if (bpm < 66) {
      setTempoExpression("Larghetto");
    } else if (bpm < 76) {
      setTempoExpression("Adagio");
    } else if (bpm < 80) {
      setTempoExpression("Adagietto");
    } else if (bpm < 108) {
      setTempoExpression("Andante");
    } else if (bpm < 168) {
      setTempoExpression("Allegro");
    } else if (bpm < 200) {
      setTempoExpression("Presto");
    } else if (bpm < 240) {
      setTempoExpression("Prestissimo");
    } else if (bpm > 240) {
      setTempoExpression("Allegro prestissimo con fuoco");
    }
  }, [bpm]);

  function decreaseTempo() {
    // setPlaying(!playing);
    resetTimer();
    setBpm(bpm > 10 ? bpm - 1 : (bpm = 10));
  }

  function increaseTempo() {
    // setPlaying(!playing);
    resetTimer();
    setBpm(bpm < 280 ? bpm + 1 : (bpm = 280));
  }

  const handleBpmChange = (e) => {
    if (playing) {
      setPlaying(!playing);
      resetTimer();
    }

    setBpm(+e.target.value);
    // setPlaying(e.target.value);
  };

  function subtracBeat() {
    // setPlaying(!playing);
    resetTimer();
    setBeatsPerMeasure(
      beatsPerMeasure > 1 ? beatsPerMeasure - 1 : beatsPerMeasure
    );
  }

  function addBeat() {
    // setPlaying(!playing);
    resetTimer();

    setBeatsPerMeasure(
      beatsPerMeasure < 16 ? beatsPerMeasure + 1 : beatsPerMeasure
    );
  }
  // hasta aqui y luego le pase cada cosa como prop al propio componente cuando lo llamo en app
  //le paso esas props y las recibe como arg en el componente funcional

  // // es porque quiero agarrar el bpm por ejemplo como variable global
  // y a futuro sincronizarla con la aparicion de proposiciones ritmicas

  const [playing, setPlaying] = useState(false);
  const [timer, setTimer] = useState(0);

  const click1 = new Audio("/click1.mp3");
  const click2 = new Audio("/click2.mp3");

  let count = 0;

  // function play() {
  //    click1.play();

  // }

  function handleStartStop() {
    setPlaying(!playing);
    if (!playing) {
      setTimer(setInterval(play, (60 / bpm) * 1000));
      count = 0;
    } else {
      resetTimer();
    }
  }

  function play() {
    if (count % beatsPerMeasure === 0) {
      click1.play();
    } else {
      click2.play();
    }
    count = count + (1 % beatsPerMeasure);
  }

  function resetTimer() {
    clearInterval(timer);
    setTimer(0);
  }

  //  const handlePlay = () => {
  //   if(playing){
  //     setPlaying (false)
  //     clearInterval(play)
  //   }else{
  //     setPlaying (true);
  //     setInterval(play, (60/bpm) * 1000)
  //   }

  // }

  let text;

  if (playing) {
    text = "stop";
  } else {
    text = "play";
  }

  console.log(playing);

  return (
    <div className="App">
      <header className="App-header">
        <Metronome
          bpm={bpm}
          tempoExpression={tempoExpression}
          beatsPerMeasure={beatsPerMeasure}
          decreaseTempo={decreaseTempo}
          increaseTempo={increaseTempo}
          handleBpmChange={handleBpmChange}
          subtracBeat={subtracBeat}
          addBeat={addBeat}
          handleStartStop={handleStartStop}
          text={text}
        />
      </header>
    </div>
  );
}

export default App;
