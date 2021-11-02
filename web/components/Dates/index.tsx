import React from 'react';
import styled from 'styled-components';
import {Facebook, Twitter, LinkedIn} from '../SocialComponents';
import Block from '@components/Layout/Block';
import {Button} from '@components/Button';
import {fontWeight, fontFamily, fontSize} from '../../themes/fn';

export interface DatesProps {
  startDate: string;
  endDate?: string;
  showTime?: boolean;
  showTimeZone?: boolean;
}

/*** STYLING ***/

const Wrapper = styled.div`
  ${fontSize('sm')}
  ${fontFamily('body')};
  ${fontWeight('bold')};
  display: inline;
`;

const DateSpan = styled.span`
  span {
    ${fontWeight('regular')};
  }
`;

export const Dates = ({
  startDate,
  endDate,
  showTime,
  showTimeZone,
}: DatesProps) => {
  const renderDateString = (dateIsoString: string): JSX.Element => {
    const dateObj = dateIsoString ? new Date(dateIsoString) : new Date();
    const year = dateObj.getFullYear();
    const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
      dateObj,
    );
    const day = dateObj.getDate();
    const time = dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    return (
      <DateSpan>
        {month} {day}
        <span>,</span> {year}{' '}
        {showTime && (
          <>
            <span>at</span> {time}
          </>
        )}
      </DateSpan>
    );
  };
  return (
    <Wrapper>
      {renderDateString(startDate)}
      {endDate && <> to {renderDateString(endDate)}</>}{' '}
      {showTime && showTimeZone && 'Eastern'}
    </Wrapper>
  );
};
