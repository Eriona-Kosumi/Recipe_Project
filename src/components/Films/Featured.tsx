import { useState } from "react";
import { useFilmsContext } from "../../lib/context/FilmsContext/FilmsContext";

interface Props{
  featured: boolean;
  id: string;
}

const Featured = ({featured, id}: Props) => {
  const {toggleFeatured} = useFilmsContext()
  return (
    <span onClick={() => {toggleFeatured(id)}} className="ui right corner label">
      <i className={`star icon ${featured ? 'yellow' : 'empty'}`} />
    </span>
  )
}

export default Featured