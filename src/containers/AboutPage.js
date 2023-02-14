import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

export default class AboutPage extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="ui container" style={{ margin: "53px" }}>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            What is this project about?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              This is the react.js-based project . In this project, I have built
              a basic website. This is an e-commerce site, so it has some
              features like adding to cart, removing from cart, and also a
              feature that allows you to delete products from the home page
              (that feature does not make any sense, but we still have it).
              There is also an "add product" page from where you can upload your
              product (this also doesn't make sense). When you add a product to
              the cart, you will notice an improvement in the header cart
              button. It will show you how many products are in the cart
              currently. And the total amount of the cart , We have created a
              checkout page that has an input box for billing and that will also
              show you how much the total has been and the products that you
              have selected with their prices for purchase.Every product has two
              quantity in stock available, which you can order. If you try to
              add more than two quantity in the cart, it will give an
              Notification("product out of stock"), and in the cart there is a
              plus and minus button available which will add the product and
              subtract the product. If you go below zero, the product will be
              removed from the cart directly. The total price will be calculated
              according to the quantity available in the cart. On the check out
              page, you can see how many products there are and how much each
              product costs, as well as the total price. so this is all about
              the project.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Who created this fantastic project? 
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Hello, my name is Niketan Wadaskar, and I created this project. I
              am a front-end developer. I have completed my reactJS, html, CSS,
              and Javascript skills from Coding Ninjas. It was a really great
              experience to learn from such a great team. I have also done my
              DSA training from Coding Ninjas. I have also developed some
              projects that you can have a look into.{" "}
              <a
                href="https://github.com/nikuwadaskar"
                target={"_blank"}
                rel="noreferrer"
              >
                This is my github repository link.
              </a>{" "}
              You can have a look I have worked on over thirteen different
              projects and will be working on more. I am a quick learner. I like
              to try new things. This is my thing. So this is all about me You
              can connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/niketan-wadaskar-3188321a0/"
                target={"_blank"}
                rel="noreferrer"
              >
                LinkedIn; just click here
              </a>{" "}
              and we can be friends, or you can be my boss. Who knows? See you
              later. 
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            So what tech stack did I use? Want to know ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              So I built this site with the ReactJS 18 version. For styling, I
              used semantic UI and I added some personal CSS as well to give it
              a better look. For cart maintenance, I used Redux, which basically
              helps me to maintain and share the states. For API calls, I used
              the Axios dependency. Also, to use the API call as a shareble
              property, I used the redux middelewere. So yeah, all this is about
              Project Tech Stack.{" "}
              <a
                href="https://github.com/nikuwadaskar/Ecommerce-React-app-ShoppingVilla-Practice"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                You can have a look at the codes, just click here.
              </a>
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    );
  }
}
