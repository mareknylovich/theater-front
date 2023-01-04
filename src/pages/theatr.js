import React from 'react';
import Head from 'next/head';

const TheatrePage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <section>
          <div className="container">
            <br />
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="heading-decorated">Das Theater</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-lg-6" style={{ marginBottom: '20px' }}>
                    <h5>Repertoire</h5>
                    <p>
                      Jede Aufführung ist eine Überraschung und ein Experiment. Das Plakat enthält alle
                      beliebtesten Genres des Publikums: von warmen Melodramen bis hin zu aktuellen Komödien.
                      Im «Schauspielhaus von ihnen. Fadeeva» Sie werden sicherlich eine Aufführung sehen, die
                      in Ihrem Herzen bleiben wird.&nbsp;
                      <a href="/performances">Über Theateraufführungen →</a>
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <h5>Kuenstler</h5>
                    <p>
                      «Dramatisches Theater. Wassiljew» ist das erste staatliche Repertoire-Theater in
                      Russland ohne ständige Truppe. Jede Aufführung des Theaters schafft ein einzigartiges
                      Team, die besten Künstler aus St. Petersburg und Moskau werden zu den Rollen eingeladen.{' '}
                      <a href="/actors">Über Künstler →</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6" style={{ marginBottom: '20px' }}>
                    <h5>Cafe</h5>
                    <p>
                      Was steht heute auf dem Plakat? «Geister» oder «Onegin»? Jeder Premiere widmen wir einen
                      Cocktail mit einem besonderen Rezept. Und wir bieten auch 10 Arten von Snacks an, die
                      für jedes Getränk geeignet sind. Wenn Sie zu spät zum Theater kommen, können Sie sich im
                      Café durchatmen, wo die Aufführung auf der großen Leinwand live übertragen wird.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <h5>Foyer</h5>
                    <p>
                      Das Interieur des Theaters wurde im Jahr 2016 komplett renoviert und ist im Stil des
                      zurückhaltenden skandinavischen Minimalismus gestaltet. An den Wänden des ersten
                      Stockwerks befindet sich eine Ausstellung von Porträts legendärer Künstler, die zu
                      verschiedenen Zeiten die Bühne des Theaters betraten. Im zweiten Stock befinden sich
                      zwei Bereiche, von denen Fotos Ihre sozialen Netzwerke verschönern und eine warme
                      Erinnerung an einen Theaterbesuch sein werden.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6" style={{ marginBottom: '20px' }}>
                    <h5>Die Szene</h5>
                    <p>
                      Die technischen Möglichkeiten ermöglichen es uns, die Bühne in ein Raumschiff, einen
                      Multimedia-Raum oder ein stilvolles Interieur eines Hotels im mexikanischen Resort
                      Cancun zu verwandeln.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <h5>Kreative Begegnungen</h5>
                    <p>
                      Die Zuschauer des Theaters können dem Club beitreten und an geschlossenen
                      Veranstaltungen mit Regisseuren und Schauspielern teilnehmen und spezielle Angebote
                      erhalten. Details und Fragebogen an der Theaterkasse.
                    </p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </div>
            </div>
            <br />
          </div>
        </section>
      </main>
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

export default TheatrePage;
