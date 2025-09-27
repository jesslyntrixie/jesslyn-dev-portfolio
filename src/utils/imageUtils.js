// src/utils/imageUtils.js

export const getProjectImages = (project) => {
  const basePath = `/images/projects/${project.id}`;
  
  // Generate image array based on imageCount
  const images = Array.from({ length: project.imageCount }, (_, i) => 
    `${basePath}/${i + 1}.png`
  );
  
  return {
    thumbnail: images[0], // First image is always thumbnail
    gallery: images,
    all: images
  };
};

// Helper for checking if image exists (optional)
export const getProjectImageWithFallback = (project, index = 1) => {
  return `/images/projects/${project.id}/${index}.png`;
};