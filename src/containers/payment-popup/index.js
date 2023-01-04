import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getQuery } from '../../utils/navigation';
import { PaymentPopupView } from './View';

export const PaymentPopup = ({ ...props }) => {
  const [title, setTitle] = useState();
  const { pathname } = useRouter();
  const { socket } = useSelector(({ socket }) => ({
    socket,
  }));

  useEffect(() => {
    if (pathname.includes('chelovek_iz_podolska')) {
      setTitle('Der Mann aus Podolsk');
    } else if (pathname.includes('dvoe_na_kachelyakh')) {
      setTitle('Zwei auf einer Schaukel');
    } else if (pathname.includes('eti_svobodnye_babochki')) {
      setTitle('Zwei auf einer Schaukel');
    } else if (pathname.includes('fantazii_faryateva')) {
      setTitle('Phantasien von Faryatyev');
    } else if (pathname.includes('kankun')) {
      setTitle('Cancun');
    } else if (pathname.includes('kazanova')) {
      setTitle('Casanova');
    } else if (pathname.includes('khorosho_ochen')) {
      setTitle('Gut. Sehr!');
    } else if (pathname.includes('lir')) {
      setTitle('Lear');
    } else if (pathname.includes('onegin')) {
      setTitle('Onegin');
    } else if (pathname.includes('prestuplenie_i_nakazanie')) {
      setTitle('Verbrechen und Strafe');
    } else if (pathname.includes('prizraki')) {
      setTitle('Larve');
    } else if (pathname.includes('tri_tovarishcha')) {
      setTitle('Drei Kameraden');
    }
  }, [pathname]);

  const open = typeof window !== 'undefined' && document.querySelector('.popup')?.style?.display === 'block';

  useEffect(() => {
    const ref = getQuery('ref') || localStorage.getItem('ref');
    const service = 6;

    if (open && ref && socket) {
      socket.emit('PAYMENT_NOTIFICATION', { type: 'MODAL_OPEN', telegramId: ref, service });
    }
  }, [open, socket]);

  return <PaymentPopupView {...props} title={title} />;
};
