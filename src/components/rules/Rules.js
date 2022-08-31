import React, { useState } from 'react';
import style from "./rules.module.scss"

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  const showRulesHandler = () => {
    setShowRules(!showRules);
  }
  
  return (
    <div className={style.rulesContainer}>
      <p onClick={showRulesHandler}>RULES</p>
      {showRules &&
        <div className={style.showRules}>
          <img className={style.rules} src={process.env.PUBLIC_URL + "/images/image-rules.svg"} alt="" />
          <img onClick={showRulesHandler} className={style.closeButton} src={process.env.PUBLIC_URL + "/images/icon-close.svg"} alt="" />
        </div>
      }
    </div>
  );
}

export default Rules;
