import React from "react";
import Image from "next/image";

const Table = (props) => {
  const { skl } = props;
  return (
    <>
      <td className="py-3 px-6">{skl.file_01}</td>
      <td className="py-3 px-6">
        {skl.file_02_year ? (
          skl.file_02_year
        ) : (
          <Image src={skl.file_02} width={50} height={30} />
        )}
      </td>
    </>
  );
};
export default Table;
