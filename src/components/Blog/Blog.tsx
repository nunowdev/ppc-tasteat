import * as React from "react";
import {
  BlogContainer,
  BlogMain,
  BlogNew,
  BlogNewBottom,
  BlogNews,
  BlogNewText,
  BlogNewTitle,
  BlogSubtitle,
  BlogText,
  BlogTitle,
  BlogWrapper,
} from "./style";

function Blog() {
  return (
    <BlogContainer>
      <BlogWrapper>
        <BlogMain>
          <BlogSubtitle>Blog</BlogSubtitle>
          <BlogTitle>Be First Who Read News</BlogTitle>
          <BlogText>
            Explore the latest stories about our dishes, offers, <br /> events
            and future plans here.
          </BlogText>
          <BlogNews>
            <BlogNew>
              <img
                src="https://assets.website-files.com/6235b120aa85b314a4394449/6238133a22283a9533a3f466_blog-thumbnail-image-1.jpg"
                alt=""
              />
              <BlogNewBottom>
                <div className="info">
                  <BlogSubtitle>COOKING</BlogSubtitle>
                  <BlogSubtitle className="second">MARCH 19, 2022</BlogSubtitle>
                </div>
                <BlogNewTitle>
                  The Legend of US Cuisine: The Story of Hungry People
                </BlogNewTitle>
                <BlogNewText>
                  Capitalize on low-hanging fruit to identify a ballpark value
                  added matrix economically and the creative activity to beta
                  test override the food quality.
                </BlogNewText>
              </BlogNewBottom>
            </BlogNew>
            <BlogNew>
              <img
                src="https://assets.website-files.com/6235b120aa85b314a4394449/62381357a53e5865c549ca38_blog-thumbnail-image-2.jpg"
                alt=""
              />
              <BlogNewBottom>
                <div className="info">
                  <BlogSubtitle>DELICIOUS</BlogSubtitle>
                  <BlogSubtitle className="second">MARCH 19, 2022</BlogSubtitle>
                </div>
                <BlogNewTitle>
                  The Most Popular Delicious Food of Mediterranean Cuisine{" "}
                </BlogNewTitle>
                <BlogNewText>
                  Strategies on low-hanging fruit to identify a ballpark value
                  added matrix economically and the creative activity to beta
                  test override the food quality.
                </BlogNewText>
              </BlogNewBottom>
            </BlogNew>
          </BlogNews>
        </BlogMain>
      </BlogWrapper>
    </BlogContainer>
  );
}

export default Blog;
