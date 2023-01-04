import React from 'react';

export const FooterView = () => {
  return (
    <React.Fragment>
      <section className="pre-footer-corporate bg-image-7 bg-overlay-darkest">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-lg-start row-30 row-md-60">
            <div className="col-sm-10 col-md-6 col-lg-10 col-xl-3">
              <h6 className="white-color">Über das Theater</h6>
              <p></p>
              <p>
                «Das Dramatheater der Flüchtlinge aus der Ukraine » — das erste staatliche Repertoire der
                Ukraine ohne ständige Truppe. Das Repertoire des Theaters umfasst mehr als 20 Aufführungen,
                sowohl anerkannte Meisterwerke der russischen und Weltliteratur als auch moderne Dramaturgie.
              </p>
              <p />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-3 col-xl-3">
              <h6 className="white-color">Navigation</h6>
              <ul className="list-xxs">
                <li>
                  <a href="/theatr">Das Theater</a>
                </li>
                <li>
                  <a href="/schedule">Programmheft und Karten</a>
                </li>
                <li>
                  <a href="/visit">Ein Besuch im Theater</a>
                </li>

                <li>
                  <a href="/contacts">Kontakt</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-corporate bg-gray-darkest">
        <div className="container">
          <div className="footer-corporate__inner">
            <p className="rights">© 2022 Drama-Theater Flüchtlings-Drama-Theater aus der Ukraine</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
