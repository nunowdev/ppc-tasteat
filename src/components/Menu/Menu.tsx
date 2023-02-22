import * as React from "react";
import {
  MenuButton,
  MenuContainer,
  MenuItem,
  MenuItems,
  MenuMain,
  MenuSubtitle,
  MenuText,
  MenuTitle,
  MenuWrapper,
} from "./style";

function Menu() {
  const props = {
    items: [
      {
        title: "Chicken Manjoori",
        price: "15",
        description:
          "Dish relished by all age groups as a starter dish at parties.",
        imageURL:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/623025ffd50003eed995ae8a_popular-dish-image-1.jpg",
      },
      {
        title: "Hotdog",
        price: "10",
        description:
          "Grilled sausage served in the slit of a partially sliced bun.",
        imageURL:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/6230292eb2625583334dddc5_popular-dish-image-2.jpg",
      },
      {
        title: "Fresh Salmon",
        price: "5",
        description:
          "Beat the health blues with our Super Immune Blue Juice Recipe.",
        imageURL:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/623029364048612617d09a1c_popular-dish-image-3.jpg",
      },
      {
        title: "Veg Burger",
        price: "10",
        description: "Burgers may be made from ingredients like beans.",
        imageURL:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/62302941d500036acc95c1df_popular-dish-image-4.jpg",
      },
    ],
  };

  return (
    <MenuContainer>
      <MenuWrapper>
        <MenuMain>
          <MenuSubtitle>MENU</MenuSubtitle>
          <MenuTitle>Popular Dishes</MenuTitle>
          <MenuText>
            There is a game between the waiters in restaurant to see who serves
            the food to <br /> each table fastest. That led to attempting the
            Guinness Record.
          </MenuText>
          <MenuItems>
            {props.items.map((item) => (
              <MenuItem>
                <img src={item.imageURL} alt="" />
                <div className="top_info">
                  <h1>{item.title}</h1>
                  <h1>${item.price}</h1>
                </div>
                <p>{item.description}</p>
              </MenuItem>
            ))}
          </MenuItems>
          <MenuButton>See all dishes</MenuButton>
        </MenuMain>
      </MenuWrapper>
    </MenuContainer>
  );
}

export default Menu;
