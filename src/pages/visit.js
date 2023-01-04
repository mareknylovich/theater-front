import React from 'react';
import Head from 'next/head';

const VisitPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <div>
        <main className="page-content">
          <section>
            <div className="container">
              <br />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="heading-decorated">Besuch im Theater</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Die Türen des Theaters öffnen sich um 12:00 Uhr. Zur gleichen Zeit beginnt das
                    Theatercafé, in dem Sie leichte Snacks, warme und kalte Getränke genießen können.
                  </p>
                  <p>
                    Die Bar bietet eine ausgezeichnete Auswahl an Getränken und speziellen Cocktails, die auf
                    unseren Aufführungen basieren.
                  </p>
                </div>
              </div>
              <br />
            </div>
          </section>
          <section>
            <div className="container">
              <br />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="heading-decorated">WIE MAN EIN TICKET KAUFT</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h6 style={{ textAlign: 'center' }}>Auf der Website des Theaters</h6>
                  <p>
                    Jedes Mal, wenn Sie Tickets auf unserer Website kaufen, erhalten Sie einen Cashback von
                    10% des Kaufbetrags, der beim Kauf von Tickets als Theater « ausgegeben werden kann.
                    Wassiljew», so auch in anderen Theatern. Weitere Informationen im Online-Chat auf der
                    Website.
                  </p>
                  <h6 style={{ textAlign: 'center' }}>ZUSCHAUER MIT&amp;NBSP;BEHINDERUNGEN</h6>
                  <p>
                    Theater «Drama Theater der Flüchtlinge aus der Ukraine» komplett ausgestattet mit der
                    notwendigen Ausrüstung für die Aufnahme von Zuschauern mit&nbsp;Behinderungen. Zu Ihren
                    Diensten stehen: ein Lift für kleine Gruppen, ein Platz im Auditorium, ein speziell
                    ausgestatteter Toilettenraum.
                  </p>
                  <p>
                    Um Ihren Besuch so angenehm wie möglich zu gestalten, wenden Sie sich bitte 2—3 Tage vor
                    der Aufführung an den Administrator des Theaters, um alle Details zu klären.
                  </p>
                </div>
              </div>
              <br />
            </div>
          </section>
          <section>
            <div className="container">
              <br />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="heading-decorated">Sonderangebot</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <strong>
                      Beim Kauf von Tickets auf der Website des Theaters gibt es einen Rabatt von 10% für:
                    </strong>
                  </p>
                  <ul className="list-marked">
                    <li>Hotelgäste vor Ort, die einen elektronischen Schlüssel vorlegen;</li>
                    <li>Inhaber eines ISIC-, ITIC-, IYTC-Ausweises nach Vorlage der Karte;</li>
                  </ul>
                  <h5 style={{ textAlign: 'center' }}>Studentenclub</h5>
                  <p>
                    Einmal im Monat erhalten die Vereinsmitglieder eine geheime Mail an den VC mit einer
                    Einladung zu einer Aufführung zu Super-Bedingungen. Und auch Vorschläge von unseren
                    Freunden und Partnern. Um einem Club beizutreten, muss man das Codewort «
                    schreiben;Studclub» in einen Online-Chat auf der Website.
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
              <br />
              <br />
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default VisitPage;
