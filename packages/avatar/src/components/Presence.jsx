// @flow
import React, { PureComponent } from 'react';
import { Inner, Outer } from '../styled/Icon';
import { DEFAULT_BORDER_COLOR } from '../styled/constants';
import getPresenceSVG from '../helpers/getPresenceSVG';
import type { ChildrenType, PresenceType, SizeType } from '../types';

type Props = {
  /** Used to override the default border color of the presence indicator.
  Accepts any color argument that the border-color CSS property accepts. */
  borderColor?: string,
  /** Content to use as a custom presence indicator (usually not required if
  consuming Presence separate to Avatar). */
  children?: ChildrenType,
  /** Content to use as a custom presence indicator (usually not required if
  consuming Presence separate to Avatar). */
  presence?: PresenceType,
  /** Defines the size of the presence. */
  size?: SizeType,
};

export default class Presence extends PureComponent {
  props: Props; // eslint-disable-line react/sort-comp

  static defaultProps = {
    borderColor: DEFAULT_BORDER_COLOR,
  }

  render() {
    const { borderColor, children, presence, size } = this.props;

    return (
      <Outer size={size} bgColor={borderColor}>
        <Inner>
          {children || (presence && getPresenceSVG(presence))}
        </Inner>
      </Outer>
    );
  }
}
