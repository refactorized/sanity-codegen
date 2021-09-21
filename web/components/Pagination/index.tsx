import styled from 'styled-components';
import React from 'react';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  pageSelected: (selected) => null;
  pageBufferCount?: number;
}

const LeftChevron = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RightChevron = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PaginationContainer = styled.div`
  display: flex;
`;

const PageElement = styled.div`
  border-radius: 4px;
  padding: 6px;
  width: 32px;
  height: 32px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.body};
  color: #000;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};
  padding-top: ${(props) => props.paddingTop ?? '6px'};
`;

const PageSelectedElement = styled(PageElement)`
  background: #1b76b0;
  color: #fff;
`;

const noOp = () => {};

export const Pagination = ({
  totalPages,
  currentPage,
  pageBufferCount = 2,
  pageSelected,
}: PaginationProps): JSX.Element => {
  const navForward = () => {
    if (currentPage < totalPages) {
      pageSelected(currentPage + 1);
    }
  };

  const navBackward = () => {
    if (currentPage > 1) {
      pageSelected(currentPage - 1);
    }
  };

  const getPagerCellElement = (text, isCurrent, clickable) => {
    return isCurrent ? (
      <PageSelectedElement key={text}>{text}</PageSelectedElement>
    ) : (
      <PageElement
        key={text}
        onClick={(e) => (clickable ? pageSelected(text) : noOp())}
        clickable={clickable}
      >
        {text}
      </PageElement>
    );
  };

  const generatePagerCells = ({
    totalPages,
    currentPage,
    pageBufferCount,
  }: PaginationProps) => {
    const cells = Array();

    if (
      currentPage > pageBufferCount + 1 &&
      totalPages > pageBufferCount * 2 + 1
    ) {
      cells.push(getPagerCellElement(1, false, true));
      cells.push(getPagerCellElement('...', false, false));
    }

    for (
      let index = Math.max(currentPage - pageBufferCount, 1);
      index <= currentPage + pageBufferCount && index <= totalPages;
      index++
    ) {
      cells.push(getPagerCellElement(index, index == currentPage, true));
    }

    if (
      currentPage < totalPages - pageBufferCount &&
      totalPages > pageBufferCount * 2 + 1
    ) {
      cells.push(getPagerCellElement('...', false, false));
      cells.push(getPagerCellElement(totalPages, false, true));
    }

    return cells;
  };

  const pages = generatePagerCells({
    totalPages,
    currentPage,
    pageBufferCount,
    pageSelected,
  });

  return (
    <PaginationContainer key={currentPage}>
      <PageElement
        onClick={(e) => navBackward()}
        clickable={currentPage > 1}
        paddingTop={'8px'}
      >
        <LeftChevron />
      </PageElement>
      {pages}
      <PageElement
        onClick={(e) => navForward()}
        clickable={currentPage < totalPages}
        paddingTop={'8px'}
      >
        <RightChevron />
      </PageElement>
    </PaginationContainer>
  );
};
