import React from 'react';
import Head from 'next/head';

const ContactsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <section className="section-md bg-default">
          <div className="container">
            <div className="row row-50">
              <div className="col-md-7 col-lg-7">
                <h4 className="heading-decorated">Kontakt</h4>
                <ul className="list-sm contact-info">
                  <li>
                    <dl className="list-terms-inline">
                      <dt>Adressen</dt>
                      <br />
                      Fischerinsel 5, 10179 Berlin
                      <br />
                      Wikingerweg 14, 20537 Hamburg
                      <br />
                      Baaderstraße 76, 80469 München
                      <br />
                      Follerstraße 96, 50676 Köln
                      <br />
                      Gutleutstraße 176, 60327 Frankfurt am Main
                      <br />
                      Hohe Str. 12, 70174 Stuttgart
                      <br />
                      Königsallee, 40215 Düsseldorf
                      <br />
                      Große Heimstraße 54, 44137 Dortmund
                      <br />
                      Rüttenscheider Str. 131, 45130 Essen
                      <br />
                      Faulenstraße 71, 28195 Bremen
                      <br />
                      Oststraße 18, 04317 Leipzig
                      <br />
                      <br />
                      <dd></dd>
                    </dl>
                  </li>
                </ul>
                <br />
                <div className="font-18">
                  <p>&nbsp;</p>
                  <p>
                    <img alt="" src="/svg/tic.svg" style={{ marginRight: '10px', width: '25px' }} />
                    <strong>ЗDie Tickets können online gebucht und erstattet werden.</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Reklamationen und Vorschläge: <strong>contacts@drama-teatre.de</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ContactsPage;
