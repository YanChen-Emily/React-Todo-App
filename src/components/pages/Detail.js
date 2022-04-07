import React, { useState } from "react";
import { useParams } from 'react-router-dom'

export default function Detail(){
  const { task } = useParams();
  return (
    <p>I am {task} page</p>
  ) 
}
