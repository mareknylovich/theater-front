import React from 'react';

export const PaymentPopupView = ({ hours, price, title }) => (
  <div className="popup" style={{ display: 'block' }}>
    <div className="window">
      <p className="modal-send mb-0">
        Spielen
        <br />
        <b>
          «<span id="BookingOrder">{title}</span>»
        </b>
      </p>
      <br />
      <button className="btn close">
        <i className="fas fa-times" />
      </button>
      <div className="form-group">
        <label>VORNAME UND NACHNAME</label>
        <input type="text" className="form-control mt-2" id="purchaserName" minLength={2} required />
      </div>
      <div className="form-group">
        <label>Stadt</label>
        <select className="form-control mt-2" id="purchaserCity">
          <option>Fischerinsel 5, 10179 Berlin</option>
          <option>Wikingerweg 14, 20537 Hamburg</option>
          <option>Baaderstraße 76, 80469 München</option>
          <option>Follerstraße 96, 50676 Köln</option>
          <option>Gutleutstraße 176, 60327 Frankfurt am Main</option>
          <option>Hohe Str. 12, 70174 Stuttgart</option>
          <option>Königsallee, 40215 Düsseldorf</option>
          <option>Große Heimstraße 54, 44137 Dortmund</option>
          <option>Rüttenscheider Str. 131, 45130 Essen</option>
          <option>Faulenstraße 71, 28195 Bremen</option>
          <option>Oststraße 18, 04317 Leipzig</option>
        </select>
      </div>
      <div className="form-group">
        <label>Zeit anzeigen</label>
        <select className="form-control mt-2" id="purchaserTime">
          <option>13:00</option>
          <option>20:00</option>
        </select>
      </div>
      <div className="form-group">
        <label>Wählen Sie eine Zeile</label>
        <select className="form-control mt-2" id="purchaserLength">
          <option value="nothing" selected disabled>
            Wählen Sie eine Zeile
          </option>
          <option value="VIP">VIP-Loge</option>
          <option value={1}>Reihe 1</option>
          <option value={2}>Reihe 2</option>
          <option value={4}>Reihe 4</option>
          <option value={6}>Reihe 6</option>
          <option value={7}>Reihe 7</option>
          <option value={9}>Reihe 9</option>
        </select>
      </div>
      <div id="purchaserSitForm" className="form-group" hidden>
        <label>Wählen Sie einen Ort</label>
        <select className="form-control mt-2" id="purchaserSit"></select>
      </div>
      <input
        type="hidden"
        className="form-control text-uppercase"
        id="purchaserPromo"
        defaultValue
        disabled="true"
      />
      <div id="rowPrice" className="form-group mt-4" hidden>
        <label className="modal-price">
          Total:{' '}
          <b>
            <span id="totalPrice">0</span> €.
          </b>
        </label>
      </div>
      <button id="BookingSubmit" className="button button-primary mt-4" norow>
        Es muss eine Nummer ausgewählt werden
      </button>
      <small className="form-text text-muted mt-3">
        Die Ticketpreise variieren je nach Anzahl der,
        <br />
        je näher an der Bühne, desto teurer.
        <br />
        Sie können zu jeder Zeit
        <br />
        eine Erstattung vornehmen!
      </small>
    </div>
  </div>
);
