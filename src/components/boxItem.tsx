import React from "react";

type boxItemProps = {
  name: string
  image: string
}

const boxItem = ({name, image}: boxItemProps) => {
  return (
    <div className="flex flex-row">
      <img src={image} />
      <h1>{name}</h1>
    </div>
  )
}

export default boxItem;
