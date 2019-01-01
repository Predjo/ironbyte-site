import React, { Component } from "react";
import styled from "styled-components";
import anime from "animejs";

import Title from "./Title";
import SubTitle from "./SubTitle";

import { renderSplitString } from "../utils/ReactUtils";

interface TitleProps {
  visible?: boolean;
}

const TitleLetter = styled.div`
  > span {
    opacity: ${(props: TitleProps) => (props.visible ? 1 : 0)};
  }
`;

const TitleNumber = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  letter-spacing: 0.33em;
  margin-top: 0.2em;
  > span {
    opacity: 0;
    font-size: 1em !important;
  }
`;

const HiddenSubTitle = styled(SubTitle)`
  > span {
    opacity: ${(props: TitleProps) => (props.visible ? 1 : 0)};
  }
`;

const Cursor = styled.div`
  display: inline-block;
  border-left: 3px solid white;
  height: 80%;
  position: absolute;
  left: 0;
  top: 10%;
  opacity: 0;
`;

export interface Props {
  title: string;
  subTitle: string;
}

export interface State {}

let animationDone: boolean = false;

export default class MainTitle extends Component<Props, State> {
  private titleRef = React.createRef<HTMLHeadingElement>();
  private titleLettersRef = React.createRef<HTMLDivElement>();
  private titleNumbersRef = React.createRef<HTMLDivElement>();
  private subTitleLettersRef = React.createRef<HTMLDivElement>();
  private cursorRef = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    if (!animationDone) {
      this.animateTitle();
      animationDone = true;
    }
  }

  public animateTitle() {
    const cursor = this.cursorRef.current;
    // const title = this.titleRef.current;
    const titleLetters = this.titleLettersRef.current;
    const titleNumbers = this.titleNumbersRef.current;
    const subTitleLetters = this.subTitleLettersRef.current;

    const titleNumberList = Array.from(titleNumbers!.childNodes);
    const titleLetterList = Array.from(titleLetters!.childNodes);
    const subTitleLetterList = Array.from(subTitleLetters!.childNodes);

    anime
      .timeline({ loop: false })

      .add({
        targets: cursor,
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 500
      })

      .add({
        targets: cursor,
        opacity: [0, 1, 0, 1],
        easing: "easeOutExpo",
        duration: 2000
      })

      .add({
        targets: cursor,
        translateX: [0, titleNumbers!.offsetWidth || 0],
        easing: "easeOutExpo",
        duration: 800,
        delay: 100
      })

      .add({
        targets: titleNumberList,
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        offset: "-=700",
        duration: 700,
        delay: (_el, i) => {
          return 30 * (i + 1);
        }
      })

      .add({
        targets: cursor,
        translateX: [titleNumbers!.offsetWidth || 0, 0],
        easing: "easeOutExpo",
        duration: 700,
        delay: 200
      })

      .add({
        targets: titleNumberList.reverse(),
        translateX: [40, 0],
        translateZ: 0,
        opacity: [1, 0],
        easing: "easeOutExpo",
        offset: "-=775",
        duration: 700,
        delay: (_el, i) => {
          return 30 * (i + 1);
        }
      })

      .add({
        targets: titleLetterList.reverse(),
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        offset: "-=875",
        duration: 600,
        delay: (_el, i) => {
          return 20 * (i + 1);
        }
      })

      .add({
        targets: cursor,
        opacity: [1, 0],
        easing: "easeOutExpo"
      })

      .add({
        targets: subTitleLetterList,
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        offset: "-=775",
        duration: 400,
        delay: (_el, i) => {
          return 30 * (i + 1);
        }
      });
  }

  public render() {
    const { subTitle } = this.props;

    return (
      <>
        <Title innerRef={this.titleRef}>
          <Cursor innerRef={this.cursorRef} />

          <TitleLetter innerRef={this.titleLettersRef} visible={animationDone}>
            {renderSplitString("IronByte")}
          </TitleLetter>

          <TitleNumber innerRef={this.titleNumbersRef}>
            {renderSplitString("00011010")}
          </TitleNumber>
        </Title>

        <HiddenSubTitle
          visible={animationDone}
          innerRef={this.subTitleLettersRef}
        >
          {renderSplitString(subTitle)}
        </HiddenSubTitle>
      </>
    );
  }
}
