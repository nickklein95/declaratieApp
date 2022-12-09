import React from 'react';
import './App.css';
import DeclaratieFormulier from './components/DeclaratieFormulier.js'


function App() {
  
  return (
    <div className="container">
      <main>
        <div className="py-5">
          <img className="d-block mb-4" src="https://scoutingmenkema.nl/wp-content/uploads/2016/05/scouting_menkema_logo_b.png" alt="" width="40%"></img>
          <h2 className="text-center">Declaratieformulier</h2>
          <br />
          <p>Vul onderstaande gegevens in en maak een duidelijke foto of scan van het hele bonnetje. Zorg ervoor dat alle tekst goed leesbaar is.</p>
          <p style={{ backgroundColor: 'yellow' }}>
            Bedenk je goed welke penningmeester je declaratie moet behandelen. Het is niet mogelijk om te kiezen voor de speltak 'Explorers' of 'Stam' wanneer je de groepspenningmeester hebt geselecteerd. Om kosten te declararen voor de Explorers of Stam, moet je daarvoor een losse declaratie indienen. Kosten voor de bar moeten worden ingediend bij de stampenningmeester. Kies dan de juiste penningmeester en bij speltak 'Groepsuitgave'.
          </p>
          <p>
            <b>Let op:</b> Je moet je bonnetjes zelf bewaren totdat het boekjaar gesloten is.</p>
          <p>Tips:<br /></p>
          <ol>
            <li>Wanneer je deze pagina op je telefoon of tablet laadt kun je direct een foto maken zodra je op "Bestand kiezen" drukt.</li>
            <li>Neem een foto recht boven het bonnetje (dus niet schuin) met voldoende licht.</li>
            <li>Wanneer je een hééél lang bonnetje hebt, dan kun je deze verspreiden over meerdere regels (dus alsof het verschillende bonnetjes zijn), met overlappende fotos. Let er dan wel even op dat je maar 1 keer het totaal bedrag erbij zet en bij de overige regels 0 euro bij 'Bedrag' invult.</li>
          </ol>
          
        </div>

        <div className="row g-5">
          <div className="col-md-12 col-lg-12">

            <DeclaratieFormulier />

          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; {new Date().getFullYear()} Scouting Menkema</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="https://scoutingmenkema.nl/privacy/">Privacy</a></li>
          <li className="list-inline-item"><a href="mailto://penningmeester@scoutingmenkema.nl">Support</a></li>
          <li className="list-inline-item"><a href="/admin">Declaraties Verwerken</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
