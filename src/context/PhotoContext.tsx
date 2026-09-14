import React, { createContext, useContext, useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

interface PhotoContextType {
  photoUrl: string;
  isCustomPhoto: boolean;
  setCustomPhoto: (url: string) => void;
  handleFileUpload: (file: File) => Promise<boolean>;
  resetToDefault: () => void;
}

const PhotoContext = createContext<PhotoContextType>({
  photoUrl: personalInfo.photoUrl,
  isCustomPhoto: false,
  setCustomPhoto: () => {},
  handleFileUpload: async () => false,
  resetToDefault: () => {},
});

const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetItem = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
};

const safeRemoveItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
};

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    const saved = safeGetItem('rgk_custom_photo');
    if (saved && saved.length > 50) return saved;
    return personalInfo.photoUrl;
  });

  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    return !!safeGetItem('rgk_custom_photo');
  });

  useEffect(() => {
    // If no custom photo saved in localStorage, check if /raj.jpeg or /assets/raj.jpeg is available in public directory
    if (!safeGetItem('rgk_custom_photo')) {
      const testImg = new Image();
      testImg.src = '/raj.jpeg';
      testImg.onload = () => {
        setPhotoUrl('/raj.jpeg');
        setIsCustomPhoto(true);
      };
      testImg.onerror = () => {
        // keep personalInfo.photoUrl
      };
    }
  }, []);

  const setCustomPhoto = (url: string) => {
    setPhotoUrl(url);
    setIsCustomPhoto(true);
    safeSetItem('rgk_custom_photo', url);
  };

  const handleFileUpload = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        resolve(false);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setIsCustomPhoto(true);
          safeSetItem('rgk_custom_photo', result);
          resolve(true);
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  const resetToDefault = () => {
    safeRemoveItem('rgk_custom_photo');
    setPhotoUrl(personalInfo.photoUrl);
    setIsCustomPhoto(false);
  };

  return (
    <PhotoContext.Provider
      value={{
        photoUrl,
        isCustomPhoto,
        setCustomPhoto,
        handleFileUpload,
        resetToDefault,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(PhotoContext);
