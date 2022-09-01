import React, { useEffect } from "react";
import style from "./paginado.module.css";
import { useState } from "react";

const pageNumberLimit = 10;

export default function Paginado({
  pagActual,
  celulares,
  itemsPerPage,
  setPagActual,
}) {
  const [maxPageNumberList, setMaxPageNumberList] = useState(10);
  const [minPageNumberList, setMinPageNumberList] = useState(0);

  useEffect(() => {
    setPagActual(1);
    setMaxPageNumberList(10);
    setMinPageNumberList(0);
  }, [celulares])

  const handleClick = (event) => {
    setPagActual(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(celulares.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextbtn = () => {
    setPagActual(pagActual + 1);

    if (pagActual + 1 > maxPageNumberList) {
      setMaxPageNumberList(maxPageNumberList + pageNumberLimit);
      setMinPageNumberList(minPageNumberList + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setPagActual(pagActual - 1);

    if ((pagActual - 1) % pageNumberLimit == 0) {
      setMaxPageNumberList(maxPageNumberList - pageNumberLimit);
      setMinPageNumberList(minPageNumberList - pageNumberLimit);
    }
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberList + 1 && number > minPageNumberList) {
      return (
        <li key={number} id={number} onClick={(e) => handleClick(e)} className={pagActual == number ? style.active : null}>{number}</li>
      );
    } else return null;
  });

  return (
    <div>
      <ul className={style.pageNumbers}>
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={pagActual === pageNumbers[0] ? true : false}
          >
            PREV
          </button>
        </li>
        {renderPageNumbers}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={
              pagActual === pageNumbers[pageNumbers.length - 1] ? true : false
            }
          >
            NEXT
          </button>
        </li>
      </ul>
    </div>
  );
}
