import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <button className="text-sm text-neutral-400 hover:text-white transition-colors">
        Show all
      </button>
    </div>
  );
};

export default SectionHeader;