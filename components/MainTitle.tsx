
import React, { Component } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

import Title from './Title';
import SubTitle from './SubTitle';

import { renderSplitString } from '../utils/ReactUtils';

interface TitleProps {
  visible?: boolean;
}

const HiddenTitle = Title.extend`
  > span {
    opacity: ${ (props: TitleProps) => props.visible ? 1 : 0 };
  }
`;

const TitleNumber = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  letter-spacing: 0.4em;
  > span {
    opacity: 0;
  }
`;

const HiddenSubTitle = SubTitle.extend`
  > span {
    opacity: ${ (props: TitleProps) => props.visible ? 1 : 0 };
  }
`;

const Cursor = styled.div`
  display: inline-block;
  border-left: 3px solid white;
  height: 100%;
  position: absolute;
  opacity: 0;
`;

export interface Props {
  title: string;
  subTitle: string;
}

export interface State {}

let animationDone: boolean = false;

export default class MainTitle extends Component<Props, State> {

  title?: HTMLHeadingElement;
  titleLetters: Array<HTMLSpanElement>;
  titleNumbers: Array<HTMLSpanElement>;
  subTitle?: HTMLHeadingElement;
  subTitleLetters: Array<HTMLSpanElement>;
  cursor?: HTMLDivElement;

  constructor(props: Props) {
    super(props);

    this.titleLetters = [];
    this.titleNumbers = [];
    this.subTitleLetters = [];
  }

  componentDidMount() {
    if (!animationDone) {
      this.animateTitle();
      animationDone = true;
    }
  }

  animateTitle () {

    const { cursor, title, titleLetters, titleNumbers, subTitleLetters } = this;

    anime.timeline({ loop: false })

      .add({
        targets: cursor,
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 500,
      })

      .add({
        targets: cursor,
        opacity: [0, 1, 0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
      })

      .add({
        targets: cursor,
        translateX: [0, title.offsetWidth - 35],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
      })

      .add({
        targets: titleNumbers,
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        offset: '-=775',
        duration: 800,
        delay: (_el, i) => {
          return 34 * (i + 1);
        },
      })

      .add({
        targets: cursor,
        translateX: [title.offsetWidth - 35, 0],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 200,
      })

      .add({
        targets: titleNumbers.reverse(),
        translateX: [40, 0],
        translateZ: 0,
        opacity: [1, 0],
        easing: 'easeOutExpo',
        offset: '-=775',
        duration: 700,
        delay: (_el, i) => {
          return 30 * (i + 1);
        },
      })

      .add({
        targets: titleLetters.reverse(),
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        offset: '-=875',
        duration: 600,
        delay: (_el, i) => {
          return 20 * (i + 1);
        },
      })

      .add({
        targets: cursor,
        opacity: [1, 0],
        easing: 'easeOutExpo',
      })

      .add({
        targets: subTitleLetters,
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        offset: '-=775',
        duration: 400,
        delay: (_el, i) => {
          return 30 * (i + 1);
        },
      });
  }

  render () {

    const { subTitle } = this.props;

    return (
      <>
        <HiddenTitle innerRef = { (ref: HTMLHeadingElement) => this.title = ref } visible = { animationDone } >
          <Cursor innerRef = { (ref: HTMLDivElement) => this.cursor = ref } />
          { renderSplitString('IronByte', (ref, index) => this.titleLetters[index] = ref) }
          <TitleNumber>{ renderSplitString('10010111', (ref, index) => this.titleNumbers[index] = ref) }</TitleNumber>
         </HiddenTitle>

        <HiddenSubTitle innerRef = { (ref: HTMLHeadingElement) => this.subTitle = ref } visible = { animationDone }>
          { renderSplitString(subTitle, (ref, index) => this.subTitleLetters[index] = ref) }
         </HiddenSubTitle>
      </>
    );
  }
}
