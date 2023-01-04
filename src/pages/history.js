import React from 'react';
import Head from 'next/head';

const HistoryPage = () => {
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
                <h1 className="heading-decorated">Geschichte des Theaters</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  Das Flüchtlingsdramatheater aus der Ukraine wurde 2020 von Schauspielern aus der Ukraine
                  gegründet, eine Gruppe von Menschen wurde gegründet, die weiterhin auftreten, ihre
                  Lieblingsrollen spielen und das Publikum mit ihren Auftritten begeistern wollten.
                </p>
                <p>
                  Jetzt hat unser Theater bereits eine große Besetzung von Schauspielern. Wegen des Krieges in
                  der Ukraine sind die meisten Schauspieler gezwungen, ihre Heimat zu verlassen. Aber selbst
                  in dieser schrecklichen Situation versuchen wir, nicht zu verzweifeln und die positiven
                  Seiten zu finden
                </p>
                <p>
                  Den größten Teil des Gewinns des Theaters spenden wir an Wohltätigkeitsfonds der Urainischen
                  Armee. Wir sind sicher, dass Kunst und Liebe unseren gemeinsamen Feind und Angreifer
                  besiegen werden!
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
            <br />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HistoryPage;
