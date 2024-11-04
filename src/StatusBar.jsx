import React from 'react';

function StatusBar() {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/671191463749199134b526f11bc9947bc7f0a384899378f74e938bc7e900d12c?placeholderIfAbsent=true&apiKey=61a9c12b76954fb69536b882d80c0047", alt: "Signal strength", className: "object-contain shrink-0 aspect-[1.5] fill-black w-[18px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0013387c729707276b941b7e03831aa43b57e5c888f8da02a2e90814850001db?placeholderIfAbsent=true&apiKey=61a9c12b76954fb69536b882d80c0047", alt: "Wi-Fi status", className: "object-contain shrink-0 aspect-[1.42] fill-black w-[17px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b3a5db870ebef660b7c8e156a68754fa426b3eb8d06c9c85538d103c3918f2b?placeholderIfAbsent=true&apiKey=61a9c12b76954fb69536b882d80c0047", alt: "Battery status", className: "object-contain shrink-0 aspect-[2.08] w-[27px]" }
  ];

  return (
    <div className="flex flex-1 shrink gap-2 justify-center items-center h-full basis-0">
      <div className="flex gap-2 items-start self-stretch my-auto">
        {icons.map((icon, index) => (
          <img key={index} loading="lazy" src={icon.src} alt={icon.alt} className={icon.className} />
        ))}
      </div>
    </div>
  );
}

export default StatusBar;