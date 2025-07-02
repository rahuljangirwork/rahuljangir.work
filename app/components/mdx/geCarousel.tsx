// // components/GeCarousel.tsx

// import React from "react";
// import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/components/ui/carousel"; // Adjust the import path as needed
// import Image from "next/image"; // Importing the Next.js Image component

// const GeCarousel: React.FC<{ images: string[] }> = ({ images }) => {
//   return (
//     <div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-lg">
//       <Carousel orientation="horizontal">
//         {/* Carousel Previous Button */}
//         <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full" />

//         {/* Carousel Content */}
//         <CarouselContent className="overflow-hidden">
//           {images.map((image, index) => (
//             <CarouselItem key={index}>
//               {/* Use Image from Next.js instead of <img> */}
//               <Image
//                 src={image}
//                 alt={`carousel-image-${index}`}
//                 width={800} // Set the width for optimization
//                 height={450} // Set the height for optimization
//                 className="w-full h-auto rounded-lg" // Optional styling
//                 layout="responsive" // Ensures the image is responsive
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Carousel Next Button */}
//         <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full" />
//       </Carousel>
//     </div>
//   );
// };

// export default GeCarousel;


// components/GeCarousel.tsx
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/components/ui/carousel"; // Adjust the import path as needed
import Image from "next/image"; // Importing the Next.js Image component

const GeCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-lg">
      <Carousel orientation="horizontal">
        {/* Carousel Previous Button */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full" />

        {/* Carousel Content */}
        <CarouselContent className="flex overflow-hidden">
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex-shrink-0 w-full">
              <Image
                src={image}
                alt={`carousel-image-${index}`}
                width={800} // Set the width for optimization
                height={450} // Set the height for optimization
                className="w-full h-auto rounded-lg" // Optional styling
                layout="responsive" // Ensures the image is responsive and fits the container
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Next Button */}
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
};

export default GeCarousel;

