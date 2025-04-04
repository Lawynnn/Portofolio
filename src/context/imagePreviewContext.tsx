"use client";

import ImagePreview from "@/components/imagePreview";
import React from "react";

type ImagePreviewContextType = {
    displayImage: (image: string) => void;
    hideImage: () => void;
}

const ImagePreviewContext = React.createContext<ImagePreviewContextType | null>(null);

export const useImagePreview = () => {
    const context = React.useContext(ImagePreviewContext);
    if (!context) {
        throw new Error(
            "useImagePreview must be used within an ImagePreviewProvider"
        );
    }
    return context;
};

export const ImagePreviewProvider = ({ children }: { children: React.ReactNode }) => {
    const [image, setImage] = React.useState<string | null>(null);

    const displayImage = (image: string) => {
        console.log("Image modified", image)
        setImage(image);
    };

    const hideImage = () => {
        console.log("Image hidden")
        setImage(null);
    };

    return (
        <ImagePreviewContext.Provider value={{ displayImage, hideImage }}>
            {children}
            {image && <ImagePreview image={image} onOuterClick={hideImage} />}
        </ImagePreviewContext.Provider>
    );
}