import React from "react";

type aboutBoxProps = {
  title: string
}

const aboutBox = ({ title }: aboutBoxProps) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
      </div>
    </>
  )
}

export default aboutBox