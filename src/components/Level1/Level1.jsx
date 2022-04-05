import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import style from "./Level1.module.css";

const Level1 = ({ setPoints }) => {
  const [case1, setCase1] = useState(0);
  const [case2, setCase2] = useState(0);
  const [change1, setChange1] = useState(false);
  const [change2, setChange2] = useState(false);
  const [field1, setField1] = useState(style.none);
  const [field2, setField2] = useState(style.none);
  const [field3, setField3] = useState(style.none);
  const [field4, setField4] = useState(style.none);
  const [field5, setField5] = useState(style.none);
  const [field6, setField6] = useState(style.none);
  const [field7, setField7] = useState(style.none);
  const [field8, setField8] = useState(style.none);
  const [field9, setField9] = useState(style.none);

  const handleMouseDownField1 = () => {
    setChange1(true);
    setCase1(1);
  };
  const handleMouseDownField2 = () => {
    if (case1 === 3 || case1 === 2) {
      setChange1(true);
      setCase1(2);
    }
    if (case1 === 6 || case1 === 5) {
      setChange1(true);
      setCase1(5);
    }
    if (case2 === 18) {
      setChange2(true);
      setCase1(18);
    }
  };
  const handleMouseDownField3 = () => {
    setChange1(true);
    setCase1(4);
  };
  const handleMouseDownField4 = () => {
    setChange2(true);
    setCase2(1);
  };
  const handleMouseDownField5 = () => {
    setChange2(true);
    setCase2(7);
  };
  const handleMouseDownField6 = () => {
    if (case1 >= 7) {
      setChange1(true);
      setCase1(7);
    }
    if (case2 > 4 && case2 < 7) {
      setChange2(true);
      setCase2(5);
    }
    if (case2 > 7 && case2 < 13) {
      setChange2(true);
      setCase2(8);
    }
    if (case2 >= 17 && case2 < 18) {
      setChange2(true);
      setCase2(17);
    }
  };
  const handleMouseDownField7 = () => {
    if (case1 === 10) {
      setChange1(true);
      setCase1(10);
    }
    if ((case2 > 1 && case2 < 7) || case2 === 19) {
      setChange2(true);
      setCase2(2);
    }
    if (case2 > 10 && case2 < 13) {
      setChange2(true);
      setCase2(11);
    }
    if (case2 > 13 && case2 < 16) {
      setChange2(true);
      setCase2(14);
    }
  };
  const handleMouseDownField8 = () => {
    if (case1 >= 9) {
      setChange1(true);
      setCase1(9);
    }
    if ((case2 > 2 && case2 < 7) || case2 === 19) {
      setChange2(true);
      setCase2(3);
    }
    if (case2 > 9 && case2 < 13) {
      setChange2(true);
      setCase2(10);
    }
    if (case2 > 12 && case2 < 18) {
      setChange2(true);
      setCase2(13);
    }
  };
  const handleMouseDownField9 = () => {
    if (case1 >= 8) {
      setChange1(true);
      setCase1(8);
    }
    if (case2 > 3 && case2 < 7) {
      setChange2(true);
      setCase2(4);
    }
    if (case2 > 7 && case2 < 13) {
      setChange2(true);
      setCase2(9);
    }
    if (case2 > 15 && case2 < 18) {
      setChange2(true);
      setCase2(16);
    }
  };

  const handleMouseUpField1 = () => {
    if (case1 === 1 || case1 === 4) {
      setCase1(0);
    }
    if (case2 === 1 || case2 === 7) {
      setCase2(0);
    }
  };
  const handleMouseUpField3 = () => {
    if (case1 === 1 || case1 === 4) {
      setCase1(0);
    }
    if (case2 === 1 || case2 === 7) {
      setCase2(0);
    }
  };
  const handleMouseUpField4 = () => {
    if (case1 === 1 || case1 === 4) {
      setCase1(0);
    }
    if (case2 === 1 || case2 === 7) {
      setCase2(0);
    }
  };
  const handleMouseUpField5 = () => {
    if (case1 === 1 || case1 === 4) {
      setCase1(0);
    }
    if (case2 === 1 || case2 === 7) {
      setCase2(0);
    }
  };

  const handleMouseOverField1 = () => {
    if (change1 && case1 === 2) {
      setCase1(1);
    }
    if (change1 && case1 === 5) {
      setCase1(6);
    }
  };
  const handleMouseOverField2 = () => {
    if (change1 && (case1 === 1 || case1 === 3)) {
      setCase1(2);
      if (case2 === 18) {
        setCase2(0);
      }
    }
    if (change1 && (case1 === 4 || case1 === 6)) {
      setCase1(5);
      if (case2 === 18) {
        setCase2(0);
      }
    }
    if (change2 && case2 === 7) {
      setCase2(18);
      if (case1 < 7) {
        setCase1(0);
      }
    }
  };
  const handleMouseOverField3 = () => {
    if (change1 && case1 === 2) {
      setCase1(3);
    }
    if (change1 && case1 === 5) {
      setCase1(4);
    }
    if (change1 && case1 === 7) {
      setCase1(4);
    }
  };
  const handleMouseOverField4 = () => {
    if (change2 && case2 === 2) {
      setCase2(1);
    }
    if (change2 && case2 === 11) {
      setCase2(12);
    }
    if (change2 && case2 === 14) {
      setCase2(15);
    }
  };
  const handleMouseOverField5 = () => {
    if (change2 && case2 === 5) {
      setCase2(6);
    }
    if (change2 && (case2 === 8 || case2 === 13 || case2 === 18)) {
      setCase2(7);
    }
    if (change2 && case2 === 3) {
      setCase2(19);
    }
  };
  const handleMouseOverField6 = () => {
    if (change1 && case1 === 4) {
      setCase1(7);
      if (
        (case2 > 4 && case2 < 7) ||
        (case2 > 7 && case2 < 13) ||
        (case2 > 16 && case2 < 18)
      ) {
        setCase2(0);
      }
    }
    if (change1 && case1 === 8) {
      setCase1(7);
    }
    if (change2 && (case2 === 4 || case2 === 6)) {
      setCase2(5);
      if (case1 === 7) {
        setCase1(0);
      }
    }
    if (change2 && (case2 === 7 || case2 === 9)) {
      setCase2(8);
      if (case1 >= 7) {
        setCase1(0);
      }
    }
    if (change2 && case2 === 16) {
      setCase2(17);
      if (case1 >= 7) {
        setCase1(0);
      }
    }
  };
  const handleMouseOverField7 = () => {
    if (change1 && case1 === 9) {
      setCase1(10);
      if (case2 === 2) {
        setCase2(0);
      }
    }
    if (change2 && (case2 === 1 || case2 === 3)) {
      setCase2(2);
      if (case1 === 10) {
        setCase1(0);
      }
    }
    if (change2 && (case2 === 10 || case2 === 12)) {
      setCase2(11);
      if (case1 >= 10) {
        setCase1(0);
      }
    }
    if (change2 && (case2 === 13 || case2 === 15)) {
      setCase2(14);
    }
  };
  const handleMouseOverField8 = () => {
    if (change1 && (case1 === 8 || case1 === 10)) {
      setCase1(9);
      if (
        case2 === 3 ||
        case2 === 13 ||
        case2 === 19 ||
        case2 === 15 ||
        case2 === 14
      ) {
        setCase2(0);
      }
    }

    if (change2 && (case2 === 2 || case2 === 4 || case2 === 19)) {
      setCase2(3);
      if (case1 === 9) {
        setCase1(0);
      }
    }
    if (change2 && (case2 === 9 || case2 === 11)) {
      setCase2(10);
      if (case1 >= 9) {
        setCase1(0);
      }
    }
    if (change2 && (case2 === 7 || case2 === 14 || case2 === 16)) {
      setCase2(13);
      if (case1 >= 9) {
        setCase1(0);
      }
    }
  };
  const handleMouseOverField9 = () => {
    if (change1 && (case1 === 7 || case1 === 9)) {
      setCase1(8);
      if (case2 === 4 || case2 === 9 || case2 === 16) {
        setCase2(0);
      }
    }

    if (change2 && (case2 === 3 || case2 === 5)) {
      setCase2(4);
      if (case1 === 8) setCase1(0);
    }
    if (change2 && (case2 === 8 || case2 === 10)) {
      setCase2(9);
      if (case1 >= 8) setCase1(0);
    }
    if (change2 && (case2 === 13 || case2 === 17)) {
      setCase2(16);
      if (case1 >= 8) setCase1(0);
    }
  };

  useLayoutEffect(() => {
    if (case1 === 0) {
      setField1(style.none);
      setField3(style.none);
    } else if (case1 === 1) {
      setField1(style.orange1);
      setField2(style.none);
      setField3(style.none);
      setField6(style.none);
      setField9(style.none);
      setField8(style.none);
      setField7(style.none);
    } else if (case1 === 2) {
      setField1(style.orange2);
      setField2(style.orange3);
      setField3(style.none);
    } else if (case1 === 3) {
      setField1(style.orange2);
      setField2(style.orange4);
      setField3(style.orange3);
    } else if (case1 === 4) {
      setField1(style.none);
      setField2(style.none);
      setField3(style.orange1);
      setField6(style.none);
      setField9(style.none);
      setField8(style.none);
      setField7(style.none);
    } else if (case1 === 5) {
      setField1(style.none);
      setField2(style.orange2);
      setField3(style.orange3);
    } else if (case1 === 6) {
      setField1(style.orange2);
      setField2(style.orange4);
      setField3(style.orange3);
    } else if (case1 === 7) {
      setField3(style.orange5);
      setField6(style.orange6);
      setField9(style.none);
      setField8(style.none);
      setField7(style.none);
    } else if (case1 === 8) {
      setField3(style.orange5);
      setField6(style.orange7);
      setField9(style.orange6);
      setField8(style.none);
      setField7(style.none);
    } else if (case1 === 9) {
      setField3(style.orange5);
      setField6(style.orange7);
      setField9(style.orange8);
      setField8(style.orange2);
      setField7(style.none);
    } else if (case1 === 10) {
      setField3(style.orange5);
      setField6(style.orange7);
      setField9(style.orange8);
      setField8(style.orange4);
      setField7(style.orange2);
    }
    if (case2 === 0) {
      setField4(style.none);
      setField5(style.none);
      if (case1 === 0 || case1 > 6) {
        setField2(style.none);
      }
    } else if (case2 === 1) {
      setField4(style.lemon1);
      setField5(style.none);
      if (case1 === 10) {
        setField6(style.orange7);
        setField9(style.orange8);
        setField8(style.orange4);
        setField7(style.orange2);
      } else if (case1 === 9) {
        setField6(style.orange7);
        setField9(style.orange8);
        setField8(style.orange2);
        setField7(style.none);
      } else if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
        setField8(style.none);
        setField7(style.none);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
        setField8(style.none);
        setField7(style.none);
      } else if (case1 === 0 || case1 > 6) {
        setField2(style.none);
        setField6(style.none);
        setField9(style.none);
        setField8(style.none);
        setField7(style.none);
      } else {
        setField6(style.none);
        setField9(style.none);
        setField8(style.none);
        setField7(style.none);
      }
    } else if (case2 === 2) {
      setField4(style.lemon2);
      setField7(style.lemon3);
      setField5(style.none);

      if (case1 === 9) {
        setField6(style.orange7);
        setField9(style.orange8);
        setField8(style.orange2);
      } else if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
        setField8(style.none);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
        setField8(style.none);
      } else {
        setField6(style.none);
        setField9(style.none);
        setField8(style.none);
      }
    } else if (case2 === 3) {
      setField4(style.lemon2);
      setField7(style.lemon4);
      setField8(style.lemon5);
      setField5(style.none);
      if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
      } else {
        setField6(style.none);
        setField9(style.none);
      }
    } else if (case2 === 4) {
      setField4(style.lemon2);
      setField7(style.lemon4);
      setField8(style.lemon6);
      setField9(style.lemon5);

      if (case1 === 7) {
        setField6(style.orange6);
      } else {
        setField6(style.none);
      }
    } else if (case2 === 5) {
      setField4(style.lemon2);
      setField7(style.lemon4);
      setField8(style.lemon6);
      setField9(style.lemon7);
      setField6(style.lemon2);
      setField5(style.none);
    } else if (case2 === 6) {
      setField4(style.lemon2);
      setField7(style.lemon4);
      setField8(style.lemon6);
      setField9(style.lemon7);
      setField6(style.lemon8);
      setField5(style.lemon10);
    } else if (case2 === 7) {
      setField5(style.lemon1);
      setField4(style.none);
      if (case1 === 10) {
        setField6(style.orange7);
        setField9(style.orange8);
        setField8(style.orange4);
        setField7(style.orange2);
      } else if (case1 === 9) {
        setField6(style.orange7);
        setField9(style.orange8);
        setField8(style.orange2);
        setField7(style.none);
      } else if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
        setField8(style.none);
        setField7(style.none);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
        setField8(style.none);
        setField7(style.none);
      } else if (case1 === 0 || case1 > 6) {
        setField2(style.none);
        setField6(style.none);
        setField9(style.none);
        setField8(style.none);
        setField7(style.none);
      } else {
        setField6(style.none);
        setField9(style.none);
        setField8(style.none);
        setField7(style.none);
      }
    } else if (case2 === 8) {
      setField5(style.lemon10);
      setField6(style.lemon11);
      setField9(style.none);
      setField8(style.none);
      setField7(style.none);
      setField4(style.none);
    } else if (case2 === 9) {
      setField5(style.lemon10);
      setField6(style.lemon8);
      setField9(style.lemon3);
      setField8(style.none);
      setField7(style.none);
      setField4(style.none);
    } else if (case2 === 10) {
      setField5(style.lemon10);
      setField6(style.lemon8);
      setField9(style.lemon7);
      setField8(style.lemon9);
      setField7(style.none);
      setField4(style.none);
    } else if (case2 === 11) {
      setField5(style.lemon10);
      setField6(style.lemon8);
      setField9(style.lemon7);
      setField8(style.lemon6);
      setField7(style.lemon9);
      setField4(style.none);
    } else if (case2 === 12) {
      setField5(style.lemon10);
      setField6(style.lemon8);
      setField9(style.lemon7);
      setField8(style.lemon6);
      setField7(style.lemon4);
      setField4(style.lemon2);
    } else if (case2 === 13) {
      setField5(style.lemon2);
      setField8(style.lemon3);
      setField7(style.none);
      setField4(style.none);

      if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
      } else if (case1 === 0) {
        setField6(style.none);
        setField9(style.none);
      }
    } else if (case2 === 14) {
      setField5(style.lemon2);
      setField8(style.lemon7);
      setField7(style.lemon9);
      setField4(style.none);
      if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
      } else {
        setField6(style.none);
        setField9(style.none);
      }
    } else if (case2 === 15) {
      setField5(style.lemon2);
      setField8(style.lemon7);
      setField7(style.lemon4);
      setField4(style.lemon2);
      if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
      }
    } else if (case2 === 16) {
      setField5(style.lemon2);
      setField8(style.lemon4);
      setField9(style.lemon5);
      if (case1 === 7) {
        setField6(style.orange6);
      } else {
        setField6(style.none);
      }
    } else if (case2 === 17) {
      setField5(style.lemon2);
      setField8(style.lemon4);
      setField9(style.lemon7);
      setField6(style.lemon2);
    } else if (case2 === 18) {
      setField5(style.lemon3);
      setField2(style.lemon2);
    } else if (case2 === 19) {
      setField5(style.lemon2);
      setField8(style.lemon7);
      setField7(style.lemon4);
      setField4(style.lemon2);
      if (case1 === 8) {
        setField6(style.orange7);
        setField9(style.orange6);
      } else if (case1 === 7) {
        setField6(style.orange6);
        setField9(style.none);
      }
    } else {
      setField1(style.none);
      setField2(style.none);
      setField3(style.none);
      setField4(style.none);
      setField5(style.none);
      setField6(style.none);
      setField7(style.none);
      setField8(style.none);
      setField9(style.none);
    }
  }, [case1, case2]);

  useEffect(() => {
    if ((case1 === 3 || case1 === 6) && (case2 === 6 || case2 === 12)) {
      setPoints(1);
    }
  }, [case1, case2]);

  useEffect(() => {
    document.body.addEventListener("mouseup", () => setChange1(false));
    document.body.removeEventListener("mouseup", () => setChange1(false));
    document.body.addEventListener("mouseup", () => setChange2(false));
    document.body.removeEventListener("mouseup", () => setChange2(false));
  }, [change1, change2]);

  return (
    <Fragment>
      <div className={style.ram}></div>
      <div className={style.level1}>
        <div
          style={{ borderTopLeftRadius: "20px" }}
          onMouseDown={handleMouseDownField1}
          onMouseUp={handleMouseUpField1}
          onMouseOver={handleMouseOverField1}
          className={field1}
        >
          <img src="https://i.imgur.com/i9WyZSe.png" draggable={false} />
        </div>
        <div
          onMouseDown={handleMouseDownField2}
          onMouseOver={handleMouseOverField2}
          className={field2}
        ></div>
        <div
          style={{ borderTopRightRadius: "20px" }}
          onMouseDown={handleMouseDownField3}
          onMouseUp={handleMouseUpField3}
          onMouseOver={handleMouseOverField3}
          className={field3}
        >
          <img src="https://i.imgur.com/i9WyZSe.png" draggable={false} />
        </div>
        <div
          onMouseDown={handleMouseDownField4}
          onMouseUp={handleMouseUpField4}
          onMouseOver={handleMouseOverField4}
          className={field4}
        >
          <img src="https://i.imgur.com/1eFNuv2.png" draggable={false} />
        </div>
        <div
          onMouseDown={handleMouseDownField5}
          onMouseUp={handleMouseUpField5}
          onMouseOver={handleMouseOverField5}
          className={field5}
          unselectable="on"
        >
          <img
            src="https://i.imgur.com/1eFNuv2.png"
            draggable={false}
            unselectable="on"
          />
        </div>
        <div
          onMouseDown={handleMouseDownField6}
          onMouseOver={handleMouseOverField6}
          className={field6}
        ></div>
        <div
          style={{ borderBottomLeftRadius: "20px" }}
          onMouseDown={handleMouseDownField7}
          onMouseOver={handleMouseOverField7}
          className={field7}
        ></div>
        <div
          onMouseDown={handleMouseDownField8}
          onMouseOver={handleMouseOverField8}
          className={field8}
        ></div>
        <div
          style={{ borderBottomRightRadius: "20px" }}
          onMouseDown={handleMouseDownField9}
          onMouseOver={handleMouseOverField9}
          className={field9}
        ></div>
      </div>
    </Fragment>
  );
};

export default Level1;
