import React from 'react'

import CookieConsent from "react-cookie-consent";

const Cookie = () => {
  return (
    <CookieConsent
      location="bottom"
      cookieName="cookie acceptance"
      overlay
      buttonText="CONTINUA"
    >
      Visitando questo sito web si autorizza l&#39;impiego di cookie di
      profilazione, propri o di terzi, per poter configurare in modo ottimale e
      migliorare costantemente le pagine web. Per informazioni dettagliate
      sull’impiego dei cookie in questo sito web ti invitiamo a leggere la
      cookie policy (Policy). Chiudendo questo banner acconsenti all’uso dei cookie.
    </CookieConsent>
  );
}

export default Cookie;