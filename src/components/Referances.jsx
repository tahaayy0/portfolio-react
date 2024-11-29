import React from "react"
import { referances } from '../data/referances.js';

const Referances = () => {
    return (
        <figure id="referances"className="md:grid bg-gray-100 p-6 md:p-0 dark:bg-slate-800 grid-cols-4  ">
           <h1 className="text-4xl font-bold text-center col-span-4 mt-10">Referanslarım</h1>
           {referances.map((referance, index) => (
            <div
              key={index}
              className="pt-13 md:p-16 text-center space-y-10" 
            >
              <img
                className="w-16 h-16 rounded-full mx-auto mt-5"
                src={referance.imgUrl}
                alt=""
                width="384"
                height="512"
              />
            
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-500">{referance.name}</div>
                <div className="text-slate-700 dark:text-slate-500">
                  {referance.subTitle}
                </div>
              </figcaption>
              <blockquote>
                <p className="text-sm">{referance.explanation}</p>
              </blockquote>
            </div>
          ))}
        </figure>
      );
      
  
}

export default Referances;