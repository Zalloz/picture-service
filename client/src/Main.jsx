/* eslint-disable */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import Pictures from './components/Pictures.jsx';
import Popup from './components/Popup.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props.data)
    this.state = {
      data: this.props.data,
      popCurr: null,
      popCheck: false,
      prevSpot: null,
    };
    this.rightRef = React.createRef();
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.popCurrStart = this.popCurrStart.bind(this);
    this.currChange = this.currChange.bind(this);
    this.closePop = this.closePop.bind(this);
    this.houseView = this.houseView.bind(this);
  }

  houseView() {
  }
  popCurrStart(e) {
  }

  closePop() {
    const { prevSpot } = this.state;
    this.rightRef.scrollLeft += prevSpot;
    this.setState({
      popCheck: false,
    });
  }
  //method to change the insex of the pop up
  currChange(e) {
    let { popCurr } = this.state;
    const { data } = this.state;
    if (e.target.className === "next") {
      popCurr = Number(popCurr) + 1;
    } else {
      popCurr = Number(popCurr) - 1;
    }
    if (popCurr > 0 && popCurr < data.length) {
      this.setState({
        popCurr,
      });
    }
  }
  //methods to make the picture div scroll on click
  scrollRight() {
    this.rightRef.scrollLeft += 500;
  }

  scrollLeft() {
    this.rightRef.scrollLeft -= 500;
  }

  render() {
    const left = '<';
    const right = '>';
    const { data, popCheck, popCurr } = this.state;
    return (
      <div className="mainDiv">
        <button
          type="submit"
          id="left"
          onClick={this.scrollLeft}
          className="leftButton"
        >
          {left}
        </button>
        <div
          className="mainContainer"
          ref={r => this.rightRef = r}
        >
          <Pictures
            data={data}
            scrollRight={this.scrollRight}
            currChange={this.popCurrStart}
          />
          <Popup
            check={popCheck}
            curr={popCurr}
            photos={data}
            change={this.currChange}
            close={this.closePop}
          />
        </div>
        <button
          type="submit"
          id="right"
          onClick={this.scrollRight}
          className="rightButton"
        >
          {right}
        </button>
      </div>
    );
  }
}

export default App;
