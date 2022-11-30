function Metronome({
  bpm,
  tempoExpression,
  beatsPerMeasure,
  decreaseTempo,
  increaseTempo,
  handleBpmChange,
  subtracBeat,
  addBeat,
  playing,
  handleStartStop,
  text,
}) {
  //buenas buenas, me saque esta lista de expresiones de wikipedia
  // algunas no tenian valor metronomico(asi que esas no las inclui)
  //el salto de linea es para medio ubicar donde estan esas sin valor
  //hay algunas que ya no se usan o que su valor es especificamente 1 numero e igual las inclui
  //fin del comunicado (igual esto es como pa leerlo yo mismo :'c)

  // Larghissimo: extremadamente lento (menos de 20 ppm); usado en raras ocasiones.
  // Largo: muy lento (20 ppm).
  // Lento moderato: (20 - 40ppm).
  // Lento: lento (40 - 60 ppm).
  // Grave: lento y solemne (≈40 ppm).
  // Larghetto: más o menos lento (60 - 66 ppm)
  // Adagio: lento y majestuoso (66 - 76 ppm); para Clementi, el movimiento más largo no era el largo sino el adagio.10​
  // Adagietto: un poco menos lento que el adagio (70 - 80 ppm); poco usado.

  // Tranquillo: tranquilo.
  // Tranquillamente.

  // Afettuoso: (72 ppm).

  // Andante: al paso, tranquilo, un poco vivaz (76 - 108 ppm).
  // Andante moderato: con un poco más de celeridad que el andante (92 - 112 ppm).
  // Andantino: más vivo que el andante moderato; sin embargo, para algunos significa menos vivo que el andante.
  // Moderato espressivo
  // Moderato: moderado (80 - 108 ppm).

  // Allegretto grazioso.
  // Allegretto: un poco animado; sin embargo, en algunas piezas se toca como allegro y en otras como andante.
  // Allegro moderato.

  // Allegro: animado y rápido (110 - 168 ppm).
  // Vivace: vivaz.
  // Vivo: rápido y vivaz.
  // Allegrissimo: más rápido que el allegro; poco usado.

  // Presto: muy rápido (168 - 200 ppm).
  // Vivacissimo: más rápido que el vivace; poco usado.
  // Vivacissimamente: Más rápido que el Vivacissimo.

  // Prestissimo: muy rápido (más de 200 ppm).
  // Allegro prestissimo con fuoco: extremadamente rápido (más de 240 ppm).

  return (
    <div className="container">
      <div className="metronome">
        {/* <p>buenas buenas a mi boton no le da la gana de hacer toggle salu2 </p> */}
        <div className="bpm-display">
          <span className="tempo">{bpm}</span>
          <span className="bpm">BPM</span>
        </div>
        <div className="tempo-expression">{tempoExpression}</div>
        <div className="tempo-settings">
          <div
            className="adjust-tempo-btn decrease-tempo"
            onClick={decreaseTempo}
          >
            -
          </div>
          <input
            type="range"
            min={10}
            max={280}
            step={1}
            className="slider"
            value={bpm}
            onChange={handleBpmChange}
          />
          <div
            className="adjust-tempo-btn increase-tempo"
            onClick={increaseTempo}
          >
            +
          </div>
        </div>
        <div className="start-stop" onClick={handleStartStop}>
          {text}
        </div>
        <div className="measures">
          <div className="subtract-beats stepper" onClick={subtracBeat}>
            -
          </div>
          <div className="measure-count">{beatsPerMeasure}</div>
          <div className="add-beats stepper" onClick={addBeat}>
            +
          </div>
        </div>
        <span className="beats-per-measuse-text">Beats per measure</span>
      </div>
    </div>
  );
}

export default Metronome;
