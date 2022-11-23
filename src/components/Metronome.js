function Metronome() {
  let tempoExpression = "Allegro prestissimo con fuoco";

  return (
    <div className="container">
      <div className="metronome">
        <div className="bpm-display">
          <span className="tempo">140</span>
          <span className="bpm">BPM</span>
        </div>
        <div className="tempo-expression">{tempoExpression}</div>
        <div className="tempo-settings">
          <div className="adjust-tempo-btn decrease-tempo">-</div>
          <input type="range" min={10} max={280} step={1} />
          <div className="adjust-tempo-btn increase-tempo">+</div>
        </div>
        <div className="start-stop">START</div>
        <div className="measures">
          <div className="subtract-beats stepper">-</div>
          <div className="measure-count">4</div>
          <div className="add-beats stepper">+</div>
        </div>
        <span className="beats-per-measuse-text">Beats per measure</span>
      </div>
    </div>
  );
}

export default Metronome;
