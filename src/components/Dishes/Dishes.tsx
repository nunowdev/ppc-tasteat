import * as React from "react";
import { OffersSubtitle } from "../Offers/style";
import {
  DishesContainer,
  DishesLeft,
  DishesRight,
  DishesRightDish,
  DishesRightTitle,
  DishesWrapper,
} from "./style";

function Dishes() {
  return (
    <DishesContainer>
      <DishesWrapper>
        <DishesLeft>
          <OffersSubtitle>MENU</OffersSubtitle>
          <div className="title">Try Our Special Dishes</div>
          <div className="text">
            Every time you perfectly dine with us, it should happy for great
            inspired food in an environment designed with individual touches
            unique to the local area.
          </div>
          <img
            src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229c6da3c9fc2c572c73749_home-menu-image.jpg"
            alt=""
          />
          <button>See all dishes</button>
        </DishesLeft>
        <DishesRight>
          <DishesRightTitle>Starters</DishesRightTitle>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229c84a72e00315336144d5_menu-item-image-1.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Raw Scallops from Erquy</div>
              <div className="dish_description">
                Shuck the scallop to that used for oysters
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$40</div>
          </DishesRightDish>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d373d7d3fa5f722bdd40_menu-item-image-2.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Spring Roll</div>
              <div className="dish_description">
                Add oil to a hot pan spring onion whites
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$20</div>
          </DishesRightDish>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d3823596cc4d67f4acc5_menu-item-image-3.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">French Onion Soup</div>
              <div className="dish_description">
                Wheat flour, apple cider vinegar, bread
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$25</div>
          </DishesRightDish>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d38b50dde73126097b56_menu-item-image-4.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Tomato Bruschetta</div>
              <div className="dish_description">
                Shuck the scallop to that used for oysters
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$30</div>
          </DishesRightDish>
          <DishesRightTitle>Main Dishes</DishesRightTitle>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d396199c0032870b33e8_menu-item-image-5.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Grilled Salmon with Dill Sauce</div>
              <div className="dish_description">
                Brown sugar, salmon fillet, Dijon mustard
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$40</div>
          </DishesRightDish>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d39f50cee31a1d4046b4_menu-item-image-6.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Roast Beef with Vegetable</div>
              <div className="dish_description">
                Green beans, rib eye, olive oil, beef
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$20</div>
          </DishesRightDish>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d3a950dde70c18097cc0_menu-item-image-7.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Marrkesh Vegetetarian Curruy</div>
              <div className="dish_description">
                Sweet potato, eggplant, garbanzo bean
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$25</div>
          </DishesRightDish>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d3b450cee3aea6404866_menu-item-image-8.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Spicy Vegan Potato Curry</div>
              <div className="dish_description">
                Coconut milk, beans, potatoes, curry powder
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$35</div>
          </DishesRightDish>
          <DishesRightTitle>Dessert</DishesRightTitle>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d3bd8e60aa0f30af181b_menu-item-image-9.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Apple Pie with Cream</div>
              <div className="dish_description">
                Whipping cream, egg white, cinnamon
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$15</div>
          </DishesRightDish>
          <DishesRightDish>
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229d3c654e5c12ef38c451b_menu-item-image-10.jpg"
              alt=""
            />
            <div className="dish_info">
              <div className="dish_name">Lemon Meringue Pie</div>
              <div className="dish_description">
                Frozen pie crust, meringue, lemon
              </div>
            </div>
            <div className="dish_line" />
            <div className="price">$30</div>
          </DishesRightDish>
        </DishesRight>
      </DishesWrapper>
    </DishesContainer>
  );
}

export default Dishes;
