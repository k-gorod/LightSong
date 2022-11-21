import Link from "next/link";
import React from "react";

const SongList = () => {
  return (
    <div>
      <Link href="/">Initial Page</Link>
    </div>
  )
}

export default React.memo(SongList);