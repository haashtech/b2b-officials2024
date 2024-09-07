import { cn } from '@/lib/utils';
import React from 'react';
import { Link } from 'react-router-dom';

export function CardContainer({ className, title, image, description, isTrue,index }) {
    const isLastCard = index === 4;
  return (
    <CardContent className={className}>
      <div  className={`relative flex select-none items-start justify-start w-full space-y-4 ${isLastCard ? "flex-row-reverse items-start  justify-around" : ""}`}>
        {/* Image */}
        <span className='absolute bottom-0 right-0 font-bold text-8xl text-textMain opacity-5'>
            0{index+1}
        </span>
        <div className={`h-full  ${isTrue ? "sm:translate-y-10" :"sm:-translate-y-14"} `}>
          <img
            src={image}
            alt={title}
            className={`w-32 h-44 object-contain mx-auto ${isLastCard ? "ml-4" : ""}`}
            draggable={false}
          />
        </div>

        {/* Title & Description */}
        <div className={`space-y-2 ${isLastCard ? "text-left float-left" : ""}`}>
             <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Arrow */}
        <button className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center group">
          <Link to='/' className='group-hover:-rotate-45 duration-500 transition-all'>&#8594;</Link>
        </button>
        </div>
       
      </div>
    </CardContent>
  );
}

export function CardContent(props) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center justify-center w-full h-full p-3 rounded-xl shadow-lg bg-[#FAEEFF]/85 backdrop-blur-md filter",
        props.className
      )}
    />
  );
}
