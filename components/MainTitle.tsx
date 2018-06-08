
import React, { Component } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

import { renderSplitString } from '../utils/ReactUtils';

const Title = styled.h1`
  font-size: 8rem;
  letter-spacing: 0.3em;
  font-family: Cebo;
  color: white;
  margin-bottom: 30px;
  height: 7rem;
  position: relative;
  display: inline-block;

  > span {
    opacity: 0;
  }

  > span:not(:first-of-type):not(:nth-of-type(5)) {
    font-size: 0.8em;
  }
`;

const SubTitle = styled.h4`
  font-size: 1.3rem;
  letter-spacing: 0.45em;
  font-family: Cebo;
  margin-top: 0px;
  height: 1.5rem;

  > span {
    opacity: 0;
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

export default class MainTitle extends Component<Props, State> {

  title?: HTMLHeadingElement;
  titleLetters: Array<HTMLSpanElement>;
  subTitle?: HTMLHeadingElement;
  subTitleLetters: Array<HTMLSpanElement>;
  cursor?: HTMLDivElement;

  constructor(props: Props) {
    super(props);

    this.titleLetters = [];
    this.subTitleLetters = [];
  }

  componentDidMount() {

    const { cursor, title, titleLetters, subTitleLetters } = this;

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
        translateX: [0, title.offsetWidth],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
      })

      .add({
        targets: titleLetters,
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
        duration: 600,
        delay: (_el, i) => {
          return 34 * (i + 1);
        },
      });
  }

  render () {

    const { subTitle } = this.props;

    return (
      <>
        <Title innerRef = { (ref: HTMLHeadingElement) => this.title = ref }>
          <Cursor innerRef = { (ref: HTMLDivElement) => this.cursor = ref } />
          { renderSplitString('IronByte', (ref, index) => this.titleLetters[index] = ref) }
         </Title>
        <SubTitle innerRef = { (ref: HTMLHeadingElement) => this.subTitle = ref }>
          { renderSplitString(subTitle, (ref, index) => this.subTitleLetters[index] = ref) }
         </SubTitle>
      </>
    );
  }
}
