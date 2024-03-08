import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './index.css'
import { images } from '../../../assets';

const ImageUploader = ({ onUpload, index }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Handle file upload logic
        onUpload(acceptedFiles, index);
    }, [onUpload, index]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
    });

    return (
        <div {...getRootProps()} className='drop-zone'>
            <input {...getInputProps()} />
            {isDragActive ? (
                <>
                    <img src={images.uploadBannerImg} alt="" className="img-fluid" />
                    <p className='mb-0 mt-2 grey-text'>Upload Image</p>
                </>
            ) : (
                <>
                    <img src={images.uploadBannerImg} alt="" className="img-fluid" />
                    <p className='mb-0 mt-2 grey-text'>Upload Image</p>
                </>
            )}
        </div>
    );
};

export default ImageUploader;