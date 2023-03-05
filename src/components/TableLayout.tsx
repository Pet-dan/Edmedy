import React, { FC, ReactElement, useState } from "react";

type TableLayoutProps = {
  children?: ReactElement[] | ReactElement;
};

const TableLayout: FC<TableLayoutProps> = ({ children }) => {
  return (
    <div className="w-full max-w-full overflow-x-scroll mt-8 xl:pb-0 pb-2 bg-white border-[1.5px] rounded-md">
      {children}
    </div>
  );
};

export const TableHeader: FC<TableLayoutProps> = ({ children }) => {
  return (
    <header className="w-full bg-mainBg flex gap-2 p-3 min-w-fit">
      {children}
    </header>
  );
};

export const SingleTableHeader: FC<{ width: number; text: string }> = ({
  width,
  text,
}) => {
  return (
    <h2
      className="font-bold p-0 m-0 text-darkGray flex-1"
      style={{ minWidth: `${width}px` }}
    >
      {text}
    </h2>
  );
};

export const TableRowsContainer: FC<TableLayoutProps> = ({ children }) => {
  return <main className="w-full flex flex-col bg-white">{children}</main>;
};

export const TableRow: FC<TableLayoutProps> = ({ children }) => {
  return (
    <article className="flex items-center px-3 py-4 gap-2 border-b-[1.5px] min-w-fit">
      {children}
    </article>
  );
};

export const SingleTableRowItem: FC<{
  children?: ReactElement | ReactElement[];
  width: number;
}> = ({ children, width }) => {
  return (
    <span
      className="block text-[15px] flex-1"
      style={{ minWidth: `${width}px` }}
    >
      {children}
    </span>
  );
};

export default TableLayout;
