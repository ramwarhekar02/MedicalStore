import React from "react";

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Orange Blob */}
      <div className="absolute left-[-120px] bottom-[-100px] w-[400px] h-[300px] bg-orange-300 opacity-60 rounded-full blur-2xl animate-blob1" />
      {/* Blue Blob */}
      <div className="absolute right-[-120px] top-[-100px] w-[350px] h-[350px] bg-indigo-400 opacity-60 rounded-full blur-2xl animate-blob2" />
    </div>
  );
} 