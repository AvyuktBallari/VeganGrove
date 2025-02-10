const GamblingLossWarning = () => {
    return (
      <div className="mx-auto px-8 font-cute bg-[#e2e8f0] text-[black] py-16 md:py-32 text-center">
        <span className="font-cute border p-2 rounded-xl mb-5">THE PROBLEM</span>
        <h2 className="max-w-5xl mt-5 mx-auto font-semibold text-4xl md:text-5xl mb-6 md:mb-8">
          80% of consumers eat
          <span className="bg-gradient-to-r from-red-500 via-red-500 to-red-500 bg-clip-text text-transparent">
          ‎ artifical ingredients.
          </span>
          <div></div>
          <span className="mt-5">Are you one of them?</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
            We offer a wide range of organic, locally-sourced, and sustainable meals that are free from artificial ingredients. 
            Our meals are made fresh daily and delivered right to your doorstep.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
          <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
            <span className="text-6xl">☣️</span>
            <h3 className="font-bold">Unhealthy Food</h3>
          </div>
          <ArrowIcon className="shrink-0 w-12 fill-neutral-content opacity-70 max-md:-scale-x-100 md:-rotate-90" />
          <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
            <span className="text-6xl">🤒</span>
            <h3 className="font-bold">Start to get sick</h3>
          </div>
          <ArrowIcon className="shrink-0 w-12 fill-neutral-content opacity-70 md:-scale-x-100 md:-rotate-90" />
          <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
            <span className="text-6xl">😔</span>
            <h3 className="font-bold">Repeat the Process</h3>
          </div>
        </div>
      </div>
    );
  };
  
  const ArrowIcon = ({ className }) => (
    <svg className="shrink-0 w-12 fill-[#06402B] opacity-70 max-md:-scale-x-100 md:-rotate-90" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"></path></g></svg>
  );
  
  export default GamblingLossWarning;
  