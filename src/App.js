import { useState } from "react";

import "./App.css";

let list = [
  {
    name: "Нямушка",
    title: "Сказочное заморское яство",
    intro: "с фуа-гра",
    count: "10 порций",
    present: "мышь в подарок",
    total: "0,5",
    start: "Чего сидишь? Порадуй котэ,",
    action: "Печень утки разварная с артишоками.",
    end: "Печалька, с фуа-гра закончился.",
    amount: 1,
    buy: true,
  },
  {
    name: "Нямушка",
    title: "Сказочное заморское яство",
    intro: "с рыбой",
    count: "40 порций",
    present: "2 мыши в подарок",
    total: "2",
    start: "Чего сидишь? Порадуй котэ,",
    action: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    end: "Печалька, с рыбой закончился.",
    amount: 2,
    buy: false,
  },
  {
    name: "Нямушка",
    title: "Сказочное заморское яство",
    intro: "с курой",
    count: "100 порций",
    present: "5 мышей в подарок заказчик доволен",
    total: "5",
    start: "Чего сидишь? Порадуй котэ,",
    action: "Филе из цыплят с трюфелями в бульоне.",
    end: "Печалька, с курой закончился.",
    amount: 0,
    buy: true,
  },
];



function App() {
  let cats = list.map((item) => {
    let classBuy = "cats__buy";
    let classIntro = "cats__intro";
    let classWT = "cats-wt";
    let classContainer = "cats__container";
    let classBG = "cats__bg";
    let classSpan = "cats__span";
    let action;
  
    let onBuy = () => {
      console.log(item.buy);
      item.buy = !item.buy;
    };
  
    if (item.buy === false && item.amount > 0) {
      action = item.start;
      classBG += '  cats__bg--hide';
    } else if (item.buy === true && item.amount > 0) {
      action = item.action;
      classBuy += " cats__buy--hide";
      classIntro += " cats__intro--border";
      classWT += " cats-wt--color";
      classBG += '  cats__bg--hide';
      classSpan += ' cats__span--buy';
    } else {
      action = item.end;
      classBuy += " cats__buy--hide";
      classIntro += " cats__intro--end";
      classWT += " cats-wt--end";
      classContainer += " cats__container--end";
      classSpan += ' cats__span--end';
    }
  
    return (
      <li className="cats__item" key={item.total}>
        <div className={classIntro} onClick={onBuy}>
        <span className={classSpan}></span>
          <div className={classContainer}>
            <p className="cats__title">{item.title}</p>
            <h2 className="cats__name">{item.name}</h2>
            <p className="cats__with">{item.intro}</p>
            <div className="cats-present">
              <p className="cats-present__count">{item.count}</p>
              <p className="cats-present__present">{item.present}</p>
            </div>
          </div>
          <div className={classWT}>
            <p className="cats-wt__total">{item.total}</p>
            <span className="cats-wt__name">кг</span>
          </div>
          <div className={classBG}></div>
        </div>
        <p className="cats__action">
          {" "}
          {action}
          <span className={classBuy} onClick={onBuy}>
            {" "}
            купи
          </span>
        </p>
      </li>
    );
  });
  
  return (
    <main className="main container">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <section className="cats">
        <ul className="cats__list">{cats}</ul>
      </section>
    </main>
  );
}

export default App;
