import React from 'react';

class DeclaratieFormulier extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gegevens: {
        naam: "",
        IBAN: "",
        emailAdres: "",
      },
      declaraties: [{
        declaratieNummer: "",
        datumDeclaratie: "",
        kostenpost: "",
        penningmmeester: "",
        speltak: "",
        omschrijving: "",
        bedrag: "",
        bonnetjes: [{}]
      }
      ]
    };

  }

  getNextDeclaratieNummer() {
    return this.state.declaraties.length;
  }

  addDeclaratie = (evt) => {

  }

  handleSubmit = (evt) => {
    console.log(this.state)
    evt.preventDefault();
  }

  handleGegevensChange = (evt) => {
    var gegevens = { ...this.state.gegevens }
    gegevens[evt.target.id] = evt.target.value
    this.setState({ gegevens })
  }

  render() {
    return (
      <div>
        <h4 className="mb-3">Gegevens</h4>
        <form className="needs-validation" onSubmit={this.handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="naam" className="form-label">Naam</label>
              <input type="text" className="form-control" id="naam" placeholder="Naam rekeninghouder" value={this.state.gegevens.naam} onChange={this.handleGegevensChange} required></input>
              <div className="invalid-feedback">
                Vul hier je naam in.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="IBAN" className="form-label">Rekeningnummer</label>
              <input type="text" className="form-control" id="IBAN" placeholder="NL68RABO1223334444" value={this.state.gegevens.IBAN} onChange={this.handleGegevensChange} required></input>
              <div className="invalid-feedback">
                vul een geldig IBAN nummer zonder spaties in.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="emailAdres" className="form-label">Emailadres</label>
              <input type="text" className="form-control" id="emailAdres" placeholder="email@scoutingmenkema.nl" value={this.state.gegevens.emailAdres} onChange={this.handleGegevensChange} required></input>
              <div className="invalid-feedback">
                vul een geldig emailadres in
              </div>
            </div>
          </div>

          <hr className="my-4"></hr>
          <h4 className="mb-3">Declaraties</h4>
          <div id="declaraties">
            {
              this.state.declaraties.map((declaratie, i) => (
                <div key={i+1} className="row g-3">
                  <div className="col-md-12">
                    <h5>Declaratie Nr. {i+1}</h5>
                  </div>
                  <div className="col-md-2">
                    <select className="form-select" id="penningmeester" required>
                      <option checked disabled>Penningmeester</option>
                      <option>Groepspenningmeester</option>
                      <option>Stampenningmeester</option>
                      <option>Roverscoutspenningmeester</option>
                      <option>Explorerpenningmeester</option>
                    </select>
                    <div className="invalid-feedback">
                      Kies de juiste penningmeester
                    </div>
                  </div>
                  <div className="col-md-2">
                    <select className="form-select" id="speltak" required>
                      <option checked disabled>Speltak</option>
                      <option>Bevers</option>
                      <option>Welpen</option>
                      <option>Scouts</option>
                      <option>Explorers</option>
                      <option>Roverscouts</option>
                      <option>Stam</option>
                      <option>Groepsuitgave</option>
                    </select>
                    <div className="invalid-feedback">
                      Kies de juiste speltak
                    </div>
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control" id="kostenpost" placeholder="Activiteit/Kostenpost" required></input>
                    <div className="invalid-feedback">
                      Activiteit of kostenpost invullen
                    </div>
                  </div>

                  <div className="col-md-2">
                    <input type="number" step="0.01" className="form-control" id="bedrag" placeholder="0.00" aria-describedby="bedragPrepend" required></input>
                    <div className="invalid-feedback">
                      Vul bedrag in.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <input type="text" className="form-control" id="kostenpost" placeholder="Omschrijf duidelijk waarvoor deze kosten zijn gemaakt." required></input>
                    <div className="invalid-feedback">
                      Omschrijving invullen
                    </div>
                  </div>
                </div>
              )
              )
            }
          </div>
          <hr className="my-4"></hr>
          <div className="col-md-12">
            <button type="button" className="w-100 btn btn-secondary btn-lg btn-block" onClick={this.addDeclaratie}>Voeg declaratie toe</button>
          </div>
          <div className="col-md-12">
            <button type="submit" className="w-100 btn btn-primary btn-lg btn-block">Dien declaraties in</button>
          </div>
        </form>
      </div>
    )
  }
}

export default DeclaratieFormulier;