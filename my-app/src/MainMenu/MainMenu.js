import React from "react";
import CreateWP from "./CreateWP";
export default function MainMenu() {
  return (
    <div>
      <h1>Добро пожаловать в систему оформления нарядов-допусков</h1>
      <ul className="MainMenuTab">
        <li>CreateWP()</li>
        <li>Проверить статус наряда-допуска</li>
        <li>Список нарядов-допусков в работе</li>
        <li>Электронный журнал нарядов-допусков</li>
      </ul>
    </div>
  );
}
