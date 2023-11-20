import React, { useState } from "react";
import "./App.css";

import Article from "./components/Article/Article.js";

function App() {
  const [page, setPage] = useState("");

  function onContributeClick() {
    setPage("contribute");
  }
  function onAboutClick() {
    setPage("about");
  }

  function onBlogClick() {
    setPage("blog");
    // Challenge #1 goes here....
  }

  return (
    <div className='App'>
      <div className='App-navigation'>
        <h1 className='App-title'>Allergy Blog</h1>
        <a onClick={() => setPage("")}>Welcome</a>
        <a onClick={onAboutClick}>About</a>
        <a onClick={onBlogClick}>Blog</a>
        <a onClick={onContributeClick}>Contribute</a>
      </div>

      <div className='App-mainContent'>
        {page === "" ? (
          <div>
            <h1>Welcome</h1>
            <p>Click on a link to learn more.</p>
          </div>
        ) : null}
        {page === "contribute" ? (
          <div>
            <h1>GIVE US MONEY</h1>
            <p>Click on a link to learn more.</p>
          </div>
        ) : null}

        {page === "about" ? (
          <div>
            <h1>About</h1>
            <p>
              More than 50 million Americans have an allergy of some kind. Food
              allergies are estimated to affect 4 to 6 percent of children and 4
              percent of adults, according to the Centers for Disease Control
              and Prevention.
            </p>

            <p>
              Food allergy symptoms are most common in babies and children, but
              they can appear at any age. You can even develop an allergy to
              foods you have eaten for years with no problems. Learn more about
              the types of food allergies.
            </p>
          </div>
        ) : null}

        {page === "blog" ? (
          <div>
            <h1>Blog</h1>

            <Article title='Peanut' image='https://i.imgur.com/b6jayEW.png'>
              <p>
                A peanut allergy is very common and could cause a serious and
                possibly fatal reaction. You should avoid any kind of nut, even
                artificial. Also be mindful of dishes that may be cooked in
                peanut oil.
              </p>
              <p>
                Some unexpected sources of peanuts: Chili, Egg rolls, Hot sauce,
                Pesto, Gravy, Salad dressing, Pancakes, Specialty pizzas, Some
                vegetarian food products advertised as meat substitutes
              </p>
            </Article>

            <Article title='Milk' image='https://i.imgur.com/Fy8H565.png'>
              <p>
                A milk allergy is different than lactose intolerance. Cow milk
                and products should be avoided, as reactions can be mild, such
                as hives, and sometimes life threatening. It is also wise to
                avoid milk from all other animals.
              </p>
              <p>
                Some unexpected sources of milk: Baked goods, Luncheon meat, hot
                dogs, sausages Nondairy products (look for casein), Shellfish is
                sometimes dipped in milk to mask the odor, Restaurants sometimes
                put butter on steaks for flavor
              </p>
            </Article>
          </div>
        ) : null}
      </div>

      <div className='App-sidebar'>
        <img src='https://i.imgur.com/9iZAYQu.png' alt='steth' />
        <p>
          Do you have food allergies? Do you know someone with food allergies,
          or prepare food for people who might have allergies? Knowing which
          allergies to watch out for is essential for keeping people healthy and
          averting possibly life-threatening disasters.
        </p>
      </div>
    </div>
  );
}

export default App;
