import React from 'react';

interface ProjectLinkButtonProps {
  link: string;
  text: string;
  isClickable?: boolean;
}

export function ProjectLinkButton({ link, text, isClickable = true }: ProjectLinkButtonProps) {
  const commonClasses = "px-3 py-1 bg-green-500 text-white rounded-lg text-sm transition-colors";

  if (!isClickable) {
    return (
      <span className={`${commonClasses} opacity-70 cursor-not-allowed`}>
        {text}
      </span>
    );
  }

  return (
    <a
      href={link}
      target="_blanc"
      rel="noopener noreferrer"
      className={`${commonClasses} hover:bg-green-600`}
    >
      {text}
    </a>
  );
}
