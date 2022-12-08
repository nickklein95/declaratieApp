import './App.css';

function App() {
  return (
    <div class="container">
      <main>
        <div class="py-5">
          <img class="d-block mb-4" src="https://scoutingmenkema.nl/wp-content/uploads/2016/05/scouting_menkema_logo_b.png" alt="" width="40%"></img>
          <h2 class="text-center">Declaratieformulier</h2>
          <br />
          <p>Vul onderstaande gegevens in en maak een duidelijke foto of scan van het hele bonnetje. Zorg ervoor dat alle tekst goed leesbaar is.</p>
          <p style={{backgroundColor: 'yellow'}}>
          Bedenk je goed welke penningmeester je declaratie moet behandelen. Het is niet mogelijk om te kiezen voor de speltak 'Explorers' of 'Stam' wanneer je de groepspenningmeester hebt geselecteerd. Om kosten te declararen voor de Explorers of Stam, moet je daarvoor een losse declaratie indienen. Kosten voor de bar moeten worden ingediend bij de stampenningmeester. Kies dan de juiste penningmeester en bij speltak 'Groepsuitgave'.
          </p>
          <p>
          <b>Let op:</b> Je moet je bonnetjes zelf bewaren totdat het boekjaar gesloten is.</p>
          <p>
          Tips:<br />
          <ol>
            <li>Wanneer je deze pagina op je telefoon of tablet laadt kun je direct een foto maken zodra je op "Bestand kiezen" drukt.</li>
            <li>Neem een foto recht boven het bonnetje (dus niet schuin) met voldoende licht.</li>
            <li>Wanneer je een hééél lang bonnetje hebt, dan kun je deze verspreiden over meerdere regels (dus alsof het verschillende bonnetjes zijn), met overlappende fotos. Let er dan wel even op dat je maar 1 keer het totaal bedrag erbij zet en bij de overige regels 0 euro bij 'Bedrag' invult.</li>
          </ol>
          </p>
        </div>

        <div class="row g-5">
          <div class="col-md-12 col-lg-12">
            <h4 class="mb-3">Gegevens</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-md-3">
                  <label for="fullName" class="form-label">Naam</label>
                  <input type="text" class="form-control" id="fullName" placeholder="Naam rekeninghouder" value="" required></input>
                  <div class="invalid-feedback">
                    Vul hier je naam in.
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="IBAN" class="form-label">Rekeningnummer</label>
                  <input type="text" class="form-control" id="IBAN" placeholder="NL68RABO1223334444" value="" required></input>
                  <div class="invalid-feedback">
                    vul een geldig IBAN nummer zonder spaties in.
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="emailAddress" class="form-label">Emailadres</label>
                  <input type="text" class="form-control" id="emailAddress" placeholder="email@scoutingmenkema.nl" value="" required></input>
                  <div class="invalid-feedback">
                    vul een geldig emailadres in
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="penningmeester" class="form-label">Penningmeester</label>
                  <select class="form-select" id="penningmeester" required>
                    <option value="" selected disabled>Kies de juiste penningmeester...</option>
                    <option>Groepspenningmeester</option>
                    <option>Stampenningmeester</option>
                    <option>Roverscoutspenningmeester</option>
                    <option>Explorerpenningmeester</option>
                  </select>
                  <div class="invalid-feedback">
                    Kies de juiste penningmeester
                  </div>
                </div>
              </div>

              <hr class="my-4"></hr>

              <h4 class="mb-3">Bonnen</h4>

              <hr class="my-4"></hr>

              <button class="w-100 btn btn-primary btn-lg" type="submit">Dien declaratie in</button>
            </form>
          </div>
        </div>
      </main>

      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; {new Date().getFullYear()} Scouting Menkema</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="https://scoutingmenkema.nl/privacy/">Privacy</a></li>
          <li class="list-inline-item"><a href="mailto://penningmeester@scoutingmenkema.nl">Support</a></li>
          <li class="list-inline-item"><a href="/admin">Declaraties Verwerken</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
