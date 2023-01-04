import React from 'react';
import Head from 'next/head';

const TicketPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        .slick-gallery .carousel-parent {\n            margin-bottom: 0 !important;\n        }\n        \n        .slick-slider {\n            padding-bottom: 0 !important;\n        }\n        \n        .item {\n            margin: 0 !important;\n        }\n    ',
          }}
        />
        <section className="section-lg bg-default text-center">
          <div className="container">
            <h1 style={{ color: '#000' }}>Das ist gut. Sehr gut!</h1>
            <h6 style={{ color: '#000' }}>Wassili Schukschin</h6>
            <h6 style={{ color: '#000' }}>Komödie, 16+</h6>
            <button id="booking" className="button button-primary" style={{ marginTop: '15px' }}>
              Ticket kaufen
            </button>
            <br />
            <br />
            <div className="slick-gallery">
              <div
                className="slick-slider carousel-parent"
                data-arrows="false"
                data-loop="false"
                data-dots="false"
                data-swipe="true"
                data-items={1}
                data-child="#child-carousel"
                data-for="#child-carousel"
                data-lightgallery="group"
              >
                <div className="item">
                  <img src="/storage/images/NzSUlLcwYImLaTjpNoUPs9c4VbgsaCZA3wOa.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md bg-default text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="row text-left">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      <strong>Regisseur und Produktionsdesigner</strong> — Vasily Senin
                    </p>
                    <p>
                      <strong>Kostümbildnerin</strong> — Irina Arlacheva
                    </p>
                    <p>
                      <strong>Lichtdesigner</strong> — Verdienter Kunstschaffender der Ukraine Eugene Ganzburg
                    </p>
                    <p>
                      <strong>Musikalischer Leiter</strong> — Vladimir Bychkovsky
                    </p>
                    <p />{' '}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row text-left">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      Die Produktion basiert auf fünf Komödien von Vasily Shukshin. Die Charaktere des Stücks
                      sind einfach und unprätentiös, aber jeder von ihnen hat sein eigenes, unlösbares
                      Problem. Gleb Kapustin wartet auf ein Treffen mit einem Kandidaten der Wissenschaft, um
                      ihm zu beweisen, dass es auch im Dorf große Geister gibt. Der stets ruhige und
                      nachgiebige Venya Zyablitsky wagt es zum ersten Mal, mit seiner Frau und Schwiegermutter
                      zu streiten. Andrey Yerin weiß nicht, wie er seiner Frau sagen soll, dass er Geld
                      verloren hat. Sergey Dukhanin steht vor der Entscheidung, was ihm wichtiger ist: die
                      Hälfte eines Mopeds oder das Lächeln seiner Frau. Und nur der alte Afanasiy Deryabin hat
                      keine Zeit für Familiendramen. Er ist mit einer außerordentlich wichtigen Angelegenheit
                      beschäftigt: Er schreibt Briefe an den Bezirksvorstand, in denen er darum bittet, die
                      Straße, in der er wohnt, nach sich selbst zu benennen: Afanasiy Deryabin.
                    </p>
                    <p>
                      In diesen alltäglichen Geschichten finden die Zuschauer des Stücks Poesie und Schönheit,
                      denn Shukshins Darstellung des Alltagslebens ist stets mit philosophischem Verständnis
                      und Argumenten zu "ewigen" Fragen der menschlichen Existenz verbunden. Auf die eine oder
                      andere Weise erkennen unsere Figuren, dass das Wichtigste im Leben nicht Besitz und Geld
                      sind, sondern Liebe, Freundlichkeit und Gerechtigkeit. Und diese Erkenntnis lässt einen
                      gut leben… sehr gut!
                    </p>
                    <h6>MICROSCOPE</h6>
                    <p>
                      <strong>Andrei Yerin</strong>&nbsp;— Vyacheslav Korobitsin&nbsp;/Alexander Lenin
                      <br />
                      <strong>Zoya Yerina, seine Frau&nbsp;</strong>— Sonja Gorelik
                      <br />
                      <strong>Petya, Sohn&nbsp;</strong>— Maxim Smirnov
                      <br />
                      <strong>Sergej Kulikow&nbsp;</strong>— Denis Kirillow
                    </p>
                    <h6>GEKREUZT</h6>
                    <p>
                      <strong>Gleb Kapustin</strong>&nbsp;— Alexander Mashanov&nbsp;/ Alexander Ronis
                      <br />
                      <strong>Konstantin Iwanowitsch Schurawlew (Doktor der Philologie)&nbsp;</strong>— Denis
                      Kirillow
                      <br />
                      <strong>Valya Zhuravleva, seine Frau</strong>&nbsp;— Polina Fetisova
                      <br />
                      <strong>Die Dorfbewohner</strong>&nbsp;— Vyacheslav Korobitsin&nbsp;/Alexander Lenin,
                      Sonya Gorelik, Natalia Parashkina&nbsp;/Yulia Molchanova
                    </p>
                    <h6>MEIN SCHWIEGERSOHN HAT EINEN WAGEN MIT BRENNHOLZ GESTOHLEN.</h6>
                    <p>
                      <strong>Venya Zyablitsky</strong>&nbsp;— Vyacheslav Korobitsyn&nbsp;/Alexander Lenin
                      <br />
                      <strong>Sonya Zyablitskaya, seine Frau&nbsp;</strong>— Polina Fetisovа
                      <br />
                      <strong>Lizaveta Vasilievna, die Schwiegermutter von Vena</strong>&nbsp;— Natalia
                      Parashkina&nbsp;/Yulia Molchanova
                      <br />
                      <strong>Richterin</strong>&nbsp;— Sonja Gorelik
                      <br />
                      <strong>Pflichtverteidiger</strong>&nbsp;— Denis Kirillov
                      <br />
                      <strong>Staatsanwalt</strong>&nbsp;— Alexander Mashanov&nbsp;/ Alexander Ronis
                    </p>
                    <h6>MUSIK DERIABIN</h6>.
                    <p>
                      <strong>Mann</strong>&nbsp;— Alexander Mashanov&nbsp;/ Alexander Ronis
                      <br />
                      <strong>Eichhörnchen&nbsp;</strong>— Sonja Gorelik
                    </p>
                    <h6>SICHERHEIT</h6>
                    <p>
                      <strong>Sergey Dukhanin&nbsp;</strong>— Denis Kirillov
                      <br />
                      <strong>Claudia Dukhanina, seine Frau&nbsp;</strong>— Natalia Parashkina&nbsp;/Yulia
                      Molchanova
                      <br />
                      <strong>Birne, ihre&nbsp;Tochter&nbsp;</strong>— Polina Fetisova
                      <br />
                      <strong>Verkäuferin</strong>&nbsp;— Sonja Gorelik
                      <br />
                      <strong>Sergejs Kollegen</strong>&nbsp;— Wjatscheslaw Korobizin&nbsp;/ Alexander Lenin,
                      Alexander Maschanow&nbsp;/ Alexander Ronis
                    </p>
                    <p />{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md bg-default text-center">
          <div className="container">
            <div className="row row-50 justify-content-md-center justify-content-lg-start">
              <div className="col-md-6">
                <article className="blurb blurb-minimal">
                  <div className="unit flex-row unit-spacing-md justify-content-performance">
                    <div className="unit-left">
                      <div className="blurb-minimal__icon">
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          id="Outline"
                          viewBox="0 0 64 64"
                          width={32}
                          height={32}
                        >
                          <path
                            d="M61,2H3A1,1,0,0,0,2,3V33a1,1,0,0,0,1,1H61a1,1,0,0,0,1-1V3A1,1,0,0,0,61,2ZM42,28V26a3.984,3.984,0,0,0-1.619-3.195A2.972,2.972,0,0,0,41,21a3,3,0,0,0-6,0,2.972,2.972,0,0,0,.619,1.8A3.984,3.984,0,0,0,34,26v2H30V26a3.984,3.984,0,0,0-1.619-3.195A2.972,2.972,0,0,0,29,21a3,3,0,0,0-6,0,2.972,2.972,0,0,0,.619,1.8A3.984,3.984,0,0,0,22,26v2H13V26.243a11.154,11.154,0,0,0-2.633-7.231A17.918,17.918,0,0,0,14.976,7.467l1.225.49A42.349,42.349,0,0,0,32,11,42.367,42.367,0,0,0,47.8,7.958l1.225-.491a17.918,17.918,0,0,0,4.609,11.545A11.154,11.154,0,0,0,51,26.243V28Zm-5-7a1,1,0,1,1,1,1A1,1,0,0,1,37,21Zm-1,5a2,2,0,0,1,4,0v2H36ZM25,21a1,1,0,1,1,1,1A1,1,0,0,1,25,21Zm-1,5a2,2,0,0,1,4,0v2H24ZM4,20H8.559A9.172,9.172,0,0,1,11,26.243V28H4Zm49,6.243A9.172,9.172,0,0,1,55.441,20H60v8H53ZM60,18H55.441A15.953,15.953,0,0,1,51,6.929V4h9ZM49,5.323,47.056,6.1A40.357,40.357,0,0,1,32,9,40.357,40.357,0,0,1,16.944,6.1L15,5.323V4H49ZM13,4V6.929A15.953,15.953,0,0,1,8.559,18H4V4ZM60,32H4V30H60Z"
                            style={{ fill: '#e3000e' }}
                          />
                          <path
                            d="M57,39v3H55V39a3,3,0,0,0-3-3H48a3,3,0,0,0-3,3v3H43V39a3,3,0,0,0-3-3H36a3,3,0,0,0-3,3v3H31V39a3,3,0,0,0-3-3H24a3,3,0,0,0-3,3v3H19V39a3,3,0,0,0-3-3H12a3,3,0,0,0-3,3v3H7V39a3,3,0,0,0-3-3H2v2H4a1,1,0,0,1,1,1v7H2v2H62V46H59V39a1,1,0,0,1,1-1h2V36H60A3,3,0,0,0,57,39ZM7,44H9v2H7Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H11Zm8,5h2v2H19Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H23Zm8,5h2v2H31Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H35Zm8,5h2v2H43Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H47Zm8,5h2v2H55Z"
                            style={{ fill: '#e3000e' }}
                          />
                          <path
                            d="M57,53v3H55V53a3,3,0,0,0-3-3H48a3,3,0,0,0-3,3v3H43V53a3,3,0,0,0-3-3H36a3,3,0,0,0-3,3v3H31V53a3,3,0,0,0-3-3H24a3,3,0,0,0-3,3v3H19V53a3,3,0,0,0-3-3H12a3,3,0,0,0-3,3v3H7V53a3,3,0,0,0-3-3H2v2H4a1,1,0,0,1,1,1v7H2v2H62V60H59V53a1,1,0,0,1,1-1h2V50H60A3,3,0,0,0,57,53ZM7,58H9v2H7Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H11Zm8,5h2v2H19Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H23Zm8,5h2v2H31Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H35Zm8,5h2v2H43Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H47Zm8,5h2v2H55Z"
                            style={{ fill: '#e3000e' }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="unit-body">
                      <p className="blurb__title heading-6">Premiere</p>
                      <p></p>
                      <p>13 Mai 2017</p>
                      <p />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6">
                <article className="blurb blurb-minimal">
                  <div className="unit flex-row unit-spacing-md justify-content-performance">
                    <div className="unit-left">
                      <div className="blurb-minimal__icon">
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          xmlnsXlink="https://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 511.992 511.992"
                          style={{ enableBackground: 'new 0 0 511.992 511.992' }}
                          xmlSpace="preserve"
                          width={32}
                          height={32}
                        >
                          <g id="XMLID_806_">
                            <g id="XMLID_386_">
                              <path
                                id="XMLID_389_"
                                d="M511.005,279.646c-4.597-46.238-25.254-89.829-58.168-122.744    c-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681,25.794-17.074,25.794-32.993c0-18.748-15.252-34-34-34h-72    c-18.748,0-34,15.252-34,34c0,15.918,10.998,29.311,25.793,32.993v25.479c-36.115,8.071-70.429,26.121-98.477,54.169    c-6.138,6.138-11.798,12.577-16.979,19.269c-0.251-0.019-0.502-0.038-0.758-0.038H78.167c-5.522,0-10,4.477-10,10s4.478,10,10,10    h58.412c-7.332,12.275-13.244,25.166-17.744,38.436H10c-5.522,0-10,4.477-10,10s4.478,10,10,10h103.184    c-2.882,12.651-4.536,25.526-4.963,38.437H64c-5.522,0-10,4.477-10,10s4.478,10,10,10h44.54    c0.844,12.944,2.925,25.82,6.244,38.437H50c-5.522,0-10,4.477-10,10s4.478,10,10,10h71.166    c9.81,25.951,25.141,50.274,45.999,71.132c32.946,32.946,76.582,53.608,122.868,58.181c6.606,0.652,13.217,0.975,19.819,0.975    c39.022,0,77.548-11.293,110.238-32.581c4.628-3.014,5.937-9.209,2.923-13.837s-9.209-5.937-13.837-2.923    c-71.557,46.597-167.39,36.522-227.869-23.957c-70.962-70.962-70.962-186.425,0-257.388c70.961-70.961,186.424-70.961,257.387,0    c60.399,60.4,70.529,156.151,24.086,227.673c-3.008,4.632-1.691,10.826,2.94,13.833c4.634,3.008,10.826,1.691,13.833-2.941    C504.367,371.396,515.537,325.241,511.005,279.646z M259.849,44.263c0-7.72,6.28-14,14-14h72c7.72,0,14,6.28,14,14s-6.28,14-14,14    h-1.794h-68.413h-1.793C266.129,58.263,259.849,51.982,259.849,44.263z M285.642,99.296V78.263h48.413v20.997    C317.979,97.348,301.715,97.36,285.642,99.296z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_391_"
                                d="M445.77,425.5c-2.64,0-5.21,1.07-7.069,2.93c-1.87,1.86-2.931,4.44-2.931,7.07    c0,2.63,1.061,5.21,2.931,7.07c1.859,1.87,4.43,2.93,7.069,2.93c2.63,0,5.2-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07    c0-2.63-1.069-5.21-2.93-7.07C450.97,426.57,448.399,425.5,445.77,425.5z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_394_"
                                d="M310.001,144.609c-85.538,0-155.129,69.59-155.129,155.129s69.591,155.129,155.129,155.129    s155.129-69.59,155.129-155.129S395.539,144.609,310.001,144.609z M310.001,434.867c-74.511,0-135.129-60.619-135.129-135.129    s60.618-135.129,135.129-135.129S445.13,225.228,445.13,299.738S384.512,434.867,310.001,434.867z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_397_"
                                d="M373.257,222.34l-49.53,49.529c-4.142-2.048-8.801-3.205-13.726-3.205c-4.926,0-9.584,1.157-13.726,3.205    l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142l22.167,22.167    c-2.049,4.142-3.205,8.801-3.205,13.726c0,17.134,13.939,31.074,31.074,31.074s31.074-13.94,31.074-31.074    c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076v0l1.453-1.453c3.905-3.905,3.905-10.237,0-14.142    S377.164,218.435,373.257,222.34z M310.001,310.812c-6.106,0-11.074-4.968-11.074-11.074s4.968-11.074,11.074-11.074    s11.074,4.968,11.074,11.074S316.107,310.812,310.001,310.812z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_398_"
                                d="M416.92,289.86h-9.265c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.265c5.522,0,10-4.477,10-10    S422.442,289.86,416.92,289.86z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_399_"
                                d="M212.346,289.616h-9.264c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.264c5.522,0,10-4.477,10-10    S217.868,289.616,212.346,289.616z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_400_"
                                d="M310.123,212.083c5.522,0,10-4.477,10-10v-9.264c0-5.523-4.478-10-10-10s-10,4.477-10,10v9.264    C300.123,207.606,304.601,212.083,310.123,212.083z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_424_"
                                d="M309.879,387.393c-5.522,0-10,4.477-10,10v9.264c0,5.523,4.478,10,10,10s10-4.477,10-10v-9.264    C319.879,391.87,315.401,387.393,309.879,387.393z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_425_"
                                d="M10,351.44c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07c0,2.64,1.069,5.21,2.93,7.07    s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07    C15.21,352.51,12.63,351.44,10,351.44z"
                                style={{ fill: '#e3000e' }}
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="unit-body">
                      <p className="blurb__title heading-6">Dauer</p>
                      <p></p>
                      <p>2 Stunden und 20 Minuten mit einer Unterbrechung</p>
                      <p />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md bg-gray-lighter text-center">
          <div className="container">
            <div className="row justify-content-lg-center">
              <div className="col-lg-10 col-xl-8">
                <h4 className="heading-decorated">Schauspieler und Darsteller</h4>
              </div>
            </div>
            <div className="row row-50">
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/nzjXMxscrEqRWkr06KEeo64yGa8pxQH7Paxo.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Wjatscheslaw Korobizin</span>
                  </h6>
                  <div className="unit-body">
                    <span>Andrej Jerin / Gleichaltrige / Venja Zyablizkij / Sergejs Mitbewohner</span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/osVyRo02VMrJXl6dN9yt0dSj1tbUHLup9s4P.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Alexander Lenin</span>
                  </h6>
                  <div className="unit-body">
                    <span>Andrej Jerin / Gleichaltrige / Venja Zyablizkij / Sergejs Mitbewohner</span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/m1AsdUFaHDPTZ3GMAydHkwxGhyuJc5fB5hCU.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Sonja Gorelik</span>
                  </h6>
                  <div className="unit-body">
                    <span>
                      Zoya Yerina, Seine Frau / Alleinstehende Dorfbewohner / Richterin / Eichhörnchen /
                      Verkäuferin
                    </span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/cB9dZzaUh9BI55DxGnroDef14VPMlaKLVsmi.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Denis Kirillow</span>
                  </h6>
                  <div className="unit-body">
                    <span>
                      Sergei Kulikov / Konstantin Ivanovich Zhuravlev (PhD) / Pflichtverteidiger / Sergei
                      Dukhanin
                    </span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/S7sqAOpehevmGhnh5Ja8lx0fqUqxWQEZpMd2.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Alexander Ronis</span>
                  </h6>
                  <div className="unit-body">
                    <span>Gleb Kapustin / Staatsanwalt / Mann / Sergejs Mitarbeiter</span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/sDJaeilBPNhsEF6GBwAL0zEeIsVt1lk0Oxd4.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Alexander Maschanow</span>
                  </h6>
                  <div className="unit-body">
                    <span>Gleb Kapustin / Staatsanwalt / Mann / Sergejs Mitarbeiter</span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/VjMaJnEf2PJq9qHzXLVPWcyLKkrIJOCct4Qp.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Polina Fetisowa</span>
                  </h6>
                  <div className="unit-body">
                    <span>
                      Valya Zhuravleva, seine Frau / Sonya Zyablitskaya, seine Frau / Grusha, ihre Tochter
                    </span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/pNRKaPRPNcKQKfBQg1HCo8yRSP9Brc6Ih20v.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Julia Molchanova</span>
                  </h6>
                  <div className="unit-body">
                    <span>
                      Lizaveta Vasilievna, Vena's Schwiegermutter / Peers / Klavdia Dukhanina, seine Frau
                    </span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/KHlv1JZAmgs9QPs8getXhLLZY50jfiiT6b9W.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Natalia Paraschkina</span>
                  </h6>
                  <div className="unit-body">
                    <span>
                      Lizaveta Vasilievna, Vena's Schwiegermutter / Peers / Klavdia Dukhanina, seine Frau
                    </span>
                  </div>
                </article>
              </div>{' '}
            </div>
          </div>
        </section>
        <section className="section-lg bg-default text-center" data-lightgallery="group">
          <div className="container-fluid">
            <h4 className="heading-decorated">Foto</h4>
            <div className="row no-gutters">
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/MQHL3RznwsDK23gjpH7UCjhvwUOChsl9uNuK.jpeg"
                  style={{ background: 'url("/storage/images/MQHL3RznwsDK23gjpH7UCjhvwUOChsl9uNuK.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/MQHL3RznwsDK23gjpH7UCjhvwUOChsl9uNuK.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/VqwEq0L5RkafrDTiJNfWpHeULNv6pAdNkYI5.jpeg"
                  style={{ background: 'url("/storage/images/VqwEq0L5RkafrDTiJNfWpHeULNv6pAdNkYI5.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/VqwEq0L5RkafrDTiJNfWpHeULNv6pAdNkYI5.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/gbCapNDAKnUJLognjR2V9EiP8958YgUUbob8.jpeg"
                  style={{ background: 'url("/storage/images/gbCapNDAKnUJLognjR2V9EiP8958YgUUbob8.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/gbCapNDAKnUJLognjR2V9EiP8958YgUUbob8.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/vDQyknZz3esAPyRGsjYuGJcewsSeF31dQ2NR.jpeg"
                  style={{ background: 'url("/storage/images/vDQyknZz3esAPyRGsjYuGJcewsSeF31dQ2NR.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/vDQyknZz3esAPyRGsjYuGJcewsSeF31dQ2NR.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/aLxYKkdu1iJIc2KR7EVV1kwuqlwZRNObCbpy.jpeg"
                  style={{ background: 'url("/storage/images/aLxYKkdu1iJIc2KR7EVV1kwuqlwZRNObCbpy.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/aLxYKkdu1iJIc2KR7EVV1kwuqlwZRNObCbpy.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/2IAQoJHi1XQpshI5Xuu8fSDKNQFoCkTS6LhR.jpeg"
                  style={{ background: 'url("/storage/images/2IAQoJHi1XQpshI5Xuu8fSDKNQFoCkTS6LhR.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/2IAQoJHi1XQpshI5Xuu8fSDKNQFoCkTS6LhR.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/0RrQcfChgWEEQ60vwTNhTB0c9gBB7gNLLqjI.jpeg"
                  style={{ background: 'url("/storage/images/0RrQcfChgWEEQ60vwTNhTB0c9gBB7gNLLqjI.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/0RrQcfChgWEEQ60vwTNhTB0c9gBB7gNLLqjI.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/cGG36I6xMpmg9n1BHIzOgJRtfbWExeNBXvSu.jpeg"
                  style={{ background: 'url("/storage/images/cGG36I6xMpmg9n1BHIzOgJRtfbWExeNBXvSu.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/cGG36I6xMpmg9n1BHIzOgJRtfbWExeNBXvSu.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/K9JIDUiwXCDrw7yL9lbJZhbw3g6vCwungRrN.jpeg"
                  style={{ background: 'url("/storage/images/K9JIDUiwXCDrw7yL9lbJZhbw3g6vCwungRrN.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/K9JIDUiwXCDrw7yL9lbJZhbw3g6vCwungRrN.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/OcjvQVleYeYA1Gxoqny8viJ8luJ6HWu69vgA.jpeg"
                  style={{ background: 'url("/storage/images/OcjvQVleYeYA1Gxoqny8viJ8luJ6HWu69vgA.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/OcjvQVleYeYA1Gxoqny8viJ8luJ6HWu69vgA.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/HzaEZ1JTlx7Sj2EkwunrsdaPP4SCqBo0JpD6.jpeg"
                  style={{ background: 'url("/storage/images/HzaEZ1JTlx7Sj2EkwunrsdaPP4SCqBo0JpD6.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/HzaEZ1JTlx7Sj2EkwunrsdaPP4SCqBo0JpD6.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/hklcpxbS6n5toC7qZCvc6jUZzIthBO83p0Em.jpeg"
                  style={{ background: 'url("/storage/images/hklcpxbS6n5toC7qZCvc6jUZzIthBO83p0Em.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/hklcpxbS6n5toC7qZCvc6jUZzIthBO83p0Em.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/QXtWcjazTSEfEnmc0amiCPMs8h7kEp9L9bst.jpeg"
                  style={{ background: 'url("/storage/images/QXtWcjazTSEfEnmc0amiCPMs8h7kEp9L9bst.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/QXtWcjazTSEfEnmc0amiCPMs8h7kEp9L9bst.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/CK9Y6dvsTrlwefXYiZ0PfdK1gVjyFFfYREWn.jpeg"
                  style={{ background: 'url("/storage/images/CK9Y6dvsTrlwefXYiZ0PfdK1gVjyFFfYREWn.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/CK9Y6dvsTrlwefXYiZ0PfdK1gVjyFFfYREWn.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/IUO5LUZXl9JAcGaXatFcJYIrFieNRa2xo08d.jpeg"
                  style={{ background: 'url("/storage/images/IUO5LUZXl9JAcGaXatFcJYIrFieNRa2xo08d.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/IUO5LUZXl9JAcGaXatFcJYIrFieNRa2xo08d.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/aXwqQKYrCFdeXm6T3W3SbmTHK0lMAl37HArm.jpeg"
                  style={{ background: 'url("/storage/images/aXwqQKYrCFdeXm6T3W3SbmTHK0lMAl37HArm.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/aXwqQKYrCFdeXm6T3W3SbmTHK0lMAl37HArm.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>{' '}
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default TicketPage;
