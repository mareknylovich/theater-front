import React from 'react';
import Head from 'next/head';

const SchedulePage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <section className="section-lg bg-default text-center">
          <div className="container">
            <div className="row justify-content-xl-center row-50">
              <div className="col-xl-9">
                <h1 className="heading-decorated">Plakat und Tickets</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section-lg bg-default text-left calendar-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="schedule_date">
                  <a href="../schedule">
                    <span className="icon icon-sm linear-icon-arrow-left-square" />
                  </a>
                  <span className="big">Marsch 2023 </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-lg bg-default text-center">
          <div className="container">
            <div className="row row-50">
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/chelovek_iz_podolska">
                      <img
                        src="/storage/images/oXcKznWktZ0xK6fohhJ8ASulTTJ9ptUheHIg.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    1. Marsch 2023
                    <p className="thumb__title">
                      <a href="/buytickets/chelovek_iz_podolska">Der Mann aus Podolsk</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Dmitry Danilov, Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/chelovek_iz_podolska">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="buytickets/dvoe_na_kachelyakh">
                      <img
                        src="/storage/images/aAYLlcp2PRJAQS9V6CowIniYSttSGuvJa3yY.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    2. Marsch 2023
                    <p className="thumb__title">
                      <a href="buytickets/dvoe_na_kachelyakh">Zwei auf einer Schaukel</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">William Gibson, lyrisches Drama, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="buytickets/dvoe_na_kachelyakh">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="buytickets/eti_svobodnye_babochki">
                      <img
                        src="/storage/images/qWct7KL1t1g47yhRJOaqyNOoFCVuYmRt3Vgw.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    3. Marsch 2023
                    <p className="thumb__title">
                      <a href="buytickets/eti_svobodnye_babochki">Diese freien Schmetterlinge</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Leonard Gersch, sentimentale Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="buytickets/eti_svobodnye_babochki">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/fantazii_faryateva">
                      <img
                        src="/storage/images/FpxeYzatlxepT2UdqVuCZleck3TQimp2TBh3.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    4. Marsch 2023
                    <p className="thumb__title">
                      <a href="/buytickets/fantazii_faryateva">Phantasien von Faryatyev</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Alla Sokolova, Tragikomödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/fantazii_faryateva">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/kankun">
                      <img
                        src="/storage/images/fYwT0RDJc1ptcisA6f5GhyW3GcNEInhXBl2t.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    5 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/kankun">Cancun</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Jordi Galseran, eine fantastische Tragikomödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/kankun">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/kazanova">
                      <img
                        src="/storage/images/207P9Bt68ZuryH8vh7NkzTNPkdBLT8mehTkH.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    6 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/kazanova">Casanova</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Nach den Werken von Marina Tsvetaeva, Liebesgeschichte, 16+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/kazanova">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/khorosho_ochen">
                      <img
                        src="/storage/images/NzSUlLcwYImLaTjpNoUPs9c4VbgsaCZA3wOa.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    7 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/khorosho_ochen">Gut. Sehr!</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Vasily Shukshin, Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/khorosho_ochen">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/lir">
                      <img
                        src="/storage/images/h1spXiUDjIhxGQi2PoIk8zFreFYxJP27ItHm.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    8 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/lir">Lear</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Basierend auf William Shakespeares Tragödie "König Lear", Tragikomödie, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/lir">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/onegin">
                      <img
                        src="/storage/images/fg70L3QpNbZMdsDZNUUtkLJc7b2QjPEm1Gul.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    9 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/onegin">Onegin</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Basierend auf dem Roman in Gedichten von Alexander Puschkin, Tatianas Träume, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/onegin">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/prestuplenie_i_nakazanie">
                      <img
                        src="/storage/images/8ttkKImpXCR3HdsRKEy8G1dqyhv0IMd2nu2x.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    10 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/prestuplenie_i_nakazanie">Verbrechen und Strafe</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Fjodor Dostojewski, Theaterstück von Konstantin Bogomolov, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/prestuplenie_i_nakazanie">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/prizraki">
                      <img
                        src="/storage/images/2JahJz08bP8BQErvIauKZkMAwGBzC2Sinx84.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    11 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/prizraki">Larve</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Eduardo de Filippo, Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/prizraki">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/tri_tovarishcha">
                      <img
                        src="/storage/images/mqjQ7sdMMAYP8y4OsPsc1mPD0UDKSuuWx3MQ.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    12 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/tri_tovarishcha">Drei Kameraden</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Yuri Smekalov, Alexander Tsypkin, worüber das Ballett schweigt, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/tri_tovarishcha">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/chelovek_iz_podolska">
                      <img
                        src="/storage/images/oXcKznWktZ0xK6fohhJ8ASulTTJ9ptUheHIg.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    13 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/chelovek_iz_podolska">Der Mann aus Podolsk</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Dmitry Danilov, Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/chelovek_iz_podolska">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/dvoe_na_kachelyakh">
                      <img
                        src="/storage/images/aAYLlcp2PRJAQS9V6CowIniYSttSGuvJa3yY.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    14 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/dvoe_na_kachelyakh">Zwei auf einer Schaukel</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">William Gibson, lyrisches Drama, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/dvoe_na_kachelyakh">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/eti_svobodnye_babochki">
                      <img
                        src="/storage/images/qWct7KL1t1g47yhRJOaqyNOoFCVuYmRt3Vgw.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    15 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/eti_svobodnye_babochki">Diese freien Schmetterlinge</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Leonard Gersch, sentimentale Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/eti_svobodnye_babochki">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/fantazii_faryateva">
                      <img
                        src="/storage/images/FpxeYzatlxepT2UdqVuCZleck3TQimp2TBh3.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    16 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/fantazii_faryateva">Phantasien von Faryatyev</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Alla Sokolova, Tragikomödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/fantazii_faryateva">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/kankun">
                      <img
                        src="/storage/images/fYwT0RDJc1ptcisA6f5GhyW3GcNEInhXBl2t.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    17 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/kankun">Cancun</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Jordi Galseran, eine fantastische Tragikomödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/kankun">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/kazanova">
                      <img
                        src="/storage/images/207P9Bt68ZuryH8vh7NkzTNPkdBLT8mehTkH.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    18 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/kazanova">Casanova</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Nach den Werken von Marina Tsvetaeva, Liebesgeschichte, 16+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/kazanova">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/khorosho_ochen">
                      <img
                        src="/storage/images/NzSUlLcwYImLaTjpNoUPs9c4VbgsaCZA3wOa.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    19 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/khorosho_ochen">Gut. Sehr!</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Vasily Shukshin, Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/khorosho_ochen">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/lir">
                      <img
                        src="/storage/images/h1spXiUDjIhxGQi2PoIk8zFreFYxJP27ItHm.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    20 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/lir">Lira</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Basierend auf William Shakespeares Tragödie "König Lear", Tragikomödie, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/lir">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/onegin">
                      <img
                        src="/storage/images/fg70L3QpNbZMdsDZNUUtkLJc7b2QjPEm1Gul.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    21 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/onegin">Onegin</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Basierend auf dem Roman in Gedichten von Alexander Puschkin, Tatianas Träume, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/onegin">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/prestuplenie_i_nakazanie">
                      <img
                        src="/storage/images/8ttkKImpXCR3HdsRKEy8G1dqyhv0IMd2nu2x.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    22 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/prestuplenie_i_nakazanie">Verbrechen und Strafe</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Fjodor Dostojewski, Theaterstück von Konstantin Bogomolov, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/prestuplenie_i_nakazanie">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/prizraki">
                      <img
                        src="/storage/images/2JahJz08bP8BQErvIauKZkMAwGBzC2Sinx84.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    23 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/prizraki">Larve</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Eduardo de Filippo, Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/prizraki">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/tri_tovarishcha">
                      <img
                        src="/storage/images/mqjQ7sdMMAYP8y4OsPsc1mPD0UDKSuuWx3MQ.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    24 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/tri_tovarishcha">Drei Kameraden</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Yuri Smekalov, Alexander Tsypkin, worüber das Ballett schweigt, 18+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/tri_tovarishcha">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/chelovek_iz_podolska">
                      <img
                        src="/storage/images/oXcKznWktZ0xK6fohhJ8ASulTTJ9ptUheHIg.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    25 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/chelovek_iz_podolska">Der Mann aus Podolsk</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Dmitry Danilov, Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/chelovek_iz_podolska">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/dvoe_na_kachelyakh">
                      <img
                        src="/storage/images/aAYLlcp2PRJAQS9V6CowIniYSttSGuvJa3yY.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    26 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/dvoe_na_kachelyakh">Zwei auf einer Schaukel</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">William Gibson, lyrisches Drama, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/dvoe_na_kachelyakh">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/eti_svobodnye_babochki">
                      <img
                        src="/storage/images/qWct7KL1t1g47yhRJOaqyNOoFCVuYmRt3Vgw.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    27 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/eti_svobodnye_babochki">Diese freien Schmetterlinge</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Leonard Gersch, sentimentale Komödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/eti_svobodnye_babochki">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/fantazii_faryateva">
                      <img
                        src="/storage/images/FpxeYzatlxepT2UdqVuCZleck3TQimp2TBh3.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    28 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/fantazii_faryateva">Phantasien von Faryatyev</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Alla Sokolova, Tragikomödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/fantazii_faryateva">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/kankun">
                      <img
                        src="/storage/images/fYwT0RDJc1ptcisA6f5GhyW3GcNEInhXBl2t.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    29 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/kankun">Cancun</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">Jordi Galseran, eine fantastische Tragikomödie, 16+</p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/kankun">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumb thumb-corporate">
                  <div className="img-thumbnail-variant-3">
                    <a href="/buytickets/kazanova">
                      <img
                        src="/storage/images/207P9Bt68ZuryH8vh7NkzTNPkdBLT8mehTkH.jpeg"
                        className="no-blur"
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    30 Marsch, 2023
                    <p className="thumb__title">
                      <a href="/buytickets/kazanova">Casanova</a>
                    </p>
                  </div>
                  <p className="font-size-14-px mt-3">
                    Nach den Werken von Marina Tsvetaeva, Liebesgeschichte, 16+
                  </p>
                  <br />
                  <a className="button button-primary mt-0" href="/buytickets/kazanova">
                    TICKET KAUFEN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default SchedulePage;
